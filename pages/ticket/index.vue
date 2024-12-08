<template>
    <v-app>
      <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
       
         <div>
       
       <Header />
    
        </div>

      
        <div style="position:absolute; top: 160px;width: 100%;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold">Tickets</h1>
          </div>
        </div>

      <v-container class="p" style="padding-top: 100px;">


        <v-row v-if="!eventsList.length">
            <div style="min-height: 400px; width: 100%; display: flex; justify-content: center; align-items: center;">

               <h1  class="text-grey-darken-3">No Tickets Available</h1>

            </div>
        </v-row>

        <v-row 
          class="d-flex flex-wrap align-center mb-12">
          <v-col
          @click="openEvent(n)" 
         v-for="n in eventsList" :key="n.name" :cols="cols[2]" class="pt-0 mb-9">
       <v-img cover style="border:1px solid #2f2f2f"
         class="rounded-lg"
         width="100%" eager
         height="auto"
         max-height="500px"
         :src="n.image"
       ></v-img>
       <h2 style="font-size: 30px" class="logoText font-weight-bold pt-3 text-capitalize">
                {{n.name}}
              </h2>
              <div class="d-flex justify-space-between my-2 align-center">
                <p
                  style="font-family: monospace !important"
                  class="text-body-1 text-grey-lighten-1 font-weight-light"
                >
                {{formatDate(n.date)}}
              </p>
              <p
              style=""
              class="text-capitalize font-weight-bold"
              rounded
              >
              <v-icon size="15" class="mb-1" icon="mdi mdi-map-marker"></v-icon> 
                           {{n.venue.substring(0, 15)}}{{  n.venue.length > 15 ? '...':''}}  
 
                </p>
              </div>
              <div class="d-flex justify-space-between my-2 align-center">
                <p
                  
                  class="text-body-1 text-capitalize text-grey-lighten-1 font-weight-bold"
                >
                {{n.caption}}
              </p>
              <p
              style=""
              class="text-capitalize font-weight-bold"
              rounded
              >
              <v-icon size="15" class="mb-1" color="yellow" icon="mdi mdi-clock"></v-icon>     
              <vue-countdown class="text-yellow " style="  font-weight: 700 !important;
    font-size:" :time="timediff(n.date)" v-slot="{ days, hours, minutes, seconds }">
     {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
    </vue-countdown>
                </p>
              </div>
     </v-col> 

  
        </v-row>
      </v-container> 
  
  
      
        <!-- <v-container :class="$vuetify.display.smAndDown? 'mt-0': 'mt-12'">
          <div class="centerIt" style="position:relative">
         
            <h1 class="herotitle mb-4 text-center">Unboxed in the Wild</h1>
           <div class=" px-2 justify-center align-center">
            <p class="mb-0 text-grey-lighten-1 text-center font-weight-light">
              Intresting articles about whatever we think is cool 😎
            </p>
        
          </div>  
         
          </div>
          <v-row class="d-flex pt-9">
            <v-col v-for="n in 2" :key="n" class="pt-3 pb-3" :cols="cols[2]">
              <v-card to="/article" variant="dark" class="pa-3">
                <v-img
                  cover
                  height="300px"
                  max-width="650px"
                  class="rounded-xl"
                  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1677835749/ARABIAN_FEST_ux58sh.jpg"
                ></v-img>
                <h2 style="font-size: 40px" class="logoText pt-3">
                  Arabian Fest.
                </h2>
             
                <p class="text-body-2 mt-2  text-grey-lighten-2 font-weight-light">
                  With his new album 'Manusia' sincerely ready for concerts with
                  beautiful songs and full of meaning.
                </p>
              </v-card>
            </v-col>
          </v-row>
          <div class="py-12 d-flex justify-center" >
            <v-btn to="/article" size="x-large" class="mx-auto text-capitalize font-weight-bold " rounded color="white">See more</v-btn></div>
        
        </v-container> -->
    <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
  import VueCountdown from '@chenfengyuan/vue-countdown';
  // import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    components:{
      VueCountdown
    },
    data: () => ({
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      numberRules: [
        (v) => (v != null && v.length >= 11) || "Min 11 characters",
        (v) => !!v || "Phone number is required",
        (v) => v[0] === "0" || 'Phone number must start with "0"',
        (v) => /^[0-9]*$/.test(v) || "Number must be valid",
      ],
      name: "",
      text: null,
      phone: "",
      whatsapp: "",
      email: "",
      eventsList: [],
      loading: false,
      consent: false,
      dialog: false,
      booked: false,
      sign: "",
 
    }),
    computed: {
      displ() {
        return this.$vuetify.display;
      },
 
      events () {
        return this.$store.state.myevents.list
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
    
      setTimeout(() => {
        this.dialog = true;
      }, 10000);

      this.eventsList = this.events.filter(el=>{
        return el.on_sale == 1
      }).reverse()

      try {
      const data = await fetch(`https://backend.unboxedparty.com/api/events_list_qty`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
        }
      }).then(res=>res.json());
  
  
      const payload =  [...data.events]
      payload.reverse(payload)
      this.$store.dispatch("setMyEvents", payload);
      this.$store.dispatch("setMyEventsExpirationDate", addMinutes(30));
  
      } catch (error) {
      console.error(error);
      }
    },
    methods: {
      openEvent(e){
        e.active? this.$router.push('/ticket/'+encodeURIComponent(e.name)): alert('Coming Soon!!!')
      },
        timediff(x){
        var startDate = new Date();
  // Do your operations
  var endDate   = new Date(x)
  var seconds = (endDate.getTime() - startDate.getTime()) ;
  return seconds
      },
      async submit() {
        this.booked = true;
  
        var bol = await this.$refs.form.validate();
        if (bol.valid) {
          this.loading = true;
          var dat = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            whatsapp: this.whatsapp,
            // sign: this.sign,
          };
          // console.log(dat);
          fetch("https://backend.unboxedparty.com/api/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Accept: "application/json",
            },
            body: JSON.stringify(dat),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Something went wrong");
            })
            .then((res) => {
              //   this.name = ''
              //  this.email = ''
              //  this.phone = ''
              //  this.whatsapp = ''
              //  this.sign = ''
              this.booked = true;
              this.loading = false;
              this.dialog = true;
            })
            .catch(() => {
              this.dialog = true;
              this.loading = false;
            });
        }
      },
    },
  };
  </script>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,200&display=swap");
  
  .godown{
    position:relative;top: 40px;
  }
  .goup{
    position:relative;bottom: 40px;
  }
  .scehimg{
    position:absolute;
    right:0;
    top:-50px;
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
    background: linear-gradient(
      45deg,
      #e8612e,
      #3098e5,
      #79d21c,
      #f5c231,
      #ff0000,
      #e8612e,
      #3098e5,
      #79d21c,
      #f5c231,
      #ff0000
    );
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
  
    background: radial-gradient(
          102.82% 2444.7% at 95.38% 100.02%,
          #a84efa 0%,
          rgba(255, 255, 255, 0) 32.73%,
          rgba(135, 135, 135, 0.506798) 81.48%,
          #131313 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
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
    .scehimg{
    position:relative;
    /* right:0; */
    top:0px;
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
    .cnter{
      justify-content:center
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
  