<template>

        <v-container>
            <Backbutton class="md:tw-max-w-[800px] mx-auto"/>
        </v-container>


        <div v-if="toast" class="tw-fixed tw-top-1/3 tw-left-[12%] lg:tw-left-[40%] tw-min-h-28 tw-min-w-28 tw-rounded-lg  tw-bg-[#282828] tw-z-40
      tw-transition tw-duration-300 tw-ease-in-out tw-transform">
            <div class="tw-p-4 tw-py-6 tw-text-center ">
                <span class="tw-text-gray-100 ">Do You Want Delete {{ categoryName }}</span>
                <div class="mt-4">
                    <v-btn class="mx-2" @click="toast=false">Cancel</v-btn>
                    <v-btn class="mx-2" color="red" @click="deleteEvent(idItem)">confirm</v-btn>
                </div>
            </div>
       </div>

      <v-container class="tw-mb-10 py-6 tw-w-full">
        
        <v-row class="mb-6 tw-flex tw-justify-between tw-items-center md:tw-max-w-[800px] mx-auto">
          <h1  class="text-white px-4">Category</h1>
          <v-btn class="mx-1 tw-mt-2 md:tw-mt-0 rounded-xl"  color="success" fab @click="$router.push('/admin_slym/category/create')">
              Create categories
          </v-btn>
        </v-row>

        <div theme="dark"  class="text-white tw-w-full md:tw-max-w-[800px] mx-auto">
          
            <div  class="tw-flex tw-flex-col">
                     <div class="tw-w-full">
                       <div class="tw-flex tw-w-full tw-justify-between tw-items-center tw-border-b tw-border-gray-800 tw-py-4 tw-my-2">
                            <span>S/N</span>
                            <span>Category name</span>
                            <div class="mx-14"></div>
                            <div></div>
                        </div>
                     </div>

                <div v-for="i in fetchedcategory" :key="i.id" class="tw-flex tw-flex-col ">
                    <div class="tw-w-full tw-rounded-md">
            
                      <div class="tw-flex tw-w-full tw-justify-between tw-items-center tw-gap-3  tw-border-b tw-border-gray-800 tw-py-4 tw-my-2">
                          <!-- <span>{{ index + 1 }}</span> -->
                          <span>{{ i.name }}</span>
                          <v-btn color="primary" @click.prevent="navigateTo(`/admin_slym/category/${i.name}`)">Edit</v-btn>
                          <v-btn  class="mx-2"  color="error" @click.prevent="toast=true ; idItem = i.id;categoryName = i.name">
                              Delete
                          </v-btn>
                      </div>
                    
                    </div>
                   
                </div>

            </div>
         
        </div>

      </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading:[
        {id:null,isloading:false},
       
      ],

      toast:false,
      idItem:null,
      categoryName:'',

    };
  },


computed: {

  fetchedcategory() {
    return this.$store.state.mycategory;
  },

},


  async mounted(){

    try {
        const data = await fetch(`https://backend.unboxedparty.com/api/category`,{
            method:"GET",
            headers:{
            'Content-Type': 'application/json',
            }
        }).then(res=>res.json());

        

        const payload =  [...data.categories]
        this.$store.dispatch("setMyCategory", payload);

    } catch (error) {
      console.error(error);
    }

  },



  methods:{
    async deleteEvent(categoryId) {
      
      
       const id ={
        id:categoryId
       }

        try{
          const data = await fetch(`https://backend.unboxedparty.com/api/category`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
              },

              body:JSON.stringify(id)
              
            }).then(res=>res.json())
       
          
           const filteredItems = this.$store.state.mycategory.filter(item => item.id !== categoryId)
           this.$store.dispatch("setMyCategory", filteredItems);
             

             this.toast = false
         
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>