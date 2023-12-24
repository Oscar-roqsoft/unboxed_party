<template>
    <div>
        <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto"/>
        </v-container>


      <v-container class="pt-14">
     

        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[800px] mx-auto">
          
            <v-container>
            <h1 class="tw-text-center tw-font-bold tw-mt-10 pa-3  text-capitalize tw-text-2xl ">Edit Category</h1>

            <v-card class="pa-4" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="cateitem.name"
                    label="Category"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>
                   


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col">
                            <v-btn :loading="loading"  @click.prevent="editCategory(cateitem.id)"   size="x-large"  
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
export default {
  data() {
    return {
        cateitem:'',
        loading:false,
    };
  },

  computed:{
    fetchedcategory() {
    return this.$store.state.mycategory;
      },
  },

  mounted() {
      var name = decodeURIComponent(this.$route.params.name)
      console.log(name)
      this.cateitem = this.fetchedcategory.find(el=>{
          return el.name == name
        })

        console.log(this.cateitem.name)
        
      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },


  methods: {
    
     async editCategory(id) {
     
        this.loading = true
        const categoryobj ={
        id:id,
        name:this.cateitem.name,
      }

      console.log(categoryobj)

      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/category`,{
              method:"PATCH",
              headers:{
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(categoryobj)
          }).then(res=>res.json())
         
          this.loading = false
          console.log(data)
          navigateTo('/admin_slym/category')

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