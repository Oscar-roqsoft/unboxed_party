
<template>
    <div>
        <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto"/>
        </v-container>

      <v-container class="mt-10">
        
        <v-row class="mb-6 tw-flex tw-justify-between md:tw-max-w-[800px] mx-auto">
          <h1  class="text-white px-4">Update General Settings</h1>
       
        </v-row>

        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[800px] mx-auto">
          
            <v-container>
            <h1 class="tw-text-center tw-font-bold tw-mt-10 pa-3  text-capitalize tw-text-2xl ">Update Home Video</h1>

            <v-card class="pa-4" style="background: #22222261;">

                <v-form>

                    <v-col  class="d-flex tw-justify-center  align-center  mb-12" style="max-width: 700px;" :cols="cols[2]">
                        <iframe class="rounded-lg" width="450" height="250" :src="fetchvideo.home_page_video_url" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </v-col>
                   


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col">
                            <v-btn  @click.prevent="navigateTo('/admin_slym/settings/home_video')"   size="x-large"  
                            color="blue-darken-4">Edit</v-btn>
                        </div>

                    </div>

                </v-form>

            </v-card>

        </v-container>
         
        </v-card>

      </v-container>
    </div>
</template>

<script>
import {handleFileChange,uploadToCloudinary,asyncRequest} from "@/composables/mixins"
import { useStore } from '~~/store';
const store = useStore();
export default {
  data() {
    return {
        name: "",
       
    };
  },



 computed:{
    displ() {
      return this.$vuetify.display;
    },
    cols() {
      const { xl, lg, sm, md } = this.$vuetify.display;
      return (lg || xl)
        ? [4, 12, 6, 4, 8, 4, 3]
        : md
        ? [4, 12, 12, 6, 8, 4, 3]
        : sm
        ? [6, 12, 12, 12, 12, 12, 12]
        : [6, 12, 12, 12, 12, 12, 12];
    },
    fetchvideo(){
        return this.$store.state.myvideo
    }
 },


 async mounted(){

    try{
          const data = await fetch(`https://backend.unboxedparty.com/api/general-settings`,{
              method:"Get",
              headers:{
                'Content-Type': 'application/json', 'Authorization': `Bearer ${store.state.token}`
              },
          }).then(res=>res.json())

          console.log(data)
        const payload =  data.settings
        this.$store.dispatch("setMyVideo", payload);

      }catch(e){
         console.log(e)
      }

},



  methods: {
    


  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

* {
font-family: "Permanent Marker", cursive !important;
}
</style>
