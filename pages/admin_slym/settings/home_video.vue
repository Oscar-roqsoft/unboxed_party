<template>
    <div>
        <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto"/>
        </v-container>

      <v-container class="pt-14 ">
        

        <v-row class="mb-6 tw-flex tw-justify-between tw-text-center md:tw-max-w-[800px] mx-auto">
          <h1  class="text-white px-4 ">Update General Settings</h1>
        </v-row>


        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[800px] mx-auto">
          
            <v-container>
            <h1 class="tw-text-center tw-font-bold tw-mt-10 pa-3  text-capitalize tw-text-2xl ">Update Home Video</h1>

            <v-card class="pa-4" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="name"
                    label="Home Page Video link"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>
                   


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col">
                            <v-btn :loading="loading"  @click.prevent="updateSetting"   size="x-large"  
                            color="blue-darken-4">Update</v-btn>
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
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import { useStore } from '~~/store';
const store = useStore();
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
        loading:false,
    };
  },


  methods: {
    getYouTubeVideoId(url) {
        // Regular expression to match YouTube video ID
          // Check if it's a regular YouTube video URL
      var regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      var match = url.match(regExp);
      if (match) {
          return match[1];
      }

      // Check if it's a YouTube Shorts URL
      var shortsRegExp = /(?:youtube\.com\/shorts\/|youtu\.be\/)([^"&?\/\s]{11})/;
      var shortsMatch = url.match(shortsRegExp);
      if (shortsMatch) {
          return shortsMatch[1];
      }
    },

    
     async updateSetting() {
     
      this.loading= true
    
      const video ={
       
        home_page_video_url: `https://www.youtube.com/embed/${this.getYouTubeVideoId(this.name)}`,

        id: 1,

      }
      // console.log(video)


      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/general-settings`,{
              method:"PATCH",
              headers:{
                'Content-Type': 'application/json', 'Authorization': `Bearer ${store.state.token}`
              },
              body:JSON.stringify(video)
          }).then(res=>res.json())

          if(data.success) this.toast('Video Uploaded successfully')
          this.loading= false
            navigateTo('/admin_slym/routes')
      }catch(e){
        //  console.log(e)
         this.toast('message status:  Video failed to upload')
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