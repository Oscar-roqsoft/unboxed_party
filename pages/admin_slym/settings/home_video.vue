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
export default {
  data() {
    return {
        name: "",
        loading:false,
    };
  },


  methods: {
    
     async updateSetting() {
     
      this.loading= true
    
      const video ={
       
        home_page_video_url: this.name,

        id: 1,

      }

      console.log(video)

      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/general-settings`,{
              method:"PATCH",
              headers:{
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(video)
          }).then(res=>res.json())
          this.loading= false
          console.log(data)
            navigateTo('/admin_slym')
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