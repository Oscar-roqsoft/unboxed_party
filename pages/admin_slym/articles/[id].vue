
<template>
    <div>
         <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto"/>
        </v-container>

        <v-container>
            <h1 class="tw-text-center tw-font-bold  pa-3  text-capitalize tw-text-2xl ">Create Article</h1>

            <v-card class="pa-4" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="articles.name"
                    label="Name"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="articles.author"
                    label="author"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-textarea
                    class="mb-2 rounded-xl"
                    v-model="articles.body"
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
                            <v-btn :loading="loading"  @click.prevent="createArticle"   size="x-large"  
                            color="blue-darken-4">Edit</v-btn>
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
        image: null,

        articles:'',

        loading:false,
       
        imageUrl: null, // URL for previewing uploaded image

        selectedimage:null,
        message:'',
    };
  },

  computed:{
    fetchedarticles() {
    return this.$store.state.myarticles;
      },
  },

  mounted() {
    console.log(this.fetchedarticles)
      var name = decodeURIComponent(this.$route.params.id)
      this.articles = this.fetchedarticles.find(el=>{
          return el.id = name
        })
        
    console.log(this.articles)
      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },

 


  methods: {
    

      async handleImageUpload(event){
          const file = event.target.files[0];
          if(!file) return;
          this.selectedimage = file

         

      },

     async createArticle() {
     
      this.loading = true

      const {secure_url} = await uploadToCloudinary(this.selectedimage);

      console.log(secure_url)
      
      const event ={
          name: this.articles.name,
          author: this.articles.author,
          body:this.articles.body,
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
          
          this.loading = false
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