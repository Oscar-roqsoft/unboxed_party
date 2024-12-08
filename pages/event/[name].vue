<template>
    <v-app>
      <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
        <div style="position:relative" class="overflow-hidden">
     
      
            <Header />
        </div>
  

  
  
        <v-container :class="$vuetify.display.smAndDown? 'mt-0': 'mt-6 '" >
          <div class="centerIt" style="position:relative">
            <!-- <v-avatar class="scehimg"  size="200" tile>
  
              <v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_Black_Posture_1_Happy_ephuz0.png"></v-img>
            </v-avatar> -->
            <!-- <h2 class="herotitle mb-4">Arabian Fest</h2> -->
        
         
          </div>
          
          <v-row class="d-flex py-0">
              <v-col l  :cols="cols[7]">
                <div class="d-flex justify-center">
 
          <v-card variant="dark"  width="100%" v-if="event.name" class="pa-0">
           
           <div  style="min-height:400px" 
           class="grey w-100 rounded- d-flex align-center justify-center">
            <iframe v-if="hasHttp" allowfullscreen style="border-radius: 24px;border-width: 0px;box-shadow:none!important" width="100%" height="400px"
            :src="event.video">
            </iframe>

          <h1 v-else class="text-grey-darken-3">No Video Yet</h1>

          </div>          
              <h2 style="font-size: 40px" class="text-capitalize  py-3">
                {{event.name}}
              </h2>
            
              <p class="text-body-1 mt-0 text-grey-lighten-2 font-weight-light">
                {{ read_more?  event.description.charAt(0).toUpperCase() + this.event.description.slice(1) : event.description.charAt(0).toUpperCase() + this.event.description.slice(1).substring(0, 200)+'...' }} <br>
              </p>
              <p class="pt-3 text-capitalize" @click="read_more = !read_more">read {{ !read_more? ' more':' less' }}.</p>
              <div  style="border:1px solid grey " class="rounded-lg my-7">
                <div class="d-flex px-5 py-4  justify-space-between  align-center">
                    <p
                    variant="outlined"
                    style=""
                    class="text-capitalize text-grey font-weight-bold"
                    rounded
                    >
                    Date
                </p>
                <p
                  style="font-family: monospace !important"
                  class="text-body-1 text-grey-lighten-1 font-weight-light"
                  >
                  {{formatDate(event.date)}}
                </p>
            </div>
                <div class="d-flex px-4 py-4  justify-space-between  align-center tw-gap-10">
                    <p
                    variant="outlined"
                    style=""
                    class="text-capitalize text-grey font-weight-bold"
                    rounded
                    >
                    Venue
                </p>
                <p
                  style="font-family: monospace !important"
                  class="text-body-1 text-grey-lighten-1 font-weight-light text-capitalize tw-text-end"
                  >
                  {{event.venue}}
                </p>
            </div>
              </div>
            </v-card>  </div>
            <v-col class="px-0 pt-0" :cols="cols[1]">
           <v-card color="black" class=" pa-0">
             <h2 style="font-size: 30px" class="font-weight-medium text-grey-lighten-2  pb-7 py-0 px-0">
                          Photos 
                         </h2>
                         <v-row class="d-flex justify-space-between py-3">

                         <v-col v-for="(n, i) in event.photos" :key="i" class="pa-1 pb-5" :cols="cols[2]">
              <v-card variant="dark"  class="pa-2">
                <v-img
                  cover
                  height="210px"
                  max-width="500px"
                  class="rounded-lg"
                  :src="n.image"
                ></v-img>
           
              
              </v-card>
            </v-col>
            </v-row>
           </v-card>
         </v-col>
            </v-col>
            <v-col   :cols="cols[8]">
              <h2 style="font-size: 30px" class="font-weight-medium text-grey-lighten-2   pb-0 py-0 px-1">
                           Past Events 
                           </h2>
          <v-row class="d-flex py-3">
            <v-col v-show="!parseFloat(n.on_sale)" v-for="(n, i) in events.slice(0,9)" :key="i" class="pt-3" :cols="cols[2]">
              <v-card variant="dark" :to="'/event/'+encodeURIComponent(n.name)"  class="pa-2">
                <v-img
                  cover
                  height="210px"
                  max-width="500px"
                  class="rounded-xl"
                  :src="n.image"
                ></v-img>
                <div class=" pt-3" style=" width:100%;   background: linear-gradient(360deg, black, transparent);
    line-height: 1.2;bottom:0">
                <h3 class="font-weight-medium text-grey-lighten-1">{{n.name}}</h3>
              </div>
              
              </v-card>
            </v-col>
            <v-col class="pt-5 order-3 text-center" cols="12" >
                <v-btn
                size="x-large"
              
                theme="dark"
                class="text-capitalize rounded-lg font-weight-bold"
                
                >Follow us on Instagram <v-icon icon="mdi-instagram"></v-icon></v-btn
              >
            </v-col>
          </v-row>           
         </v-col>
       
          </v-row>
        </v-container>
        <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
  import {formatDate} from '@/composables/mixins'
  export default {
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
      event: {},
      loading: false,
      consent: false,
      dialog: false,
      read_more: false,
      booked: false,
      sign: "",
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
    }),
    computed: {
      computed: {
    // Capitalize the first word of the sentence
    capitalizedSentence() {
      return this.event.description.charAt(0).toUpperCase() + this.event.description.slice(1);
    }
  },
      hasHttp() {
      return this.event.video.startsWith('http');
    },
      displ() {
        return this.$vuetify.display;
      },
      cols() {
        const { lg, sm, md } = this.$vuetify.display;
        return lg
          ? [4, 12, 6, 4, 8, 4, 3, 7,5]
          : md
          ? [4, 12, 12, 6, 8, 4, 3, 12, 12, 12]
          : sm
          ? [6, 12, 12, 12, 12, 12, 12, 12, 12]
          : [6, 12, 12, 12, 12, 12, 12, 12, 12];
      },
      events () {
        return this.$store.state.myevents.list
      },
    },
    mounted() {
      var name = decodeURIComponent(this.$route.params.name)
        
        this.event = this.events.find(el=> el.name.toLowerCase() == name.toLowerCase())


      // setTimeout(() => {
      //   this.getEvent();
      // }, 1000);
      

     setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },
    
    methods: {
      getEvent(){
        var name = decodeURIComponent(this.$route.params.name)
        
        this.event = this.events.find(el=> el.name.toLowerCase() == name.toLowerCase())
        // console.log(this.event,this.$store.state.myevents)
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
  .v-input__control {
    display: flex;
    grid-area: control;
    box-shadow: 4px 4px #d33d29, 8px 8px #221203;
  }
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
  