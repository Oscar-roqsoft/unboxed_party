<template>
  <v-app>
    <v-card class="pa-0 ma-0" color="black" flat min-height="100vh">
      <v-img
        cover
        style="filter: opacity(0.1); position: absolute; top: 0; left: 0"
        height="100%"
        width="100%"
        src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_400,h_400/v1677835749/ARABIAN_FEST_ux58sh.jpg"
      ></v-img>
      <v-container class="pa-0" style="position: relative; max-width: 990px">
        <div
          style="width: 100%; min-height: 100vh"
          class="pa-6 d-flex justify-center align-center"
        >
          <v-row
            no-gutters
            style="position: relative"
            class="d-flex shadow justify-center"
          >
            <v-col cols="12" md="7">
              <v-img
                cover
                class="mx-auto"
                height="auto"
                max-height=""
                width="100%"
                src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1677835749/ARABIAN_FEST_ux58sh.jpg"
              ></v-img>
            </v-col>
            <v-col cols="12" md="5">
              <v-card
                max-width=""
                height="100%"
                color="#ffffff85"
                width="100%"
                class="d-flex align-center pa-4"
              >
                <v-form
                  @submit.prevent="submit()"
                  ref="form"
                  dark
                  class="w-100 px-5"
                >
                  <h1
                    style="
                      text-shadow: 4px 4px #d33d29, 8px 8px #221203;
                      font-family: 'Permanent Marker', cursive !important;
                    "
                    class="mb-5 text-white text-h4 text-center"
                  >
                    Free Reservation
                  </h1>
                  <v-text-field
                    dark
                    :loading="loading"
                    :rules="[rules.required]"
                    class="mb-2"
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
                    class="mb-2"
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
                    class="mb-2"
                    type="tel"
                    v-model="whatsapp"
                    label="Whatsapp Number"
                    hint="eg. 08023456789, your ticket will be sent here. "
                    persistent-hint
                    density="compact"
                    variant="solo"
                  ></v-text-field>
                  <v-text-field
                    :loading="loading"
                    :rules="[rules.required, rules.email]"
                    class="mb-2"
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
          density="compact"
                  v-model="consent"
          label="I consent to receiving emails from Unboxed Party "
        ></v-checkbox>
                  <div class="text-center py-3">
                    <v-btn
                      :loading="loading"
                      @click="submit()"
                      size="x-large"
                      style="
                        box-shadow: 4px 4px #d33d29, 8px 8px #221203;
                        font-family: 'Permanent Marker', cursive;
                      "
                      color="#221203"
                      theme="dark"
                      class="font-weight-bold mx-auto"
                      >submit</v-btn
                    >
                  </div>
                  <a
          style="text-decoration: none"
          href="https://www.instagram.com/the_unboxedparty/"
          target="_blank"
        >
                  <div    style="
                    /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                    font-family: 'Permanent Marker', cursive !important;
                  " class="mt-5 text-h5 text-white text-center w-100 justify-center d-flex">
                  <v-icon color="red darken-2" class="mr-2"
                    >mdi-instagram</v-icon
                  >
                  @the_unboxedparty
                </div>
                </a>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <v-dialog width="100%" max-width="400" v-model="dialog">
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
      </v-dialog>
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
    phone: "",
    whatsapp: "",
    email: "",
    loading: false,
    consent: false,
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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'


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
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

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

* {
  font-family: "Permanent Marker", cursive !important;
}
</style>
