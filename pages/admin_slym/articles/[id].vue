
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
                            <v-btn :loading="loading"  @click.prevent="createArticle()"   size="x-large"  
                            color="blue-darken-4">Confirm Edit</v-btn>
                        </div>

                    </div>

                </v-form>

            </v-card>

        </v-container>

    </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import {handleFileChange,uploadToCloudinary,asyncRequest} from "@/composables/mixins"
export default {
  setup () {
    const toast = (message) => {
        createToast(message)
    }
    return { toast }
  },

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
    return this.$store.state.myarticles.list;
      },
  },

  mounted() {
      var name = decodeURIComponent(this.$route.params.id)
      this.articles = this.fetchedarticles.find(el=>{
          return el.id = name
        })
        
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

      const event ={
          id:this.articles.id,
          name: this.articles.name,
          author: this.articles.author,
          body:this.articles.body,
          image:secure_url ? secure_url : this.articles.image,
      }

      console.log(event)


      try{

          const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
              method:"PATCH",
              headers:{
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(event)
          }).then(res=>res.json())

          console.log('good',data)

          if(data.success) {

              this.toast("Article edited successfully")
    
            // const payload =  [...data.articles]
            // this.$store.dispatch("setMyArticles", payload);
            // this.$store.dispatch("setMyArticlesExpirationDate", addMinutes(30));
            
          }
          this.loading = false

          navigateTo("/admin_slym/articles")

      }catch(e){
         console.log(e)
         this.toast(
              "message status: failed to update Article ",
           )
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