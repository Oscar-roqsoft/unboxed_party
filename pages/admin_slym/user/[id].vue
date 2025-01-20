<template>
  <!-- <Backbutton class="ma-4"/> -->
  <div v-if="user" class="w-100 text-center">

    <v-card v-if="user.name" class="my-4 mx-auto" max-width="400" tile theme="dark">
      <div class="d-flex px-2 py-2  justify-space-between  align-center">
        <p variant="outlined" style="" class="text-capitalize text-left  font-weight-bold" rounded>
          Name

        </p>
        <p style="font-family: monospace !important"
          class="text-body-1 text-right text-grey-lighten-1 font-weight-light">
          {{ user.name }}
        </p>
      </div>
      <div class="d-flex px-2 py-2  justify-space-between  align-center">
        <p variant="outlined" style="" class="text-capitalize text-left  font-weight-bold" rounded>
          Phone

        </p>
        <p style="font-family: monospace !important"
          class="text-body-1 text-right text-grey-lighten-1 font-weight-light">
          <a target="_blank" :href="'tel:' + user.phone">
            {{ user.phone }}<v-icon size="16" class="ml-1">mdi-phone</v-icon>
          </a>
        </p>
      </div>
      <div class="d-flex px-2 py-2  justify-space-between  align-center">
        <p variant="outlined" style="" class="text-capitalize text-left  font-weight-bold" rounded>
          Email

        </p>
        <p style="font-family: monospace !important"
          class="text-body-1 text-right text-grey-lighten-1 font-weight-light">
          {{ user.email }}
        </p>
      </div>
      <div class="d-flex px-2 py-2  justify-space-between  align-center">
        <p variant="outlined" style="" class="text-capitalize text-left  font-weight-bold" rounded>
          Whatsapp

        </p>

        <p style="font-family: monospace !important"
          class="text-body-1 text-right text-grey-lighten-1 font-weight-light">
          <a :href="'https://wa.me/+234' +
            user.whatsapp +
            '?text= Hi%20' + user.name" target="_blank">
            {{ user.whatsapp }}<v-icon size="16" class="ml-1">mdi-whatsapp</v-icon>
          </a>

        </p>
      </div>
      <div class="d-flex px-2 py-2  justify-space-between  align-center">
        <p variant="outlined" style="" class="text-capitalize text-left  font-weight-bold" rounded>
          Actions
        </p>
        <p style="font-family: monospace !important"
          class="d-flex text-body-1 text-right text-grey-lighten-1 font-weight-light">

          <v-btn color="purple-darken-4" :loading="loading2" @click="sendTicketBtn(user)" size="small">
            Add ticket <v-icon class="mt-1 ml-1" icon="mdi mdi-ticket">
            </v-icon></v-btn>
        </p>
      </div>

    </v-card>
    <v-row class="pa-5" v-if="user.tickets">

      <v-col v-for="(item, i) in tickets" :key="i" class="d-flex align-center justify-center" md="4" sm="6" xs="12"
        lg="3">

        <v-card max-width="" color="" width="320" style="position:relative" height="auto" class=" align-center pa-0">
          <div class="">
            <div class="">
            </div>

            <h1 style="
        text-shadow: 0 0 15px black;" class="text-center text-white">{{ item.code }}</h1>
            <div class="px-3 info">

              <table style="width: 100%;">
                <thead>
                  <tr>
                    <th>PRICE</th>
                    <th>EVENT</th>
                    <th>ADMIT</th>
                  </tr>

                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">N{{ item.amount ? item.amount : 'FREE' }}</td>

                    <td class="text-center">{{ item.event }}</td>
                    <td class="text-center">{{ item.qty }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <v-btn
              :href="'https://wa.me/+234' +
                user.whatsapp +
                '?text= Hi%20' + user.name + ',%20here%20is%20the%20link%20to%20your%20ticket%20to%20unboxed%20party(' + item.event + '),%0ahttps://unboxedparty.com/tickets/' + item.code"
              target="_blank" size="small" color="green-darken-3" block> send <v-icon
                icon="mdi mdi-whatsapp"></v-icon></v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog z-index="9" v-model="dialog2" width="400" class="text-center ">
      <v-sheet class="pa-3">
        <h3 class="text-grey text-h6">Offline Tickets Fulfilment for {{ chosen.name }} (Email: {{ chosen.email }})</h3>
        <div class="d-flex my-3 px-3 align-center justify-space-between">
          <p class="text-h6 text-left font-weight-bold">Quantity :</p>

          <div style="width:150px" class=" mb-0 d-flex align-center justify-space-around ">

            <v-btn @click="decrementTicket" color="white" size="x-small"
              class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-minus" size="19px"></v-icon></v-btn>
            <p class="text-h5 font-weight-black mb-0">{{ qty }}</p>
            <v-btn @click="incrementTicket" color="white" size="x-small"
              class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-plus" size="19px"> </v-icon></v-btn>
          </div>
        </div>
        <div>

        </div>

        <v-select :items="events" item-title="name" item-value="id" variant="solo" density="compact" v-model="event"
          label="Event">
        </v-select>
        <v-text-field class="mb-2 rounded-xl" v-model="price" label="Price" density="compact"
          variant="solo"></v-text-field>

        <!-- <v-select
                  
                    :items="JSON.parse(this.events[0].tickets)"
                    item-title="amount"
                    item-value="id"
                    variant="solo"
                    density="compact"
                    v-model="price"
                    label="Price"
                    >
          </v-select> -->
        <!-- come back nd finalize the offline ticket process -->
        <v-btn :loading="loading2" @click="sendTicket(chosen)" size="x-large" rounded :disabled="!price || !event"
          color="grey" theme="" class="my-3 d-flex align-center font-weight-bold text-capitalize mx-auto">Send Ticket
          <v-icon class="ml-2 mt-1" icon="mdi mdi-cash"></v-icon></v-btn>
      </v-sheet>
    </v-dialog>

  </div>

</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

* {
  font-family: "Permanent Marker", cursive !important;
}
</style>
<script>
import moment from 'moment';
import { useStore } from '~~/store';
const store = useStore();

export default {

  mounted() {
    // console.log(JSON.parse(this.events[0].tickets))
    this.getUser();

  },
  data() {
    return {
      users: [],
      // events: [ {id: 5,name:'All White Affair'}],
      dialog: false,
      chosen: {},
      ticket: {},
      dialog2: false,
      loading: false,
      loading2: false,
      activeId: null,
      qty: 1,
      event: 'MeMe Edition',
      price: '2000',
      ticket_code: '123',
      event_ticket_name: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    tickets() {
      return this.user ? this.user.tickets : [];
    },
    events() {
      return this.$store.state.myevents.list;
    },
    event_name() {
      return get_on_sale_events_name();
    }

  },




  methods: {


    getUser() {
      fetch( "https://backend.unboxedparty.com/api/get_tickets?id=" + this.$route.params.id, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json', 'Authorization': `Bearer ${store.state.token}`
        }
      } )
        .then( ( response ) => {
          if ( response.ok ) {
            return response.json();
          }
          throw new Error( "Something went wrong" );
        } )
        .then( ( res ) => {
          // console.log(res)
          this.$store.dispatch( 'setUser', res.success.user );
        } )
        .catch( () => {
          alert( "An error has occurred" );
          this.loading = false;
        } );
    },
    incrementTicket() {
      this.qty++;
    },
    decrementTicket() {
      if ( this.qty <= 1 ) {
        return;
      } else {
        this.qty--;
      }
    },
    sendTicketBtn( e ) {
      this.chosen = e;
      this.dialog2 = true;
    },
    openTicketBtn( e ) {
      this.ticket = e[0];
      this.dialog = true;
    },
    sendTicket( e ) {
      this.activeId = e.id;

      this.loading2 = true;
      var event_name = this.events.find( ( el ) => {
        return el.id == this.event;
      } ).name;
      fetch( "https://backend.unboxedparty.com/api/sendTicket?amount=" + ( this.price * this.qty ) + "&email=" + e.email + "&user_id=" + e.id + "&event_id=" + this.event + "&event=" + event_name + "&qty=" + this.qty, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json", 'Authorization': `Bearer ${store.state.token}`
        }
      } )
        .then( ( response ) => {
          if ( response.ok ) {
            return response.json();
          }
          throw new Error( "Something went wrong" );
        } )
        .then( ( res ) => {
          this.loading2 = false;
          this.dialog2 = false;
          this.getUser();
        } )
        .catch( () => {
          this.dialog2 = false;
          this.loading2 = false;
        } );
    },
    get_tickets( x ) {
      this.activeId = x;
      this.loading = true;
      fetch( "https://backend.unboxedparty.com/api/get_tickets?id=" + x, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json', 'Authorization': `Bearer ${store.state.token}`


        }
      } )
        .then( ( response ) => {
          if ( response.ok ) {
            this.loading = false;
            this.dialog = true;
            return response.json();
          }
          throw new Error( "Something went wrong" );
        } )
        .then( ( res ) => {
          // console.log(res)
          this.loading = false;
          this.dialog = true;
        } )
        .catch( () => {
          alert( "An error has occurred" );
          this.loading = false;
        } );
    },
    formatDated( x ) {
      return moment( x ).format( "YYYY MM DD" );
    }
  }
};
</script>