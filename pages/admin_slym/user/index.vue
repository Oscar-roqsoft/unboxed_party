<template>
  <div>
    <v-container>
      <Backbutton class="md:tw-max-w-[980px] mx-auto" />
    </v-container>
    <!-- <div class="ma-4">

      <v-btn color="blue-darken-4" @click.prevent="navigateTo('/admin_slym/routes')" class="rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64" />
        </svg>
      </v-btn>
    </div> -->

    <v-card tile theme="dark">

      <div class="pa-5 d-flex justify-space-between align-center tw-flex-wrap">

        <h1>Users({{ users.length }})</h1>
        <!-- <h1  class="text-blue font-weight-medium" @click="$router.push('/admin_slym/ticket_dash/2')">Tickets({{ ticket_no.tickets }})</h1> -->
        <h1 class="text-blue font-weight-medium mx-2" @click="$router.push('/admin_slym/ticket_dash/7')">MOUAU({{
          ticket_no.all_white }})</h1>
        <!-- <h1  class="text-blue font-weight-medium" @click="$router.push('/admin_slym/ticket_dash/4')">EKITI({{ ticket_no.ekiti }})</h1> -->
        <!-- <h1  class="text-blue font-weight-medium" @click="$router.push('/admin_slym/bts_dash')">Students({{ student_no }})</h1> -->

        <div class=" tw-mt-4 md:tw-mt-0">
          <v-btn @click="toggleModal" type="submit" class="pa-2 mx-4" color="blue-darken-4">send bulk
            email</v-btn><!-- toggle modal display -->

          <v-btn :loading="loader" @click="getUsers(true)" icon size="small"><v-icon
              icon="mdi mdi-reload"></v-icon></v-btn>
        </div>
      </div>


      <!-- start modal -->

      <div v-if="showModal" class="modal-wrapper active overflow-y-scrol tw-z-[99999px]">
        <div class="modal-content tw-grid tw-grid-cols-1  tw-gap-3 tw-overflow-y-scroll tw-mt-12 
            tw-mx-2 md:tw-mx-0 md:tw-mt-0 tw-z-[99999px]">
          <button @click="showModal = false" class="modal-close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="#ffff"
                d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21L3 16.74m9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42L12 13.41Z" />
            </svg>
          </button>

          <AdminSmsModal @close="v = showModal = v" />

        </div>
      </div>

      <!-- end modal -->

      <!-- <v-data-table-virtual
    :headers="headers"
    :items="users"
    item-value="name"
  ></v-data-table-virtual>
  <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field>
    </template> -->

      <!-- <div class="table-btn">

      <v-card
        flat
      >
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </template>
  
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
        ></v-data-table>
      </v-card>
    </div> -->


      <!--         
    <div class="table-btn">
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
    >
    
    </v-data-table>
  </div> -->

      <v-table theme="dark" class=" pb-12 px-3 mb-12">
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
              Created
            </th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item, i in users" :key="i">
            <td>{{ i + 1 }}</td>
            <td class="text-blue font-weight-medium" @click.stop="openTicketBtn(item)">{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td><a target="_blank" :href="'tel:' + item.phone">{{ item.phone }}<v-icon>mdi-phone</v-icon></a></td>
            <td><a
                :href="'https://wa.me/+234' +
                  item.whatsapp +
                  '?text=Hello%20' + item.name + ',%20this%20is%20UNBOXED%20PARTY%20whatsapp%20tv%20(KINDLY%20SAVE%20)%20.......%20We%20have%20taken%20you%20on%20the%20wildest%20ride%20of%20your%20time%20in%20the%20past%20weeks%20from%20AWKA%20-%20NSUKKA%20-%20EKITI%20and%20we%20are%20just%20getting%20started.%0aWe%20will%20be%20constantly%20evolving%20and%20will%20add%20a%20new%20dimension%20of%20excitement%20to%20keep%20up%20with%20your%20ever%20changing%20tastes.%0afollow%20us%0aIG:%20https://www.instagram.com/the_unboxedparty/%0aFACEBOOK:%20https://web.facebook.com/Unboxedparty%0aTWITTER:%20https://twitter.com/Theunboxedparty%0aTIKTOK:%20https://www.tiktok.com/@the_unboxedparty'"
                target="_blank">{{ item.whatsapp }}<v-icon>mdi-whatsapp</v-icon></a></td>


            <td>{{ formatDated(item.created_at) }}</td>

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




<script>
import moment from 'moment';
import Backbutton from '~~/components/backbutton.vue';
import { useStore } from '~~/store';
const store = useStore();
export default {
  computed: {
    users() {
      return this.$store.state.users;
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
      showModal: false,
      dialog: false,
      loader: false,
      search: '',
      chosen: {},
      ticket: {},
      headers: [
        { title: 'Name', align: 'start', key: 'name' },
        { title: 'Email', align: 'end', key: 'email' },
        { title: 'Phone', align: 'end', key: 'phone' },
        { title: 'Whatsapp', align: 'end', key: 'whatsapp' },
        { title: 'Created', align: 'end', key: 'created_at' },
      ],
      dialog2: false,
      loading: false,
      loading2: false,
      activeId: null,
      qty: 1,
      ticket_code: '123'
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    getUsersbtn() {
      if ( this.users.length < 1000 ) {
        this.getUsers();
      }
    },
    getUsers( x ) {
      this.loader = true;
      fetch( "https://backend.unboxedparty.com/api/users", {
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
          console.log( res );
          this.loader = false;
          this.$store.dispatch( 'setUsers', res.success.users );
          var datas = {
            tickets: res.success.tickets,
            all_white: res.success.all_white,
          };
          this.$store.dispatch( 'setTicketNo', datas );

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
      console.log( item );
      this.$store.dispatch( 'setUser', item );
      console.log( this.$store.state.user.user );
      this.$router.push( '/admin_slym/user/' + item.id );
    },
    sendTicket( e ) {
      this.activeId = e.id;

      this.loading2 = true;
      fetch( "https://backend.unboxedparty.com/api/sendTicket?amount=1000&email=" + e.email + "&user_id=" + e.id + "&event_id=1&event=Royal Ball/Prom&qty=" + this.qty, {
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
          'Accept': 'application/json','Authorization': `Bearer ${store.state.token}`
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
          console.log( res );
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
}
</script>



<style scoped>
.table-btn :deep(.v-btn) {
  background-color: rgb(228, 230, 232) !important;
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  overflow-y: scroll;
}

.modal-content {
  width: 50vw;
  height: auto;
  background-color: rgba(11, 9, 9, 0.9);
  border-radius: 5px;
  padding: 20px;
  overflow-y: scroll;
  z-index: 999999999999;
}

.modal-close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  /* background-color: red; */
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.modal-close-button i {
  padding: 5px;
}


@media screen and (max-width: 768px) {
  .modal-content {
    width: 100vw;
    height: 90vh;
  }
}
</style>