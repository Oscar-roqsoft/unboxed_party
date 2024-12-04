<template>
  <v-app>
    <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
      <div style="position:relative" class="overflow-hidden">
        <div v-if="$vuetify.display.mdAndUp" style="
              position: absolute;
              z-index: -1;
              opacity: 0.2;
              height: 100%;
              display: flex;
              width: 100%;
              justify-content: center;">
          <div style="height: 60vh;
      position: absolute;
      width: 100%;
      bottom: 0;
      background: linear-gradient(360deg, black, transparent);
      z-index: 2;"></div>
          <video id="heroVideo" :style="$vuetify.display.smAndDown ? ' width: 1365px ' : ' width: 100%'" style="
                position: absolute;
                top: 0;
                scale: 1.2;
                height: 100vh;
                z-index: -1;
              " autoplay muted loop>
            <source src="https://res.cloudinary.com/dvexjmvti/video/upload/v1732736195/lt4dxgkgcjv7gto48fqk.mov" />
          </video>
          <!-- <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"></v-img></v-avatar> -->
        </div>
        <Header />
        <div class="">
          <h1 style="  font-weight: 700; max-width:700px;
 font-size: 54px;
 line-height: 66px;" class="bigtext mx-auto px-4 text-capitalize text-grey-lighten-2 mt-6 centerIt text-center">
            {{ event?.caption }} <br>
            <vue-countdown class="text-yellow-darken-2" :time="timediff" v-slot="{ days, hours, minutes, seconds }">
              {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
            </vue-countdown>
          </h1>
          <div v-if="$route.params.name.includes('Halloween')">

            <p style="font-size: 24px;max-width:400px;" class="px-4 my-2 mx-auto font-weight-black  text-center">Select
              Ticket</p>
            <v-select append-inner-icon="mdi mdi-chevron-down" variant="solo" style="width: 260px;border-radius: 50%;"
              hide-details class="mx-auto ticketSelect" :items="items" v-model="routen"></v-select>
          </div>
        </div>
        <v-container v-if="true" class="pa-0" style="position: relative; max-width: 990px">
          <div style="width: 100%; min-height: 90vh" class="pa-6 d-flex justify-center align-center">
            <v-row style="position: relative" class="d-flex   justify-space-around">
              <v-col style="position: relative" class="d-flex justify-center" cols="12" md="5">
                <v-card max-width="" color="transparent" width="100%" style="position:relative" height="auto"
                  class="d-flex mb-5  align-center pa-0">
                  <div style="
    width: 100%;
" class="">
                    <div class="">
                    </div>
                    <div class="poster">
                      <v-img :src="event?.image" :alt="event?.name + ' image'">
                        <div style="position:absolute" class="w-100 h-100 d-flex justify-center align-center">
                          <div v-if="event?.id < 5" style="
    filter: blur(4px);
">

                            <vue-qrcode :width="150" :height="150" :color="{ dark: '#000000ff', light: '#ffffffff' }"
                              :value="'1234'" type="image/png" />
                            <h1 class="text-center text-white"> 1234</h1>
                          </div>
                        </div>
                      </v-img>
                    </div>
                    <div class="info mb-2">

                      <v-table color="yellow" style="width:100%;">
                        <thead>

                          <tr>
                            <th class="text-center font-weight-black text-capitalize" style="letter-spacing:2px">PRICE
                            </th>
                            <!-- <th class="text-center font-weight-black text-capitalize" style="letter-spacing:2px">DATE
                            </th> -->
                            <th class="text-center font-weight-black text-capitalize" style="letter-spacing:2px">TIME
                            </th>
                            <!-- <th class="text-center font-weight-black text-capitalize" style="letter-spacing:2px">Early Bird Remaining</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in mytickets" :key="item?.name">
                            <td style="font-size:14px" class="text-grey-darken-1 font-weight-bold text-center">
                              {{ (item?.name) }} (#{{ numberWithCommas(item?.value) }})</td>
                            <!-- <td style="font-size:14px" class="text-grey-darken-1 font-weight-bold text-center">
                              {{ formatDate(event?.date) }}</td> -->
                            <td style="font-size:14px" class="text-grey-darken-1 font-weight-bold text-center">
                              {{ event?.time }}</td>
                            <!-- <td style="font-size:14px" class="text-grey-darken-1 font-weight-bold text-center">{{1000 - sold}}</td> -->
                          </tr>
                        </tbody>
                      </v-table>
                    </div>

                  </div>
                </v-card>
              </v-col>

              <v-col cols="12" md="5">
                <v-card max-width="" height="auto" color="#000" style="    background: #22222261;
                backdrop-filter: blur(8px);" width="100%" class=" rounded-lg align-center pa-4">

                  <div v-if="reveal == false">

                    <h1 style="font-size: 30px;" class="mb-5 text-white font-weight-bold  text-center">
                      Enter your email to reserve ticket.
                    </h1>

                    <v-form @submit.prevent="checkemail()" ref="email" class="w-100 h-auto px-5">
                      <v-text-field :read-only="loading" :rules="[rules.required, rules.email]" class="mb-2 rounded-xl"
                        type="email" v-model="email" label="Email" hint="eg hello@unboxedparty.com" persistent-hint
                        density="compact" variant="solo"></v-text-field>
                    </v-form>

                    <div class="text-center py-3">
                      <v-btn @click="checkemail()" :loading="loading" size="x-large" rounded color="" theme=""
                        class="font-weight-bold text-capitalize mx-auto">submit</v-btn>
                    </div>

                  </div>
                  <div v-if="reveal == 4">
                    <h1 style="font-size: 30px;" class="mb-5 text-white font-weight-bold   text-center">
                      Thank you, check your email for your ticket.
                    </h1>

                  </div>

                  <v-expand-transition>

                    <v-card flat v-if="reveal == 1" class="v-card--reveal" color="transparent" style="height: 100%;"
                      width="100%">

                      <v-form @submit.prevent="submit()" ref="form" class="w-100 h-auto px-5">
                        <h1 style="font-size: 30px;" class="mb-5 text-white font-weight-bold text-center">
                          Welcome 😍, kindly fill the form to continue🚀.
                        </h1>

                        <v-text-field :loading="loading" :rules="[rules.required]" class="mb-2 rounded-xl"
                          v-model="name" label="Full name" hint="eg Ada Obi" persistent-hint density="compact"
                          variant="solo"></v-text-field>

                        <v-text-field :loading="loading" :rules="numberRules" class="mb-2 rounded-xl" type="tel"
                          v-model="phone" label="Phone Number" hint="eg. 08023456789" persistent-hint density="compact"
                          variant="solo"></v-text-field>
                        <v-text-field :loading="loading" :rules="numberRules" class="mb-2 rounded-xl" type="tel"
                          v-model="whatsapp" label="Whatsapp Number"
                          hint="eg. 08023456789, your ticket will be sent here. " persistent-hint density="compact"
                          variant="solo"></v-text-field>
                        <v-text-field :loading="loading" :rules="[rules.required, rules.email]" class="mb-2 rounded-xl"
                          type="email" v-model="email" label="Email" hint="eg hello@unboxedparty.com" persistent-hint
                          density="compact" variant="solo"></v-text-field>
                        <!-- your ticket will be sent here -->
                        <!-- <v-select
                    :loading="loading"
                    :rules="[rules.required]"
                    :items="signs"
                    item-text="title"
                    item-value="value"
                    variant="solo"
                    density="compact"
                    v-model="sign"
                    label="Zodiac Sign"
                  >
                  </v-select> -->
                        <v-checkbox :rules="[rules.required]" v-model="consent" color="red"
                          label="I consent to receiving emails from Unboxed Party "></v-checkbox>
                        <div class="text-center py-3">
                          <v-btn :loading="loading" @click="submit()" size="x-large" rounded color="" theme=""
                            class="font-weight-bold text-capitalize mx-auto">submit</v-btn>
                        </div>
                        <div class="d-flex justify-center">
                          <a style="text-decoration: none" href="https://www.instagram.com/the_unboxedparty/"
                            target="_blank">
                            <div style="" class="mt-5 text-grey-darken-2 text-center w-100 justify-center d-flex">
                              <v-icon color="" class="mr-2">mdi-instagram</v-icon>
                            </div>
                          </a>
                          <a style="text-decoration: none" href="https://twitter.com/theunboxedparty" target="_blank">
                            <div style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 text-grey-darken-2 text-center w-100 justify-center d-flex">
                              <v-icon color="" class="mr-0">mdi-twitter</v-icon>
                            </div>
                          </a>
                        </div>

                      </v-form>
                    </v-card>
                  </v-expand-transition>

                  <v-expand-transition>

                    <v-card flat v-if="reveal == 2" class="v-card--reveal " color="transparent" style="height: 100%;">
                      <h1 style="font-size: 30px;"
                        class="mb-5 text-white text-capitalize font-weight-bold  text-center">
                        Select ticket Type
                      </h1>
                      <div class="d-flex mb-3 px-3 align-center justify-space-between">

                        <div class="w-100 mb-0 d-flex align-center justify-space-around text-capitalize">

                          <v-select v-model="selectedticket" label="Select" :items="mytickets" item-title="name"
                            item-value="value" variant="solo" background="transparent" elevation="0"
                            class="text-capitalize pt-[30px]"></v-select>

                        </div>
                      </div>
                      <!-- <h4 class="my-3  mt-8 text-center ">Online Payment</h4> -->
                      <div class="text-center pt-6 ">
                        <v-btn :loading="loading" size="x-large" color="blue-darken-4" @click="uploadTicket()" block
                          rounded class=" mb-0 font-weight-bold text-capitalize mx-auto">
                          Proceed
                        </v-btn>

                        <!-- <p v-if="event.amount > 0" 
                              style="
                background: rgb(21 21 21);
                padding: 10px 15px;
                border-radius: 8px;line-height:19px;
                margin-top: 20px; font-size:15px
                " class="text-orange-darken-1 text-left"><span style="
                font-size:18px" class="text-grey font-weight-bold">Note</span> 
                 <br> <br> 1.  Kindly wait for your payment to be confirmed by flutterwave before closing the payment screen <br><br> 
                  2. Final amount will include payment gateway charges <br><br>  3. Contact Support for any payment issues</p> -->

                      </div>

                    </v-card>

                  </v-expand-transition>

                  <v-expand-transition>

                    <v-card flat v-if="reveal == 3" class="v-card--reveal " color="transparent" style="height: 100%;">
                      <h1 style="font-size: 30px;"
                        class="mb-5 text-white text-capitalize font-weight-bold  text-center">
                        Proceed to Pay
                      </h1>
                      <div class="d-flex mb-3 px-3 align-center justify-space-between">
                        <p class="text-h6 text-left font-weight-bold">Quantity :</p>

                        <div style="width:150px" class=" mb-0 d-flex align-center justify-space-around ">

                          <v-btn @click="decrementTicket" color="white" size="x-small"
                            class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-minus"
                              size="19px"></v-icon></v-btn>
                          <p class="text-h5 font-weight-black mb-0">{{ qty }}</p>
                          <v-btn @click="incrementTicket" color="white" size="x-small"
                            class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-plus" size="19px">
                            </v-icon></v-btn>
                        </div>
                      </div>
                      <!-- <h4 class="my-3  mt-8 text-center ">Online Payment</h4> -->
                      <div class="text-center pt-6 ">
                        <v-btn :loading="loading" size="x-large" color="blue-darken-4" @click="paynow()" block rounded
                          class=" mb-0 font-weight-bold text-capitalize mx-auto">
                          Proceed
                        </v-btn>
                        <!-- <v-btn
                                v-if="loading"
                                size="x-large"
                              rounded block :loading="loading"
                                color="blue-darken-4"
                                theme=""
                                class="mb-3 font-weight-bold text-capitalize mx-auto"
                                ></v-btn
                              > 
                              <v-divider class="mx-auto my-5" inset></v-divider>
                              <h4 class="my-3">Offline Via Mobile/USSD Transfer</h4>
                              <div  >
                    
                    <div class="d-flex px-2 py-2  justify-space-between  align-center">
                        <p
                        variant="outlined"
                        style=""
                        class="text-capitalize text-left  font-weight-bold"
                        rounded
                        >
                        Bank Name
                    </p>
                    <p
                      style="font-family: monospace !important"
                      class="text-body-2 text-right text-grey-lighten-1 font-weight-light"
                      >
                      Zenith Bank
                    </p>
                </div>
                    <div class="d-flex px-2 py-2  justify-space-between  align-center">
                        <p
                        variant="outlined"
                        style=""
                        class="text-capitalize text-left font-weight-bold"
                        rounded
                        >
                        Account Number
                    </p>
                    <p
                      style="font-family: monospace !important"
                      class="text-body-2 d-flex align-center text-right text-grey-lighten-1 font-weight-light"
                      >
                      <span>
          <v-btn class="mr-1" @click="copyaccount()" icon size="x-small"><v-icon icon="mdi mdi-content-copy"></v-icon></v-btn>
                      </span>
                      <span id="acnum">
                      2253489551
                    </span>
                    </p>
                </div>  <div class="d-flex px-2 py-2  justify-space-between  align-center">
                        <p
                        variant="outlined"
                        style=""
                        class="text-capitalize text-left font-weight-bold"
                        rounded
                        >
                        Account Name
                    </p>
                    <p
                      style="font-family: monospace !important"
                      class="text-body-2 pl-3  text-right text-grey-lighten-1 font-weight-light"
                      >
                    
                      Chukwuneta Augustine C.
                    </p>
                </div>
                <div class="d-flex px-2 py-2 mb-3  justify-space-between  align-center">
                        <p
                        variant="outlined"
                        style=""
                        class="text-capitalize text-left  font-weight-bold"
                        rounded
                        >
                        Amount
                    </p>
                    <p
                      style="font-family: monospace !important"
                      class="text-body-2 text-right text-grey-lighten-1 font-weight-light"
                      >
                      N{{ amount*qty }}           </p>
                </div>
                  </div>
                              <v-btn
                                :loading="loading"
                                @click="checkemail()"
                                size="x-large"
                              rounded
                              target="_blank" :href="'https://wa.me/+2349012770000?text= Hi%20i%20just%20transferred%20N'+(amount*qty)+',%20for '+ qty+'%20tickets%20(Email:'+ email +'),%20kindly%20verify.'"

                                color=""
                                theme=""
                                class="my-3  font-weight-bold text-capitalize mx-auto"
                                >Transfer Done <v-icon class="ml-2" icon="mdi mdi-whatsapp"></v-icon></v-btn
                              > -->
                        <p v-if="event?.amount > 0" style="
              background: rgb(21 21 21);
              padding: 10px 15px;
              border-radius: 8px;line-height:19px;
              margin-top: 20px; font-size:15px
          " class="text-orange-darken-1 text-left"><span style="
              font-size:18px" class="text-grey font-weight-bold">Note</span> <br> <br> 1. Kindly wait for your payment
                          to be confirmed by flutterwave before closing the payment screen <br><br> 2. Final amount will
                          include payment gateway charges <br><br> 3. Contact Support for any payment issues</p>
                      </div>

                    </v-card>

                  </v-expand-transition>

                </v-card>
              </v-col>

            </v-row>
          </div>
        </v-container>

      </div>
      <Footer />
      <!-- <v-dialog width="100%" max-width="400" v-model="dialog">
        <a
          style="text-decoration: none"
          href="https://www.instagram.com/the_unboxedparty/"
          target="_blank"
        >
          <v-card to="" color="#220744">
            <v-card-text class="text-center">
              <div
                v-if="booked"
                style="
                  /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  font-family: 'Permanent Marker', cursive !important;
                "
                class="px-3 text-body-1 text-white font-weight-medium text-h4"
              >
                Your resrvation has been booked successfully
              </div>
              <div 
                style="font-family: 'Permanent Marker', cursive !important"
                class="px-3 text-white text-h3  text-center"
              >
                <p
                  class="font-weight-bold"
                  style="
                    text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0;
                    font-family: 'Permanent Marker', cursive !important;
                  "
                >
                  Follow us on instagram
                </p>
                <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                    font-family: 'Permanent Marker', cursive !important;
                  " class="mt-5 text-h5 text-center w-100 justify-center d-flex">
                  <v-icon color="red darken-2" class="mr-2"
                    >mdi-instagram</v-icon
                  >
                  @the_unboxedparty
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click.prevent="dialog = false"
                >Close
              </v-btn>
            </v-card-actions>
          </v-card></a
        >
    </v-dialog> -->
    </v-card>
  </v-app>
</template>

<script>
import VueQrcode from 'vue-qrcode';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useFlutterwave } from "flutterwave-vue3";
export default {
  components: {
    VueQrcode, VueCountdown
  },
  data: () => ( {
    rules: {
      required: ( value ) => !!value || "Required.",
      email: ( value ) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test( value ) || "Invalid e-mail.";
      },
    },
    numberRules: [
      ( v ) => ( v != null && v.length >= 11 ) || "Min 11 characters",
      ( v ) => !!v || "Phone number is required",
      ( v ) => v[0] === "0" || 'Phone number must start with "0"',
      ( v ) => /^[0-9]*$/.test( v ) || "Number must be valid",
    ],
    name: "",
    paystackkey: "pk_live_b62cec621b24ca39f13e062853bb6937bef59612", //paystack public key
    email: "", // Customer email
    text: '',
    id: '',
    phone: "",
    whatsapp: "",
    qty: 1,
    loading: false,
    reveal: false,
    consent: true,
    dialog: false,
    booked: false,
    total: 0,
    sold: 1000,
    mytickets: [],
    selectedticket: '',
    selectedticketAmout: null,
    reference: '',

    sign: "",
    items: [
      {
        value: "Halloween - 2k Regular",
        title: "2k Regular",
      },
      {
        value: "Halloween - 100k Table",
        title: "100k Table",
      },
      {
        value: "Halloween - 200k Table",
        title: "200k Table",
      },
    ],
    signs: [
      {
        value: "Aries",
        title: "Aries (March 21 - April 19)",
      },
      {
        value: "Taurus",
        title: "Taurus (April 20 - May 20)",
      },
      {
        value: "Gemini",
        title: "Gemini (May 21 - June 20)",
      },
      {
        value: "Cancer",
        title: "Cancer (June 21 - July 22)",
      },
      {
        value: "Leo",
        title: "Leo (July 23 - August 22)",
      },
      {
        value: "Virgo",
        title: "Virgo (August 23 - September 22)",
      },
      {
        value: "Libra",
        title: "Libra (September 23 - October 22)",
      },
      {
        value: "Scorpio",
        title: "Scorpio (October 23 - November 21)",
      },
      {
        value: "Sagittarius",
        title: "Sagittarius (November 22 - December 21)",
      },
      {
        value: "Capricorn",
        title: "Capricorn (December 22 - January 19)",
      },
      {
        value: "Aquarius",
        title: "Aquarius (January 20 - February 18)",
      },
      {
        value: "Pisces",
        title: "Pisces (February 19 - March 20)",
      },
    ],
  } ),

  computed: {
    routen: {
      get() {

        return this.$route.params.name;
      },
      set( val ) {
        this.$router.push( '/ticket/' + val );

      }
    },
    displ() {
      return this.$vuetify.display;
    },

    timediff() {
      if ( !this.event?.name ) return null;
      var startDate = new Date();
      // Do your operations
      var endDate = new Date( this.event?.date );
      var seconds = ( endDate.getTime() - startDate.getTime() );
      return seconds;
    },
    mainAmt() {
      return this.selectedticketAmout.value * this.qty;
    },
    events() {
      return this.$store.state.myevents?.list;
    },
    event() {
      var ev = this.$store.state?.event;
      // if(ev.id >= 7){
      //   ev.image = 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1699725435/Unboxed_Party_Neon_Fest_u6khvp.jpg'
      // }
      // if(ev.id >= 7){
      //   ev.image = 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1699725435/Unboxed_Party_Neon_Fest_u6khvp.jpg'
      // }
      return ev;
    },
    // event() {
    //   return this.$store.state.event
    // },
    amount() {
      return this.event?.amount;
    },

    cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [4, 12, 6, 4, 8, 4, 3]
        : md
          ? [4, 12, 12, 6, 8, 4, 3]
          : sm
            ? [6, 12, 12, 12, 12, 12, 12]
            : [6, 12, 12, 12, 12, 12, 12];
    },
  },

  async mounted() {
    console.log( this.events );


    if ( this.$store.state.myevents.list.length ) {
      this.$store.state.myevents.list;
    } else {

      try {
        const data = await fetch( `https://backend.unboxedparty.com/api/event`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        } ).then( res => res.json() );

        this.isLoading = false;

        const payload = [...data.events];
        console.log( payload );
        payload.reverse( payload );
        this.$store.dispatch( "setMyEvents", payload );
        this.$store.dispatch( "setMyEventsExpirationDate", addMinutes( 30 ) );

      } catch ( error ) {
        console.error( error );
      }
    }


    try {

      this.get_number();
      setTimeout( () => {
        this.dialog = true;
      }, 30000 );
      var name = decodeURIComponent( this.$route.params.name );
      var eventb = this.events.find( el => {
        return el.name.toLowerCase() == name.toLowerCase();
      } );
      this.$store.dispatch( 'setEvent', eventb );

      this.mytickets = JSON.parse( eventb?.tickets );
    } catch ( e ) {
      console.log( e );
    }




  },
  methods: {
    uploadTicket() {
      this.selectedticketAmout = this.mytickets.find( i => i?.value === this.selectedticket );
      console.log( this.selectedticket, 'selectedticket' );
      console.log( this.selectedticketAmout, 'selectedticketAmout' );

      var datas = { email: this.email, id: this.user?.id, name: this.name, phone_number: this.phone };
      //this will launch Fluterwave payment modal
      // console.log(datas)


      if ( !parseFloat( this.selectedticketAmout.value ) ) {
        datas.amount = 0;
        this.reserveTicket( datas );
      } else {
        this.reveal++;
      }
      return;

    },
    itemProps( item ) {
      return {
        title: item.name,
      };
    },
    addCommas( num ) {
      // Convert the number to a string
      let str = num.toString();
      // Split the string into an array of characters
      let arr = str.split( '' );
      // Reverse the array so we can add commas from right to left
      arr.reverse();
      // Loop through the array and add commas every three digits
      for ( let i = 3; i < arr.length; i += 4 ) {
        arr.splice( i, 0, ',' );
      }
      // Reverse the array again and join it back into a string
      str = arr.reverse().join( '' );
      // Return the formatted string
      return str;
    },
    paynow() {
      this.loading = true;
      var random = Math.random().toString( 36 ).slice( 2, 8 );
      var datas = { email: this.email, id: this.user?.id, name: this.name, phone_number: this.phone };
      //this will launch Fluterwave payment modal

      const modal = useFlutterwave( {
        amount: this.mainAmt,//amount
        callback: ( e ) => {
          this.verify_trans( e );
          modal.close();
        },

        country: "NG",
        currency: "NGN",
        customer: datas,
        customizations: { logo: "https://res.cloudinary.com/dnqw7x4bp/image/upload/c_fit,w_200/v1582290476/e_dey_e_only_2.png", title: "E Dey App" },
        onclose: () => {
          this.loading = false;
          // alert('Are you having issues with your payment? kindly contact us on 09012770000')
        },
        payment_options: "card, banktransfer, ussd",
        bank_transfer_options: {
          expires: 3600
        },
        meta: {
          qty: this.qty,
          amount: this.mainAmt
        },
        public_key: "FLWPUBK-7efa3db90b59bb99bd153e108da68608-X",
        // redirect_url: undefined,
        tx_ref: this.phone + '-' + random + '-' + this.email
      } );

    },

    close: () => {
      this.loading = false;
      alert( 'transaction has been canceled' );
      this.booked = false;
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

    async checkemail() {
      this.booked = false;
      var bol = await this.$refs.email.validate();
      if ( bol.valid ) {
        this.loading = true;
        var dat = {
          email: this.email
        };
        fetch( "https://backend.unboxedparty.com/api/checkmail?email=" + this.email, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
          },
        } )
          .then( ( response ) => {
            if ( response.ok ) {
              return response.json();
            }
            throw new Error( "Something went wrong" );
          } )
          .then( ( res ) => {
            if ( res.success.msg === null ) {
              this.reveal = 1;
            } else {
              this.user = res.success?.msg;
              this.email = this.user?.email;
              this.phone = this.user?.phone;
              this.name = this.user?.name;
              this.reveal = 2;

            }
            this.loading = false;

          } )
          .catch( ( err ) => {
            console.log( err );
            this.dialog = true;
            this.loading = false;
          } );
      }
    },

    get_number() {
      fetch( "https://backend.unboxedparty.com/api/get_number?id=" + this.event.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json"
        },
      } )
        .then( ( response ) => {
          if ( response.ok ) {
            return response.json();
          }
          throw new Error( "Something went wrong" );
        } )
        .then( ( res ) => {
          this.sold = res.success.msg;
        } )
        .catch( ( err ) => {
          console.log( err );
          this.dialog = true;
          this.loading = false;
        } );

    },

    async copyaccount() {
      let text = document.getElementById( 'acnum' ).innerHTML;
      try {
        await navigator.clipboard.writeText( text );
        console.log( 'Content copied to clipboard' );
        alert( 'Account No has been copied!' );
      } catch ( err ) {
        console.error( 'Failed to copy: ', err );
      }

    },


    async submit() {
      var bol = await this.$refs.form.validate();
      if ( bol.valid ) {
        this.loading = true;
        var dat = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          whatsapp: this.whatsapp,
          // sign: this.sign,
        };
        console.log( dat );

        fetch( "https://backend.unboxedparty.com/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
          },
          body: JSON.stringify( dat ),
        } )
          .then( ( response ) => {
            if ( response.ok ) {
              return response.json();

            }
            throw new Error( "Something went wrong" );
          } )
          .then( ( res ) => {
            //   this.name = ''
            //  this.email = ''
            //  this.phone = ''
            //  this.whatsapp = ''
            //  this.sign = ''

            this.user = res.success.msg;

            this.email = this.user?.email;
            this.phone = this.user?.phone;
            this.name = this.user?.name;

            this.reveal = 2;

            this.loading = false;


            // this.email =  this.email
            // this.phone =  this.phone
            // this.name =  this.name

          } )
          .catch( () => {

            this.dialog = true;
            this.loading = false;
          } );
      }
    },


    reserveTicket( e ) {
      this.activeId = e.id;
      this.booked = true;

      this.loading = true;
      fetch( "https://backend.unboxedparty.com/api/sendTicket?amount=" + ( ( this.event?.amount || 0 ) * this.qty ) + "&email=" + e.email + "&user_id=" + e.id + "&event_id=" + this.event?.id + "&event=" + this.event.name + "&qty=" + this.qty, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
        }
      } )
        .then( ( response ) => {
          if ( response.ok ) {
            return response.json();
          }
          throw new Error( "Something went wrong" );
        } )
        .then( ( res ) => {
          this.reveal = 4;
          this.loading = false;
          this.dialog = true;
        } )
        .catch( () => {
          alert( 'An error occured' );
          this.reveal = false;
          this.loading = false;
        } );
    },


    verify_trans( e ) {
      this.loading = true;
      fetch( "https://backend.unboxedparty.com/api/verify_trans?amount=" + this.mainAmt + "&reference=" + e.transaction_id + "&pay_ref=" + e.tx_ref + "&email=" + this.email + "&user_id=" + this.user?.id + "&event_id=" + this.event?.id + "&event=" + this.event.name + "&qty=" + this.qty, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
        },
      } )
        .then( ( response ) => {
          this.loading = false;
          this.reveal = 4;
          this.dialog = true;
          this.get_number();
        } )
        .catch( () => {
          this.dialog = true;
          this.loading = false;
        } );
    }
  },


};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,200&display=swap");

.v-input__control {
  display: flex;
  grid-area: control;
  box-shadow: none !important;
}

.ticketSelect.v-select .v-field.v-field {
  background: #ffffff;
  color: rgb(0, 0, 0);
  border-radius: 30px;
  font-size: 24px;
  font-weight: 900;
}

.v-selection-control__input input {
  scale: 0.5 !important;
  opacity: 1 !important;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: relative;
  width: 100%;
}

.godown {
  position: relative;
  top: 40px;
}

.goup {
  position: relative;
  bottom: 40px;
}

.scehimg {
  position: absolute;
  right: 0;
  top: -50px;
  transform: rotate3d(-2, 39, 0, 180deg);

}

.shadow:before,
.shadow:after {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  border-radius: 2px;
  content: "";
  position: absolute;

  width: calc(100%);
  height: calc(100%);
  background: linear-gradient(45deg,
      #e8612e,
      #3098e5,
      #79d21c,
      #f5c231,
      #ff0000,
      #e8612e,
      #3098e5,
      #79d21c,
      #f5c231,
      #ff0000);
  background-size: 400%;
  z-index: -1;
  animation: animate 20s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 300% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.shadow:after {
  filter: blur(20px);
}

.herotitle2 {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  display: flex;
  align-items: center;
}

.herotitle {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;

  align-items: center;

  background: radial-gradient(102.82% 2444.7% at 95.38% 100.02%,
      #a84efa 0%,
      rgba(255, 255, 255, 0) 32.73%,
      rgba(135, 135, 135, 0.506798) 81.48%,
      #131313 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ,
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}

.numberstyle {
  font-weight: 700;
  font-size: 38px;
  line-height: 60px;
  align-items: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.numberstyle2 {
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.text2 {
  font-size: 16px;
}

* {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

.cardStyle {
  border-radius: 80px !important;
  background: #ffffff21;
  backdrop-filter: blur(6px);
}

@media only screen and (max-width: 768px) {
  .bigtext {
    font-size: 40px !important;
    line-height: 50px !important;
    text-align: center;
  }

  .scehimg {
    position: relative;
    /* right:0; */
    top: 0px;
    transform: rotate3d(-2, 39, 0, 180deg);

  }

  .herotitle {
    font-size: 40px !important;
    line-height: 55px !important;
    text-align: center;
  }

  .text2 {
    font-size: 13px;
    line-height: 16px !important;
    text-align: center;
  }

  .logoText {
    font-size: 23px !important;
    line-height: 30px !important;
  }

  .herotitle2 {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }

  .centerIt {
    text-align: center !important;
  }

  .numberstyle {
    font-weight: 700;
    line-height: 46px;
    font-size: 28px;
  }

 
}
</style>