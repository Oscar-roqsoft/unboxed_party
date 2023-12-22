
<template>
    <div>
        <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto "/>
        </v-container>

        <v-container>
            <h1 class="tw-text-center tw-font-bold  pa-3  text-capitalize tw-text-2xl md:tw-max-w-[800px] mx-auto">Create Article</h1>

            <v-card class="pa-4 md:tw-max-w-[800px] mx-auto" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="name"
                    label="Name"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="author"
                    label="author"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-textarea
                    class="mb-2 rounded-xl"
                    v-model="body"
                    label="body"
                    persistent-hint
                    density="compact"
                    variant="solo"
                    ></v-textarea>

                    <v-card-text>
                        <v-file-input
                        accept="image/*"
                        label="Event Image"
                        v-model="image"
                        @input="handleImageUpload($event)"
                        prepend-icon="mdi-image"
                        variant="solo"
                        />
                        <v-img  :src="imageUrl" max-width="200" max-height="200" v-if="imageUrl" />
                    </v-card-text>


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col">
                            <span class="tw-text-red-500 pa-2" v-if="message.length">{{ message }}*</span>
                            <v-btn  @click.prevent="createArticle"   size="x-large"  
                            color="blue-darken-4" :loading="loading">Create</v-btn>
                        </div>

                    </div>

                </v-form>

            </v-card>

        </v-container>

    </div>
</template>

<script>
import {handleFileChange,uploadToCloudinary,asyncRequest} from "@/composables/mixins"
export default {
  data() {
    return {
        name: "",
        author:"",
        body: "",
        image: [],

        loading:false,

        
       
        imageUrl: null, // URL for previewing uploaded image

        selectedimage:null,
        message:'',
    };
  },



 


  methods: {
    

      async handleImageUpload(event){
          const file = event.target.files[0];
          if(!file) return;
          this.selectedimage = file

         

      },

     async createArticle() {
      if(!this.name) return this.message = 'enter event name'
      if(!this.author) return this.message = 'enter event author'
      if(!this.body) return this.message = 'enter event body'
      this.loading = true

      const {secure_url} = await uploadToCloudinary(this.selectedimage);
      if(!secure_url) return alert("failed to upload file");

      console.log(secure_url)
      
      const event ={
          name: this.name,
          author: this.author,
          body:this.body,
          image:secure_url,
      }

      console.log(event)

      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
              method:"POST",
              headers:{
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(event)
          }).then(res=>res.json())

          this.loading = true
          console.log(data)

          navigateTo("/admin_slym/articles")

      }catch(e){
         console.log(e)
      }

    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

* {
font-family: "Permanent Marker", cursive !important;
}
</style>