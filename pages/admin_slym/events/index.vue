<template>

  <div>

    <v-container>
      <div class=" md:tw-max-w-[1000px] mx-auto">

        <v-btn color="blue-darken-4" @click.prevent="navigateTo('/admin_slym/routes')" class="rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64" />
          </svg>
        </v-btn>
      </div>
    </v-container>


    <v-container>

      <div v-if="toast" class="tw-fixed tw-top-1/3 tw-left-[12%] lg:tw-left-[40%] tw-min-h-28 tw-min-w-28 tw-rounded-lg  tw-bg-[#282828] tw-z-40
      tw-transition tw-duration-300 tw-ease-in-out tw-transform">
        <div class="tw-p-4 tw-py-6 tw-text-center ">
          <span class="tw-text-gray-100 ">Do You Want Delete {{ itemName }} </span>
          <div class="mt-4">
            <v-btn class="mx-2" @click="toast = false">Cancel</v-btn>
            <v-btn class="mx-2" color="red" @click="deleteEvent(idItem)">confirm</v-btn>
          </div>
        </div>
      </div>


      <v-row class="mb-6 tw-flex tw-justify-between tw-items-center md:tw-max-w-[1000px] mx-auto">
        <h1 class="text-white px-4">Events</h1>

        <div class="d-flex  align-items-center ">

          <div class="tw-flex tw-mb-4 pa-1">
            <v-btn @click="navigateTo(`/admin_slym/get_general_numbers`)" color="blue-darken-3 "
              class="mx-1 rounded-xl">
              phones No
            </v-btn>
          </div>
          <div class="tw-flex tw-mb-4 pa-1">
            <v-btn @click="navigateTo(`/admin_slym/get_general_emails`)" color="blue-darken-3 " class="mx-1 rounded-xl">
              emails
            </v-btn>
          </div>

          <v-btn class="mx-4 rounded-xl" color="success" fab @click="$router.push('/admin_slym/events/create')">
            Create Event
          </v-btn>

        </div>
      </v-row>


      <v-card theme="dark" class="text-white pa-4 md:tw-max-w-[1000px] mx-auto">


        <div class="tw-flex tw-flex-wrap tw-gap-4">
          <div v-for="(i, index) in events" :key="i.name" class="tw-flex tw-flex-col ">
            <div class="tw-w-[310px]  tw-rounded-md">

              <v-card>
                <!-- <img class="tw-w-full" :src="imageFilter(i.image,700,700)" alt=""> -->

                <v-img cover height="210px" max-width="500px" class="rounded-xl" :src="i.image"></v-img>



                <div class="pa-2">
                  <div class="tw-mt-2">Name: {{ i.name }}</div>
                  <div>Caption: {{ i.caption }}</div>
                  <div>Desc: {{ i.description.substring(0, 100) }}...</div>
                  <div>Total Tickets Sold: {{ i.total_tickets_sold }}</div>
                </div>

                <div class="tw-flex tw-mt-4 pa-2">
                  <v-btn color="primary" @click="navigateTo(`/admin_slym/events/${i.id}`)">Edit</v-btn>
                  <v-btn class="mx-2" color="error" @click="toast = true; idItem = i.id; itemName = i.name"
                    :loading="loading">Delete</v-btn>
                </div>
                <div class="tw-flex tw-mb-4 pa-2">
                  <v-btn @click="navigateTo(`/admin_slym/ticket_dash/${i.id}`)" color="blue-darken-3">Ticket
                    Lists</v-btn>
                </div>
                <div class="tw-flex tw-mb-4 pa-1">
                  <v-btn @click="navigateTo(`/admin_slym/get_emails/${i.id}`)" color="blue-darken-3">View emails of
                    attendees</v-btn>
                </div>
                <div class="tw-flex tw-mb-4 pa-1">
                  <v-btn @click="navigateTo(`/admin_slym/get_phones/${i.id}`)" color="blue-darken-3">View phones of
                    attendees</v-btn>
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
import { imageFilter } from '@/composables/mixins';
import { useStore } from '~~/store';
const store = useStore();
export default {
  data() {
    return {
      dialog: false,
      toast: false,
      idItem: null,
      itemName: '',
      loading: false,
      qty: null,
    };
  },


  computed: {

    events() {
      return this.$store.state.myevents.list;
    },
    myticketQty() {
      return this.$store.state.myticketQty.list;
    },
  },

  async mounted() {
    // console.log( this.events );
    try {
      const data = await fetch( `https://backend.unboxedparty.com/api/events_list_qty`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${store.state.token}`
        }
      } ).then( res => res.json() );
      // console.log( 'new', data.events );


      const payload = [...data.events];
      payload.reverse( payload );
      this.$store.dispatch( "setMyEvents", payload );
      this.$store.dispatch( "setMyEventsExpirationDate", addMinutes( 30 ) );

      this.isLoading = false;
    } catch ( error ) {
      console.error( error );
    }


    // try {
    //     for (let i = 0; i < this.$store.state.myevents.list.length; i++) {
    //       const eventId = this.events[i].id;
    //       console.log(eventId)
    //       const response = await fetch(`https://backend.unboxedparty.com/api/ticket_list?id=${eventId}`, {
    //         method: "GET",
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Allow-Origin': '*',
    //           'Accept': 'application/json'
    //         }
    //       });

    //       const data = await response.json();
    //       let dataArray = []
    //       dataArray.push(data)
    //       // console.log(dataArray);

    //       this.qty = data.success.users[0]?.tickets[0]?.event
    //       console.log(this.qty?.users[0]?.tickets[0]?.event)

    //       // If you want to dispatch data to the store, do it here
    //       // const payload =  [...data.events];
    //       // payload.reverse(payload);
    //       // this.$store.dispatch("setMyEvents", payload);
    //       // this.$store.dispatch("setMyEventsExpirationDate", addMinutes(30));
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }





  },


  methods: {
    //  async getUsers(x){
    //   let ticketQty = null
    //   try {
    //       const data = await fetch(`https://backend.unboxedparty.com/api/ticket_list?id=`+ x,{
    //         method:"GET",
    //         headers:{
    //            'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Accept': 'application/json'
    //         }
    //       }).then(res=>res.json());

    //       ticketQty = data.success.total_quantity

    //       console.log(ticketQty)
    //       // const payload =  [...data.events]
    //       // payload.reverse(payload)
    //       // this.$store.dispatch("setMyEvents", payload);
    //       // this.$store.dispatch("setMyEventsExpirationDate", addMinutes(30));

    //     } catch (error) {
    //       console.error(error);
    //     }


    // },
    async deleteEvent( eventId ) {
      // Implement delete logic with API call and update events list
      const id = {
        id: eventId
      };
      // console.log( id );
      this.loading = true;
      try {
        const data = await fetch( 'https://backend.unboxedparty.com/api/events_list_qty', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.token}`
          },

          body: JSON.stringify( id )

        } ).then( res => res.json() );
        this.loading = false;

        const filteredItems = this.$store.state.myevents.filter( item => item.id !== eventId );
        this.$store.dispatch( "setMyEvents", filteredItems );

        this.toast = false;
      } catch ( error ) {
        console.error( error );
      }
    }
  }
}

</script>
