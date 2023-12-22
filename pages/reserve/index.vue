<template>
    <v-app>
      <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
        <div style="position:relative" class="overflow-hidden">
          <div
          v-if="$vuetify.display.mdAndUp"
            style="
              position: absolute;
              z-index: -1;
              opacity: 0.2;
              height: 100%;
              display: flex;
              width: 100%;
              justify-content: center;">
                   <div style="z-index:1; scale:1.2;position: relative;height: 100vh;width:100%">
                   <div style="height: 70vh;
      position: absolute;
      width: 100%;
      bottom: 0;
      background: linear-gradient(360deg, black, transparent);
      z-index: -1;"></div>
                   </div>
            <video
              id="heroVideo"
              :style="$vuetify.display.smAndDown ? ' width: 1365px ' : ' width: 100%'"
              style="
                position: absolute;
                top: 0;
                scale: 1.2;
                height: 100vh;
                z-index: -1;
              "
              autoplay
              muted
              loop
            >
              <source
                src="https://res.cloudinary.com/crushcontest-com/video/upload/v1680267203/WhatsApp_Video_2023-03-31_at_8.40.28_AM_pvaijr.mp4"
              />
            </video>
            <!-- <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"></v-img></v-avatar> -->
          </div>
       <Header />
             <v-container>
          <v-row style class="d-flex align-center py-9">
            <v-col class="my-6" :cols="cols[2]">
              <h1 class="herotitle">Data driven party experience</h1>
              <p
                style="max-width: 450px"
                class="py-3 mb-4 text-grey-lighten-1 centerIt"
              >
                We only use your data to send you relevant information from unboxedparty.com, we do not sell or share your data with any third party.
              </p>
              <div class="py-1 centerIt mb-6">
            
              </div>
            
            </v-col>
            <v-col cols="12" md="5">
              <v-card
                max-width=""
                height="100%"
                color="#000" style="    background: #22222261;
    backdrop-filter: blur(8px);"
                width="100%"
                class="d-flex rounded-xl align-center pa-4"
              >
                <v-form
                  @submit.prevent="submit()"
                  ref="form"
                  
                  class="w-100 px-5"
                >
                  <h1
                    style="
                    "
                    class="mb-5 text-white  text-center"
                  >
                    Join Unboxed FC
                  </h1>
                  <v-text-field
                    
                    :loading="loading"
                    :rules="[rules.required]"
                    class="mb-2 rounded-xl"
                    v-model="name"
                    label="Full name"
                    hint="eg Ada Obi"
                    persistent-hint
                    density="compact"
                    variant="solo"
                  ></v-text-field>
                  <v-text-field
                    :loading="loading"
                    :rules="numberRules"
                    class="mb-2 rounded-xl"
                    type="tel"
                    v-model="phone"
                    label="Phone Number"
                    hint="eg. 08023456789"
                    persistent-hint
                    density="compact"
                    variant="solo"
                  ></v-text-field>
                  <v-text-field
                    :loading="loading"
                    :rules="numberRules"
                    class="mb-2 rounded-xl"
                    type="tel"
                    v-model="whatsapp"
                    label="Whatsapp Number"
                    hint="eg. 08023456789 "
                    persistent-hint
                    density="compact"
                    variant="solo"
                  ></v-text-field>
                  <v-text-field
                    :loading="loading"
                    :rules="[rules.required, rules.email]"
                    class="mb-2 rounded-xl"
                    type="email"
                    v-model="email"
                    label="Email"
                    hint="eg hello@unboxedparty.com"
                    persistent-hint
                    density="compact"
                    variant="solo"
                  ></v-text-field>
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
                  <v-checkbox
                  :rules="[rules.required]"
                  v-model="consent" color="red"
          label="I consent to receiving emails from Unboxed Party "
                ></v-checkbox>
                  <div class="text-center py-3">
                    <v-btn
                      :loading="loading"
                      @click="submit()"
                      size="x-large"
                      style="
                        font-family: 'Permanent Marker', cursive;
                      " rounded
                      color=""
                      theme=""
                      class="font-weight-bold text-capitalize mx-auto"
                      >submit</v-btn
                    >
                  </div>
                  <div class="d-flex justify-center">
                      <a
          style="text-decoration: none"
          href="https://www.instagram.com/the_unboxedparty/"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 text-grey-darken-2 text-center w-100 justify-center d-flex">
                  <v-icon color="" class="mr-2"
                    >mdi-instagram</v-icon
                  >
                </div>
                </a>
                  <a
          style="text-decoration: none"
          href="https://twitter.com/theunboxedparty"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 text-grey-darken-2 text-center w-100 justify-center d-flex">
                  <v-icon color="" class="mr-0"
                    >mdi-twitter</v-icon
                  >
                </div>
                </a> 
                  </div>
               
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container> </div>
  
  
    <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
  
  // import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
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
      loading: false,
      consent: true,
      dialog: false,
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
      displ() {
        return this.$vuetify.display;
      },
      events () {
        return this.$store.state.events
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
    mounted() {
      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },
    methods: {
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
          console.log(dat);
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
    box-shadow: none!important;
  }
  .v-selection-control__input input {
    scale: 0.5!important;
    opacity: 1!important;
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
  