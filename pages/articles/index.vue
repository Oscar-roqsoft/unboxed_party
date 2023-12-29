<template>
    <v-app>
      <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
        <div style="position:relative" class="overflow-hidden">
     
      
            <Header />
        </div>
  

  
  
        <v-container  :class="$vuetify.display.smAndDown? 'mt-0': 'mt-6 '">
          <div class="centerIt" style="position:relative">
            <!-- <v-avatar class="scehimg"  size="200" tile>
  
              <v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_Black_Posture_1_Happy_ephuz0.png"></v-img>
            </v-avatar> -->
            <!-- <h2 class="herotitle mb-4">Arabian Fest</h2> -->
        
         
          </div>
          
          <v-row class="d-flex py-0">
          
            <v-col  :cols="cols[1]">
          <v-row class="d-flex py-3">
            <v-col  v-for="(n, i) in myarticles" :key="i" class="pt-3" :cols="cols[3]">

               <!-- skeleton loader -->
              <div v-if="isLoading" class=" tw-w-full rounded">
                <div class="skeleton tw-h-[210px] tw-max-w-[500px] tw-rounded-3xl"></div>
                <div class="skeleton tw-h-[25px] my-4 tw-mx-w-[500px] tw-mx-1  tw-rounded-lg"></div>
             </div>

              <v-card v-else :to="'/article/'+ encodeURIComponent(n.name)" variant="dark" class="pa-2">
                <v-img
                  cover
                  height="210px"
                  max-width="500px"
                  class="rounded-xl"
                  :src="n.image"
                ></v-img>
                <div class=" pt-3" style=" width:100%; font-size: 19px;  background: linear-gradient(360deg, black, transparent);
    line-height: 1.2;position:;bottom:0">
                <h3 class="font-weight-medium text-truncate text-white">{{n.name}}</h3>
              </div>
              
              </v-card>
            </v-col>
            <v-col class="pt-5 text-center" cols="12" >
                <v-btn
                size="x-large"
              
                theme="dark"
                class="text-capitalize rounded-lg font-weight-bold"
                
                >Follow us on Instagram <v-icon icon="mdi-instagram"></v-icon></v-btn
              >
            </v-col>
          </v-row>            </v-col>
          </v-row>

        </v-container>
        <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
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
      consent: false,
      dialog: false,
      booked: false,
      sign: "",
      isLoading:false,
   
    }),
    computed: {
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
      articles () {
      return this.$store.state.articles
      },
      myarticles () {
      return this.$store.state.myarticles.list
    },
    },
    async mounted() {

      this.isLoading = true

          try {
          const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
            }
    
          }).then(res=>res.json());
    
          const payload =  [...data.articles]
        this.$store.dispatch("setMyArticles", payload);
        this.$store.dispatch("setMyArticlesExpirationDate", addMinutes(30));
    
        this.isLoading = false
        
        } catch (error) {
          console.error(error);
        }
     
      
      this.isLoading = false


      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },


    watch:{
    myarticles(){
      this.$store.dispatch('clearExpiredArticles')
    }
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
    .blogText {
      font-size: 35px !important;
      line-height: 50px !important;
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

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 10%);
  }
  100% {
    background-color: hsl(200, 20%, 8%);
  }
}
  </style>
  