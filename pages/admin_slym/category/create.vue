<template>
    <div>
        <v-container>
            <Backbutton class=" md:tw-max-w-[800px] mx-auto"/>
        </v-container>
      <v-container class="md:pt-14">
     

        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[800px] mx-auto">
          
            <v-container>
            <h1 class="tw-text-center tw-font-bold pa-3  text-capitalize tw-text-2xl ">Create Category</h1>

            <v-card class="pa-4" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="category"
                    label="Category"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>
                   


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col">
                            <v-btn :loading="loading" @click.prevent="createCategory"   size="x-large"  
                            color="blue-darken-4">Create</v-btn>
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
        category: "",
        loading:false,
    };
  },


  methods: {
    
     async createCategory() {


     
      this.loading = true
      const category ={
        name: this.category,
      }



      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/category`,{
              method:"POST",
              headers:{
                'Content-Type': 'application/json', 'Authorization': `Bearer ${store.state.token}`
              },
              body:JSON.stringify(category)
          }).then(res=>res.json())

          if(data.success) this.toast("Category created successfully");

          this.loading = false

        this.$router.go(-1)
      }catch(e){
        //  console.log(e)
         this.toast(
              "message status: failed to create Category ",
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