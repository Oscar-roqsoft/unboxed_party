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
              </v-avatar>
              <h2 class="herotitle mb-4">Arabian Fest</h2> -->


          </div>
          

          <v-row class="d-flex py-0">

            <v-col  :cols="cols[7]">

              <div class="d-flex justify-center">
                <v-card @vue:mounted="image = JSON.parse(item.options).images[newIndex || 0] ; color = JSON.parse(item.options).colors[newIndex || 0]" 
                color="transparent" width="100%" v-if="item.name" class="pa-0">
                  
                  <h2 style="font-size: 40px" class="font-weight-bold text-capitalize text-grey-lighten-2   pb-6">
                    {{item.name}} 
                  </h2>
                
                      <v-img  eager cover
                        class="rounded-lg bg-transparent mb-4" height="auto" max-height="700" width="100%" 
                        :src="JSON.parse(item.options).images[newIndex || 0]">
                      </v-img> 

                      <!-- <div>
                        <ItemImage :options="item.options" :width="450" />
                      </div> -->
                        
                        
                        <h4 style="font-size: 30px" class="font-weight-bold text-grey-lighten-2   pb-6">
                          N{{addCommas( item.price)}} 
                        </h4>
                </v-card>

              </div>
          
            </v-col>

            <v-col  :cols="cols[9]">

              <div class="d-flex justify-center mt-4">
 
                <v-card color="transparent" width="100%" v-if="item.name" class="pa-0">
                  <h2 style="font-size: 30px" class=" font-weight-medium  pb-6">
                    Colors
                  </h2>
            <v-row>

              <v-col style="cursor: pointer;" @click="newIndex = i" cols="4"  v-for="(n, i) in JSON.parse(item.options).images">
                  <div  @click.prevent="color = JSON.parse(item.options).colors[i] ; image = JSON.parse(item.options).images[i] " style="transition: 0.2s all ease-in-out;" :style="(newIndex == i) || (newIndex == null && i == 0)? 'scale:0.9':''">

                       <v-img  eager   class="rounded-lg" height="120" width="100%" cover 
                      :src="n">
                      <v-overlay persistent="" :model-value="true" v-if="(newIndex == i) || (newIndex == null && i == 0)" contained="" scrim="black" 
                      absolute=""></v-overlay>

                  </v-img> 
              </div>
                  <h4 class=text-capitalize  style="transition:  0.2s all ease-in-out;cursor: pointer;font-size: 20px" 
                  :class="(newIndex == i) || (newIndex == null && i == 0)? 'text-grey font-weight-bold pl-4':''">
                    {{ JSON.parse(item.options).colors[i] }}</h4>       
              </v-col>
              
          </v-row>
              
                </v-card> 
   
              </div>

              <div class="d-flex mt-5 justify-center">

  
                <v-card color="transparent" width="100%" v-if="item.name" class="pa-0">
                    <h2 style="font-size: 30px" class=" font-weight-medium  pb-6">
                      Sizes
                    </h2>
                     <span v-if="!size.length" class="tw-text-red-500 tw-mb-6 tw-text-lg tw-font-medium tw-transition tw-duration-300 tw-ease-in-out" > 
                        {{ displayMessageError }}
                      </span>

                      <v-row>

                        <v-col cols="3"  v-for="(n, i) in JSON.parse(item.options).sizes">
                            <v-sheet  @click="size = n" style="transition:  0.2s all ease-in-out;cursor: pointer;font-size: 25px"  
                            :style="size == n? 'border:4px solid #fff;scale:0.9;':''" 
                            class="rounded-lg d-flex align-center justify-center font-weight-bold" height="50" width="100%" >
                            <h3 class="text-uppercase" >{{ n }}</h3>       
                          </v-sheet>  
                        </v-col>

                      </v-row>
                      
                </v-card> 

              </div>

              <div class="d-flex mt-5 justify-center">
      
                <v-card color="transparent" width="100%" v-if="item.name" class="pa-0">

                  <h2 style="font-size: 30px" class=" font-weight-medium  pb-6">
                    Quantity
                  </h2>

                <div class="d-flex">

                <v-btn class="font-weight-bold"  @click.prevent="decrement" size="large" color="grey-darken-3" ><v-icon size="25" icon="mdi mdi-minus"></v-icon></v-btn>

                    <v-sheet  
                      class="rounded-lg mx-4 d-flex align-center justify-center px-4" height="" width="60" >
                      <h3 class="font-weight-bold" style="transition:  0.2s all ease-in-out;cursor: pointer;font-size: 20px"  >{{ quantity }}</h3>       
                    </v-sheet>     
                <v-btn class="font-weight-bold"  @click.prevent="increment" size="large" color="white"><v-icon size="25" icon="mdi mdi-plus"></v-icon></v-btn>
                </div>
                
                </v-card> 

              </div>
      <v-btn @click.prevent="addToCart(item)" block rounded="lg" class="mt-12 text-capitalize  font-weight-bold" height="80" size="x-large" 
      color="white">Add to cart</v-btn>
      <!-- <p class="text-grey mt-4">Contact Support To Order, Online Purchase will be active soon.</p> -->
            </v-col>


          </v-row>



        </v-container>








        <v-container class="mt-12">
              
            <h2 style="font-size: 30px" class="font-weight-bold text-grey-lighten-2   pb-0 py-0 px-1">
              Other Items
            </h2>

            <v-row class=" py-3">

                <v-col v-show="!n.onSale" cols="12" lg="4" v-for="(n, i) in items" :key="i" class="py-4" :cols="cols[2]">
                  <v-card :to="'/shop/'+encodeURIComponent(n.name)" color="transparent" class="pa-2">

                    <!-- <v-img
                      cover
                      height="400"
                      max-width="500px"
                      class="rounded-lg"
                      :src="'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_800/v1694578910/unboxed/'+ n.options[0].images[0] +'.png'"
                    ></v-img> -->

                    <div class="tw-rounded-lg">
                       <ItemImage :options="n.options" :width="450" />
                    </div>

                    <div class=" pt-3" style=" width:100%;   background: linear-gradient(360deg, black, transparent);
                      line-height: 1.2;bottom:0;position:">

<h3 class="font-weight-medium my-4 text-capitalize text-truncate text-white" style="font-size: 20px;">{{n.name}}</h3>
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

          </v-container>

        <Footer />
      </v-card>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      quantity:1,
      selectedItems: [],
      cartItems:[],
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
      image:"",
      name: "",
      text: null,
      size: '',
      displayMessageError:'',
      color: '',
      newIndex: null,
      phone: "",
      whatsapp: "",
      email: "",
      item: {},
      loading: false,
      consent: false,
      dialog: false,
      read_more: false,
      booked: false,
      sign: "",
  
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

      screenWidth() {
        return this.$vuetify.display.width;
    },
    
    itemSize(){

      if (this.screenWidth >= 1264) {
      return 500; // Customize size names and breakpoints

      } else if (this.screenWidth >= 960) {
      return 500;

      } else {
      return 450;

      }

    } ,
      items() {
      return this.$store.state.shop_items.list
    },
      mycartItems () {
      return this.$store.state.cartItems
    },
    },


     mounted() {
      var name = decodeURIComponent(this.$route.params.name)
      this.item = this.items.find(el=>{
        return el.name.toLowerCase() === name.toLowerCase()
      })

      // console.log(this.item.category)


   

      setTimeout(() => {
        this.dialog = true;
      }, 10000);
    },

    methods: {
      increment(){
        this.quantity++
    },


    decrement(){
        if(this.quantity>1){
          this.quantity--
        }
    },

      addToCart(i){
        if(!this.size)return this.displayMessageError = "Select size *"
        this.selectedItems = {image:`${this.image}`,name:`${this.item.name}`,price:parseFloat(`${this.item.price}`) * parseFloat(`${this.quantity}`),size:`${this.size}`,quantity:`${this.quantity}`,color:`${this.color}`}
        this.$store.state.cartItems.push(this.selectedItems)
        // console.log(this.$store.state.items[0])
        navigateTo("/shop/cartitems")
    },

    addCommas(num) {
  // Convert the number to a string
  let str = num.toString();
  // Split the string into an array of characters
  let arr = str.split('');
  // Reverse the array so we can add commas from right to left
  arr.reverse();
  // Loop through the array and add commas every three digits
  for (let i = 3; i < arr.length; i += 4) {
    arr.splice(i, 0, ',');
  }
  // Reverse the array again and join it back into a string
  str = arr.reverse().join('');
  // Return the formatted string
  return str;
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
  