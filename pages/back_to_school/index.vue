<template>
    <v-app>
      <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
        <div style="position:relative" class="overflow-hidden">
     
          <div
            v-if="true"
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
          <v-row style class="d-flex  py-9">
            <v-col style="max-height:550px" class="d-flex align-center my-6" :cols="cols[7]">
              <div class="py-1 centerIt  mb-6">
                <v-img
       class="rounded-xl centerobj mt-12 mb-3"
       width="" max-width="200px" eager
       height="auto"
       src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1683208030/Back_to_School_with_Unboxed_FC_lor7qv.jpg"
     ></v-img>
              
              <h1 class="herotitle">Unboxed FC Scholarship Programme</h1>
              <p
                style="max-width: 450px"
                class="py-3 mb-4 text-grey-lighten-1 centerIt">
                We only use your data to send you relevant information from unboxedparty.com, we do not sell or share your data with any third party.
              </p>
            
              </div>
            
            </v-col>
            <v-col class="d-flex align-center" cols="12" md="5">
              <v-card
                max-width=""
                height="auto"
                color="#000" style="    background: #22222261;
    backdrop-filter: blur(8px);"
                width="100%"
                class=" rounded-xl align-center pa-4"
              >
              <v-window  :touch="false"    direction="vertical"
 v-model="show">
      <v-window-item eager :value="0">
              <div style="width:100%" v-if="show == 0">
              <h1 class="mb-5 text-white  text-center">
                   Enter your email to continue.
                  </h1>
                  <v-form
                  @submit.prevent="checkemail()"
                  ref="email"
                  
                  class="w-100 h-auto px-5"
                >
                  <v-text-field
                    :read-only="loading"
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
                  </v-form>
                  <div class="text-center py-3">
                    <v-btn
                      :loading="loading"
                      @click="checkemail()"
                      size="x-large"
                    rounded
                      color=""
                      theme=""
                      class="font-weight-bold text-capitalize mx-auto"
                      >submit</v-btn
                    >
                  </div>
                </div>
      </v-window-item>
      <v-window-item eager :value="2">

              <div v-if="show == 2">
                <h2
                  style="
                  "
                  class="mb-5  text-grey  text-center"
                >
                  Your Application has been submitted successfully, we will reach out to you via your contact info.
                </h2>
                <div class="d-flex justify-center">
                      <a
          style="text-decoration: none"
          href="https://www.instagram.com/the_unboxedparty/"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 mx-1 text-grey-darken-2 text-center w-100 justify-center d-flex">
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
                  " class="mt-5 mx-1 text-grey-darken-2 text-center w-100 justify-center d-flex">
                  <v-icon color="" class="mr-0"
                    >mdi-twitter</v-icon
                  >
                </div>
                </a> 
                  <a
          style="text-decoration: none"
          href="https://www.tiktok.com/@the_unboxedparty"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 mx-1 text-grey-darken-2 text-center w-100 justify-center d-flex">
                  <v-icon color="" class="mr-0"
                    >mdi-music-note</v-icon
                  >
                </div>
                </a> 
                  <a
          style="text-decoration: none"
          href="https://www.youtube.com/@unboxedparty"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                  " class="mt-5 mx-1 text-grey-darken-2 text-center w-100 justify-center d-flex">
                  <v-icon color="" class="mr-0"
                    >mdi-youtube</v-icon
                  >
                </div>
                </a> 
                  </div>
              </div>
      </v-window-item>
      <v-window-item eager :value="1">

                <v-form
                  @submit.prevent="submit()"
                  ref="form"
                  
                  class="w-100 px-2"
                >
                <div>
                  <h1
                    style="
                    "
                    class=" mb-3 text-white  text-center"
                  >
                    Apply
                  </h1>
                  <p v-if="errorText" class="caption text-yellow mb-3 text-center ">Ensure you filled the Form Properly</p>
                  <v-window  :touch="false"    direction="vertical"
 v-model="show2">
      <v-window-item eager :value="0">
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
                    hint="eg. 08023456789"
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
                  <v-text-field
                    :loading="loading"
                    :rules="[rules.required]"
                    class="mb-2 rounded-xl"
                    type="text"
                    v-model="instagram_handle"
                    label="Instagram Handle"
                    hint="eg @the_unboxedparty"
                    persistent-hint
                    density="compact"
                    variant="solo"
                    ></v-text-field>
      </v-window-item>
            <v-window-item eager :value="1">
<!-- 
                  <v-select
                  :rules="[rules.required]"
                  v-model="school"
                    density="compact"
                    variant="solo"
  label="School"
  :items="['UNIZIK', 'TANSIAN UNI', 'ANSU', 'FED POLY OKO', 'ST PAULS UNI']"
></v-select> -->
<p class="my-3 mt-5">Select your school</p>

<v-radio-group inline 
        :rules="[rules.required_radio2]"
        v-model="school">
  <v-radio v-for="n in ['UNIZIK', 'TANSIAN UNI', 'ANSU', 'FED POLY OKO', 'ST PAULS UNI']" :key="n" :label="n" :value="n"></v-radio>
</v-radio-group>
             
                  <v-text-field
                    :loading="loading"
                    :rules="[rules.required]"
                    class="mb-2 rounded-xl"
                    type="text"
                    v-model="department"
                    label="Department"
                    hint="eg Mass Comunication"
                    persistent-hint
                    density="compact"
                    variant="solo"
                    ></v-text-field>
<!--        
                    <v-select  
                     :rules="[rules.required]"
                    density="compact"
                    variant="solo" v-model="lvl"
  label="Level"
  :items="['100', '200', '300', '400', '500']"
></v-select> -->
<p class="my-3 mt-5">Select your current level</p>

<v-radio-group inline 
        :rules="[rules.required_radio2]"
        v-model="lvl">
  <v-radio v-for="n in ['100', '200', '300', '400', '500']" :key="n" :label="n" :value="n"></v-radio>
</v-radio-group>
<v-card
:loading="galleryLoad "
:disabled="galleryLoad || galleryLoad2"
            hover
             :variant="selectedFile[0]? 'elevated' : 'outlined'"
            flat @click="clickfileinput()"
            style=" border-radius:8px;overflow:hidden"
            height="50"
            width="100%" :color="selectedFile[0]? '#22574d' : 'grey-darken-1'"
          
            class="d-flex mt-0 align-center elevation-1 justify-center mx-auto">
            
     <h4 style="     line-height: 1.1;
    display: flex;
    justify-content: center;

    align-items: center;
    padding: 0 17px; 
    width: 100%;" class=" py-0 body-2 text-center text-capitalize font-weight-bold grey--text text--darken-2">
        <v-icon class=" mr-1 mb-1"  size="25"  color="">mdi-camera</v-icon>
 {{selectedFile[0] ? selectedFile[0].name : 'Last School Fees Receipt'}} </h4>
          </v-card>
 
<v-card
:loading="galleryLoad2"
:disabled="galleryLoad || galleryLoad2"

            hover
             :variant="selectedFile2[0]? 'elevated' : 'outlined'"
            flat @click="clickfileinput2()"
            style=" border-radius:8px;overflow:hidden"
            height="50"
            width="100%" :color="selectedFile2[0]? '#22574d' : 'grey-darken-1'"
          
            class="d-flex mt-4 align-center elevation-1 justify-center mx-auto">
            
     <h4 style="     line-height: 1.1;
    display: flex;
    justify-content: center;

    align-items: center;
    padding: 0 17px; 
    width: 100%;" class=" py-0 body-2 text-center text-capitalize font-weight-bold grey--text text--darken-2">
        <v-icon class=" mr-1 mb-1"  size="25"  color="">mdi-camera</v-icon>
 {{selectedFile2[0] ? selectedFile2[0].name : 'School ID Card'}} </h4>
          </v-card>
 
          <input
            accept="image/png, image/jpeg,image/jpg,image/JPG,image/webp, image/bmp, image/gif"
            @change="onFileChanged2"
            ref="img2"
            style="display: none"
            type="file"
            label="Profile pic"
          />
 
          <input
            accept="image/png, image/jpeg,image/jpg,image/JPG,image/webp, image/bmp, image/gif"
            @change="onFileChanged"
            ref="img"
            style="display: none"
            type="file"
            label="Profile pic"
          />
         </v-window-item>
               <v-window-item eager :value="2">

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
                  <p class="my-3 mt-5">Have you attended any Unboxed Party Episode?</p>

  
        <v-radio-group inline 
        :rules="[rules.required_radio2]"
        v-model="attended_radio">
  <v-radio label="Yes" value="1"></v-radio>
  <v-radio label="No" value="2"></v-radio>
</v-radio-group>
                  <p class="my-3">Are you following us on these platforms</p>

                  <div class="d-flex px-2 justify-space-between align-center">

 Instagram             <a
  style="text-decoration: none"
  href="https://www.instagram.com/the_unboxedparty/"
  target="_blank"
>
          <v-btn
          style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
"
  rounded size="small"
           class="ml-1 text-grey-lighten-2 text-capitalize text-center w-100 justify-center d-flex">
          <v-icon color="" class="mr-1"
            >mdi-instagram</v-icon> 
            <span  style="font-family: Permanent Marker !important;font-size: 12px;">follow</span>
            
        </v-btn>
        </a> 
      </div>
        <v-radio-group inline 
        :rules="[rules.required_radio]"
        v-model="instagram_radio">
  <v-radio label="Yes" value="1"></v-radio>
  <v-radio label="No" value="2"></v-radio>
</v-radio-group>
      <div class="d-flex px-2 justify-space-between align-center">

 Twitter            <a
  style="text-decoration: none"
  href="https://twitter.com/theunboxedparty"
  target="_blank"
>
       
        <v-btn color="blue-darken-2" rounded size="small"
           class="ml-1 text-grey-lighten-2 text-capitalize text-center w-100 justify-center d-flex">
          <v-icon color="" class="mr-1"
            >mdi-twitter</v-icon> 
            <span  style="font-family: Permanent Marker !important;font-size: 12px;">follow</span>
            
        </v-btn>
        </a> 
      </div>
        <v-radio-group inline 
        :rules="[rules.required_radio]"
        v-model="twitter_radio">
  <v-radio label="Yes" value="1"></v-radio>
  <v-radio label="No" value="2"></v-radio>
</v-radio-group>
      <div class="d-flex px-2 justify-space-between align-center">

         TikTok            <a
          style="text-decoration: none"
          href="https://www.tiktok.com/@the_unboxedparty"
          target="_blank"
        >
          
                <v-btn color="black" rounded size="small"
           class="ml-1 text-grey-lighten-2 text-capitalize text-center w-100 justify-center d-flex">
          <v-icon color="" class="mr-1"
            >mdi-music-note</v-icon> 
            <span  style="font-family: Permanent Marker !important;font-size: 12px;">follow</span>
            
        </v-btn>
                </a> 
              </div>
              <v-radio-group 
              :rules="[rules.required_radio]"
              inline v-model="tiktok_radio">
        <v-radio label="Yes" value="1"></v-radio>
        <v-radio label="No" value="2"></v-radio>
      </v-radio-group>
   </v-window-item>
  </v-window>
                  <v-checkbox
                  :rules="[rules.required]"
                  v-model="consent" color="red"
          label="I consent to receiving emails from Unboxed Party "
                ></v-checkbox>
      

                </div>
                </v-form>
      </v-window-item>
    </v-window>
    <div v-if="show == 1" class="text-center py-3">
      <v-row>
<v-col cols="6">
    
                    <v-btn
                    v-if="show2 > 0"
                      @click="show2--"
                      size="x-large"
                      style="border-radius:10px;
                        font-family: 'Permanent Marker', cursive;
                      " 
                      color="grey-darken-4" block
                      theme=""
                      :disabled="loading ||galleryLoad || galleryLoad2"
                      class="font-weight-black text-capitalize mx-auto"
                      >prev</v-btn
                    ></v-col>
                 <v-col cols="6">
   <v-btn
   v-if="show2 < 2"
                      @click="show2++"
                      :disabled="loading ||galleryLoad || galleryLoad2"

                      size="x-large"
                      style="border-radius:10px;
                        font-family: 'Permanent Marker', cursive;
                      " 
                      color="grey-darken-4" block
                      theme=""
                      class="font-weight-black text-capitalize mx-auto"
                      >Next</v-btn
                    >
                    <v-btn
                    v-else
                      :disabled="loading || galleryLoad || galleryLoad2"
                      @click="submit()"
                      size="x-large"
                      style="border-radius:10px;
                        font-family: 'Permanent Marker', cursive;
                      " 
                      color="#22574d" block
                      theme=""
                      class="font-weight-black text-capitalize mx-auto"
                      >{{ progress ? progressBar : "submit" }}</v-btn
                    >
                  </v-col>
                      </v-row>
                  </div>
    <div v-if="show == 1" class="text-center py-3">
                 
                  </div>
         
              </v-card>
            </v-col>
          </v-row>
        </v-container> </div>
  
  
    <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
  import imageCompression from 'browser-image-compression';
  import axios from 'axios';

  // import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    data: () => ({
      rules: {
        required: (value) => !!value || "Required.",
        required_radio2: (value) =>value !== null || "Required.",
        required_radio: (value) =>value == "1" || "Required.",
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
      department: "",
      text: null,
      twitter_radio: null,
      lvl: null,
      selectedFile: [],
      selectedFile2: [],
      school: null,
      img: "",

      instagram_radio: null,
      attended_radio: null,
      tiktok_radio: null,
      phone: "",
      progressBar: "0%",
    progress: false,
      whatsapp: "",
      instagram_handle: "",
      email: "",
      show:0,
      show2:0,
      loading: false,
      progress: false,
      errorText: false,
      galleryLoad: false,
      galleryLoad2: false,
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
          ? [4, 12, 6, 4, 8, 4, 3, 7]
          : md
          ? [4, 12, 12, 6, 8, 4, 3, 7]
          : sm
          ? [6, 12, 12, 12, 12, 12, 12, 12]
          : [6, 12, 12, 12, 12, 12, 12, 12];
      },
    },
    mounted() {
      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },
    methods: {
      async checkemail() {
        this.booked = true;
        var bol = await this.$refs.email.validate()
        if (bol.valid) {
          this.loading = true;
          var dat = {
            email: this.email
          }
          fetch("https://backend.unboxedparty.com/api/checkmail?email="+this.email, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Accept": "application/json"
            },
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Something went wrong");
            })
            .then((res) => {
              if(res.success.msg === null){
                this.show = 1
              }else{
                this.user = res.success.msg
                this.show = 1
   this.name =  this.user.name
               this.email =  this.user.email
               this.phone =  this.user.phone
               this.whatsapp =  this.user.whatsapp
              }
              this.loading = false;

            })
            .catch((err) => {
              // console.log(err)
              this.dialog = true;
              this.loading = false;
            });
        }
      },
    
  onFileChanged(event) {
      const sn = this;
      var imageFile = event.target.files[0];
      // console.log(imageFile);
      if (imageFile.type.includes("image")) {
        this.galleryLoad = true;
        var options = {
          maxSizeMB: 0.7,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        imageCompression(imageFile, options)
          .then((compressedFile) => {
            this.selectedFile = [compressedFile];
            this.galleryLoad = false;
            return;
          })
          .catch(function (error) {
            this.selectedFile = [];
            this.galleryLoad = false;
            // console.log(error);
          });
      } else {
        this.galleryLoad = false;
        sn.selectedFile = [imageFile];
      }
    },
  clickfileinput(){
this.$refs.img.click()
  },
  onFileChanged2(event) {
      const sn = this;
      var imageFile = event.target.files[0];
      // console.log(imageFile);
      if (imageFile.type.includes("image")) {
        this.galleryLoad2 = true;
        var options = {
          maxSizeMB: 0.7,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        imageCompression(imageFile, options)
          .then((compressedFile) => {
            this.selectedFile2 = [compressedFile];
            this.galleryLoad2 = false;
            return;
          })
          .catch(function (error) {
            this.selectedFile2 = [];
            this.galleryLoad2 = false;
            // console.log(error);
          });
      } else {
        this.galleryLoad2 = false;
        sn.selectedFile2 = [imageFile];
      }
    },
  clickfileinput2(){
this.$refs.img2.click()
  },
      async submit() {
        this.booked = true;
        var bol = await this.$refs.form.validate();
        if (bol.valid && this.selectedFile[0] && this.selectedFile2[0]) {
          this.loading = true;
          this.errorText = false

          this.progress = true
          const config = { headers: { "Content-Type": "multipart/form-data",   "Access-Control-Allow-Origin": "*",
              Accept: "application/json" }, 
      onUploadProgress: progressEvent => {
      let percentComplete = progressEvent.loaded / progressEvent.total
      this.progressBar = parseInt(percentComplete * 100)+'%';
    } };
    const fd = new FormData();
      if(this.selectedFile[0].size > 15897152){
        this.selectedFile = []
        
        this.progress = false
        this.loading = false
        alert( 'School Fees receipt file is too big')
     return
    };
    fd.append("school_fees", this.selectedFile[0]);
      if(this.selectedFile2[0].size > 15897152){
        this.selectedFile2 = []
        
        this.progress = false
        this.loading = false
        alert( 'School id card file is too big')
     return
    };
    fd.append("school_id", this.selectedFile2[0]);
    fd.append("name", this.name);
    fd.append("email", this.email);
    fd.append("phone", this.phone);
    fd.append("whatsapp", this.whatsapp);
    fd.append("department", this.department);
    fd.append("attended", this.attended_radio);
    fd.append("instagram_handle", this.instagram_handle);
    fd.append("school", this.school);
    fd.append("level", this.lvl);

                axios.post("https://backend.unboxedparty.com/api/back_to_school", fd, config) 
            .then((res) => {
              this.show = 2
              this.show2 = 0
              this.loading = false;
            })
            .catch(() => {
              alert('error')
              this.show2 = 0
              this.dialog = true;
              this.progress = false
              this.progressBar = '0%'

              this.loading = false;
            });
        }else{
          this.show2 = 0
          this.errorText = true
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
    font-size: 58px;
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
    .centerobj {
      margin: auto !important;
    }
    .numberstyle {
      font-weight: 700;
      line-height: 46px;
      font-size: 28px;
    }
  }
  </style>
  