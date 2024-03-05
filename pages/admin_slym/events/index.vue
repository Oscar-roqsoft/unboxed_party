<template>

    <div>

      <v-container>
            <Backbutton class=" md:tw-max-w-[1000px] mx-auto"/>
        </v-container>

        
      <v-container>

        <div v-if="toast" class="tw-fixed tw-top-1/3 tw-left-[12%] lg:tw-left-[40%] tw-min-h-28 tw-min-w-28 tw-rounded-lg  tw-bg-[#282828] tw-z-40
      tw-transition tw-duration-300 tw-ease-in-out tw-transform">
            <div class="tw-p-4 tw-py-6 tw-text-center ">
                <span class="tw-text-gray-100 ">Do You Want Delete {{ itemName }} </span>
                <div class="mt-4">
                    <v-btn class="mx-2" @click="toast=false">Cancel</v-btn>
                    <v-btn class="mx-2" color="red" @click="deleteEvent(idItem)">confirm</v-btn>
                </div>
            </div>
       </div>


        <v-row class="mb-6 tw-flex tw-justify-between tw-items-center md:tw-max-w-[1000px] mx-auto">
          <h1  class="text-white px-4">Events</h1>
          <v-btn class="mx-4 rounded-xl" color="success" fab @click="$router.push('/admin_slym/events/create')">
              Create Event
          </v-btn>
        </v-row>


        <v-card theme="dark"  class="text-white pa-4 md:tw-max-w-[1000px] mx-auto">
          

          <div  class="tw-flex tw-flex-wrap tw-gap-4">
            <div v-for="(i,index) in events" :key="i.name" class="tw-flex tw-flex-col ">
              <div class="tw-w-[310px]  tw-rounded-md">
                
                <v-card>
                  <!-- <img class="tw-w-full" :src="imageFilter(i.image,700,700)" alt=""> -->

                  <v-img
                  cover
                  height="210px"
                  max-width="500px"
                  class="rounded-xl"
                  :src="i.image"
                ></v-img>

                  

                  <div class="pa-2">
                    <div class="tw-mt-2">Name: {{ i.name }}</div>
                    <div>Caption: {{ i.caption }}</div>
                    <div>Desc: {{ i.description.substring(0, 100) }}...</div>
                  </div>
              
                  <div class="tw-flex tw-my-4 pa-2">
                    <v-btn color="primary" @click="navigateTo(`/admin_slym/events/${i.id}`)">Edit</v-btn>
                    <v-btn class="mx-2" color="error" @click="toast = true; idItem = i.id; itemName = i.name" :loading="loading">Delete</v-btn>
                  </div>
                </v-card>


              </div>

              <!-- <div > -->
                <!-- <span>captions:</span>
                   <div v-for="i in JSON.parse(i.tickets) " class="tw-flex">
                        <span class="mx-4">{{i.name}} </span>
                        <span>{{ i.value }}</span>
                   </div>
              </div> -->

            </div>
          </div>


         
        </v-card>

      </v-container>
    </div>


</template>

<script>
import {imageFilter} from '@/composables/mixins'
export default {
  data() {
    return {
      dialog: false,
      toast:false,
      idItem:null,
      itemName:'',
      loading:false,
    };
  },


  computed: {
    
      events () {
      return this.$store.state.myevents.list
    },
  },

  async mounted(){
    console.log(this.events)
    try {
          const data = await fetch(`https://backend.unboxedparty.com/api/event`,{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
            }
          }).then(res=>res.json());
          console.log(data.events)
    
    
          const payload =  [...data.events]
          payload.reverse(payload)
          this.$store.dispatch("setMyEvents", payload);
          this.$store.dispatch("setMyEventsExpirationDate", addMinutes(30));
    
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
       this.loading = true
        try{
          const data = await fetch('https://backend.unboxedparty.com/api/event',{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
              },

              body:JSON.stringify(id)
              
            }).then(res=>res.json())
            this.loading = false

            const filteredItems = this.$store.state.myevents.filter(item => item.id !== eventId)
           this.$store.dispatch("setMyEvents", filteredItems)
          
         this.toast = false
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>

