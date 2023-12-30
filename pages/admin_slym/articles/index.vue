<template>
    <div>

        <v-container>
            <Backbutton class="md:tw-max-w-[980px] mx-auto"/>
        </v-container>

        <div v-if="toast" class="tw-fixed tw-top-1/3 tw-left-[12%] lg:tw-left-[40%] tw-min-h-28 tw-min-w-28 tw-rounded-lg tw-bg-[#282828]  tw-z-40
      tw-transition tw-duration-300 tw-ease-in-out tw-transform">
            <div class="tw-p-4 tw-py-6 tw-text-center ">
                <span class="tw-text-gray-100 ">Do You Want Delete The Article</span>
                <div class="mt-4">
                    <v-btn class="mx-2" @click="toast=false">Cancel</v-btn>
                    <v-btn class="mx-2" color="red" @click="deleteEvent(idItem)">confirm</v-btn>
                </div>
            </div>
       </div>

      <v-container class="pt-14 ">

        <v-row class="mb-6 tw-flex tw-justify-between md:tw-max-w-[980px] mx-auto">
          <h1  class="text-white px-4">Articles</h1>
          <v-btn class="mx-4 rounded-xl"  color="success" fab @click="$router.push('/admin_slym/articles/create')">
              Create article
          </v-btn>
        </v-row>

        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[980px] mx-auto">
          
            <div  class="tw-flex tw-flex-wrap tw-gap-2">
                <div v-for="(i,index) in fetchedArticles" class="tw-flex tw-flex-col ">
                    <div class="tw-max-w-[310px]  tw-rounded-md tw-gap-3">
            
                        <img class="tw-w-full tw-rounded-lg tw-mb-2" :src="i.image" alt="">
                        <div>Name: {{ i.name }}</div>
                        <div>Author: {{ i.author }}</div>
                        <article class="py-2">
                            {{ i.body.substring(0, 100)}}....
                        </article>
                    
                    </div>

                    <div class="tw-flex tw-my-4">

                        <v-btn color="blue-darken-4" @click="navigateTo(`/admin_slym/articles/${i.id}`)">Edit</v-btn>

                        <v-btn class="mx-2" color="error" @click="toast=true; idItem = i.id">Delete</v-btn>

                    </div>
                    
                </div>
            </div>
         
        </v-card>

      </v-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {id:1,title:"comedy",date:20,time:10},
        {id:2,title:"comedy",date:20,time:10},
        {id:3,title:"comedy",date:20,time:10},
        {id:4,title:"comedy",date:20,time:10}
      ],
      toast:false,
      idItem:null,

    };
  },

  computed:{
      fetchedArticles(){
        return this.$store.state.myarticles.list
      }

  },

  async mounted(){
    console.log(this.fetchedArticles)
    try {
          const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
            }
    
          }).then(res=>res.json());
          console.log(data)
    
          const payload =  [...data.articles]
        this.$store.dispatch("setMyArticles", payload);
        this.$store.dispatch("setMyArticlesExpirationDate", addMinutes(30));
    
        this.isLoading = false
        
        } catch (error) {
          console.error(error);
        }
  },



  methods:{
    async deleteEvent(eventId) {
      // Implement delete logic with API call and update events list
       const id ={
        id:eventId
       }
       console.log(id)
        try{
          const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
              },

              body:JSON.stringify(id)
              
            }).then(res=>res.json())

            const filteredItems = this.$store.state.myarticles.filter(item => item.id !== eventId)
           this.$store.dispatch("setMyArticles", filteredItems)

           this.toast =false
         
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>