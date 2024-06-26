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

              
                   <div style="height: 60vh;
                position: absolute;
                width: 100%;
                bottom: 0;
                background: linear-gradient(360deg, black, transparent);
                z-index: 2;"></div>
      
            <video
              id="heroVideo"
              :style="$vuetify.display.smAndDown ? ' width: 1365px ' : ' width: 100%'"
              style="
                position: absolute;
                top: 0;
                scale: 1.2;
                height: 100vh;
                z-index: 1;
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
       </div>

       <div style="position:absolute; top: 160px;width: 100%;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold">Questionnaire</h1>
          </div>
        </div>
       
       <v-container >

         
        <v-row class="d-flex " style="margin-top: 10px; display: flex; justify-content: center; align-items: center; ">
         
          <v-col :class="$vuetify.display.smAndDown? 'pt-0':'pt-4'" class="centerIt mt-8 rounded" :cols="cols[8]"  style="max-width: 700px; ">
            <!-- <p :class="$vuetify.display.smAndDown? 'mb-4':''" class="text-grey-lighten-1 px-2 py-4" >
              Unboxed Party is your go-to destination for unique and exciting events in the Nigeria (for now sha 😉). From Arabian Fest to Halloween, Meme Party to Royal Ball/Prom, we bring you the best in themed entertainment. Since our inception, we have been growing rapidly, with each event exceeding expectations and setting new standards. Our monthly events are the talk of the town, and we pride ourselves on delivering unforgettable experiences that keep people coming back for more. Join us and unleash the fun at Unboxed Parties!
            </p>
            <v-btn
              size="large"
              rounded to="/ticket/list"
              variant="outlined"
              style="border: 2px solid #ffffff"
              class="text-capitalize mt-4"
              >See Upcoming Events</v-btn -->
                       
            <v-card style="border-radius: 20px;">

                <!-- <v-card-title class="text-center font-weight-bold tw-text-2xl"></v-card-title> -->

                <v-card-text>
                    <v-form @submit.prevent="handleSubmit()" style="text-align: start;">
                        <div v-for="(question, index) in questions" :key="index">
                        <v-text-field
                            
                            v-if="question.type === 'text'"
                            :label="question.text"
                            v-model="responses[index]"
                            :id="'question-' + index"
                        ></v-text-field>
                        
                        <v-select
                            v-if="question.type === 'select'"
                            :label="question.text"
                            :items="question.options"
                            v-model="responses[index]"
                            :id="'question-' + index"
                        ></v-select>
                        <v-combobox
                            v-if="question.type === 'select2'"
                            :label="question.text"
                            v-model="model"
                            v-model:search="search"
                            :hide-no-data="false"
                            :items="question.options"
                            :id="'question-' + index"
                            hint="[Maximum of 2 roles]"
                            hide-selected
                            multiple
                            persistent-hint
                            small-chips
                            >
                        </v-combobox>

                        </div>
                        <v-btn 
                         rounded
                         outline
                        type="submit" color=" text-capitalize font-weight-bold w-100 mt-6" style="min-width: 200px; min-height: 50px; background:#a044ff;">Submit</v-btn>
                    </v-form>
                </v-card-text>
 
            </v-card>
         
          </v-col>

        </v-row>


      </v-container>

  
    <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
   import { createToast } from 'mosha-vue-toastify'
   import 'mosha-vue-toastify/dist/style.css'
  
  // import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    setup () {
        const toast = (message) => {
            createToast(message)
        }
        return { toast }
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
      text: null,
      phone: "",
      whatsapp: "",
      email: "",
      loading: false,
      consent: true,
      dialog: false,
      booked: false,
      sign: "",
      responses:[],
      model: [],
      name:'',
      location:'',
      number:'',
      student:'',
      socialmedia:'',
      name:'',
      search: null,
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

      questions:[
        { text: 'What is your name?',model:'name', type: 'text', },
        { text: 'What is your Location?',model:'location', type: 'text' },
        { text: 'What is your phone number?',model:'number', type: 'text' },
        { text: 'Are you a student?',model:'student', type: 'select', options: ['Yes', 'No'] },
        { text: 'What is your social media handles?',model:'socialmedia', type: 'text' },
        { text: 'What is your email address?',model:'email', type: 'text' },
        // { text: 'What is your favorite color?',model:'', type: 'select', options: ['Red', 'Green', 'Blue'] },
        { text: 'Pick a role?',model:'role', type: 'select2', options: ['Partnership', 'Legal', 'Promotions/Marketing','Content creation/media','Talents','Stage management/Coordination','Data/Operations'] },
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
    watch: {
      model (val) {
        if (val.length > 2) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
    methods: {
        handleSubmit() {
            const responses = this.questions.map((question, index) => ({
                question: question.text,
                model:question.model,
                answer: this.responses[index]
            }));

            console.log('Responses:', responses);

            this.toast("Submitted successfully");
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
  