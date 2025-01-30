<template>
  <div>
    <v-btn @click="downloadPDF" color="primary" class="mb-4">Download PDF</v-btn>
    <v-card tile theme="light">
      <div class="pa-5 d-flex justify-space-between">
        <h1>People ({{ tickets.length }}) total tickets <span v-if="!loader">
            ({{ $route.params.id == 3 ? ticket_no.unn : ticket_no.ekiti }})
          </span>
        </h1>

        <v-btn :loading="loader" @click="getUsers(true)" icon size="small"><v-icon
            icon="mdi mdi-reload"></v-icon></v-btn>
      </div>
      <v-table theme="light" class=" pb-12 px-3 mb-12 v-table-pdf">
        <thead>
          <tr>
            <th class="text-left font-weight-black text-h5">
              S/N
            </th>

            <th class="text-left font-weight-black text-h5">
              Name
            </th>

            <th class="text-left font-weight-black text-h5">
              Email
            </th>
            <th class="text-left font-weight-black text-h5">
              Phone
            </th>
            <th class="text-left font-weight-black text-h5">
              Whatsapp
            </th>
            <th class="text-left font-weight-black text-h5">
              Amount
            </th>
            <th class="text-left font-weight-black text-h5">
              Code
            </th>
            <th class="text-left font-weight-black text-h5">
              Quantity
            </th>
            <th class="text-left font-weight-black text-h5">
              Created
            </th>
            <!-- <th class="text-left font-weight-black text-h5">
              Updated
            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, i in tickets" :key="i">
            <td>{{ i + 1 }}</td>
            <td class=" font-weight-medium">{{ item.name }}</td>
            <td class="text-blue">{{ item.email }}</td>
            <td><a target="_blank" :href="'tel:' + item.phone">{{ item.phone }} <v-icon>mdi-phone</v-icon></a></td>

            <td><a
                :href="'https://wa.me/+234' +
                  item.whatsapp +
                  '?text=Hi%20' + item.name + ',%20UNBOXED%20PARTY%20is%20coming%20to%20NSUKKA%20and%20we%20are%20excited%20as%20we%20cant%20wait%20to%20party%20with%20you,%20here%20is%20the%20link%20to%20your%20ticket%20to%20unboxed%20party(%20hollywood%20high%20school),%20https://unboxedparty.com/tickets/' + item.tickets[0].code + '%20'"
                target="_blank">{{ item.whatsapp }} <v-icon>mdi-whatsapp</v-icon></a></td>

            <td>#{{ item.tickets[0].amount }}</td>
            <td class="text-red">{{ item.tickets[0].code }}</td>
            <td>{{ item.tickets[0].qty }}</td>
            <td>{{ formatDated(item.tickets[0].created_at) }}</td>
            <!-- <td>{{ formatDated(item.updated_at) }}</td> -->

          </tr>
        </tbody>
      </v-table>
    </v-card>
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
        <!-- come back nd finalize the offline ticket process -->
        <v-btn :loading="loading2" @click="sendTicket(chosen)" size="x-large" rounded color="grey" theme=""
          class="my-3 d-flex align-center font-weight-bold text-capitalize mx-auto">Send Ticket <v-icon
            class="ml-2 mt-1" icon="mdi mdi-cash"></v-icon></v-btn>
      </v-sheet>
    </v-dialog>
    <v-dialog z-index="9" v-model="dialog" width="300">
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
// import { useStore } from '~~/store';
import html2pdf from 'html2pdf.js';

export default {
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    ticket_no() {
      return this.$store.state.ticket_no;
    },
    student_no() {
      return this.$store.state.student_no;
    },
  },
  mounted() {
    this.getUsersbtn();
  },
  data() {
    return {
      dialog: false,
      loader: false,
      chosen: {},
      ticket: {},
      dialog2: false,
      loading: false,
      loading2: false,
      activeId: null,
      qty: 1,
      ticket_code: '123'
    };
  },

  methods: {

    getUsersbtn() {
      this.getUsers();

    },

    getUsers( x ) {
      const authData = localStorage.getItem( 'unboxAdminApp' )
      const parsedAuth = JSON.parse( authData );
      const token = parsedAuth.state?.token;
      this.loader = true;
      this.$store.dispatch( 'setTickets', [] );
      fetch( "https://backend.unboxedparty.com/api/ticket_list?id=" + this.$route.params.id, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } ).then( ( response ) => {
        if ( response.ok ) {
          return response.json();
        }
        throw new Error( "Something went wrong" );
      } )

        .then( ( res ) => {
          // console.log(res)
          this.loader = false;
          this.$store.dispatch( 'setTickets', res.success.users );
          //  console.log( res.success)
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
    sendTicketBtn( item ) {
      this.chosen = item;
      this.dialog2 = true;
    },
    openTicketBtn( item ) {
      // this.ticket = e.tickets[0]
      // this.dialog = true
      // console.log(item)
      this.$store.dispatch( 'setUser', item );
      // console.log(this.$store.state.user.user)
      this.$router.push( '/admin_slym/student/' + item.id );
    },

    get_tickets( x ) {
      this.activeId = x;
      this.loading = true;
      fetch( "https://backend.unboxedparty.com/api/get_tickets?id=" + x, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'


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
    },
    downloadPDF() {
      // Select the correct table element
      const element = this.$el.querySelector( '.v-table-pdf' );

      if ( !element ) {
        console.error( "Table element not found" );
        return;
      }

      // Configure PDF options
      const opt = {
        margin: 1,
        filename: 'tickets-bought-report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4, useCORS: true },
        jsPDF: { unit: 'in', format: 'tabloid', orientation: 'landscape' }
      };

      // Generate and download PDF
      html2pdf().set( opt ).from( element ).save();
    }

  }
};
</script>