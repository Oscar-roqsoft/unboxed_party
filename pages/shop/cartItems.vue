
<template>

    
    <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
     
      <div style="position:relative;    min-height: 100vh;" class="overflow-hidden">
       <div>
        <div
        v-if="$vuetify.display.mdAndUp"
          style="
            position: absolute;
            z-index: -1;
            opacity: 0.4;
            height: 100vh;
            display: flex;
            width: 100%;
            justify-content: center;">
                  <div style="z-index:5; scale:1.2;position: relative;height: 100vh;width:100%">
                  <div style="height:100%;
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        background: linear-gradient(360deg, black, transparent);
                        z-index: 6;">
                  </div>
                   </div>
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


    

   

<v-container class="p-4">
    
   <div class="tw-max-w-full tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 md:tw-max-w-full tw-justify-center">

    <row>
      <Product v-if="isVisible" class=""/>
      <v-col v-else class="md:tw-mt-[76px] lg:tw-col-span-2 tw-mx-auto"> 
          <v-card height="auto" color="#000" style="background: hsla(0, 0%, 13%, 0.38); backdrop-filter: blur(8px);"  
          class=" rounded-lg align-center pa-4" :style="{ display: reveal === 2 ? 'none' : 'block' }">


              <div v-if="reveal == false" class="tw-text-white"  >


                  <h1 style="font-size: 30px;" class="mb-5 text-white  font-weight-bold text-center">
                      Enter your email to checkout.
                  </h1>
                  <v-form @submit.prevent="checkemail()" ref="email" class="w-100 h-auto px-5 ">
                      <v-text-field
                          :read-only="loading"
                          :rules="[rules.required, rules.email]"
                          class="mb-2 em rounded-xl"
                          type="email"
                          v-model="email"
                          label="Email"
                          hint="eg hello@unboxedparty.com"
                          persistent-hint
                          density="compact"
                          variant="solo"
                      ></v-text-field>
                </v-form>
                
              </div>
              
              <div v-if="reveal == 4">
                  <h1 style="font-size: 30px;" class="mb-5 text-white font-weight-bold  text-center">
                      Thank you, check your email.
                  </h1>
           
              </div>
                
              <v-expand-transition>

                  <v-card flat v-if="reveal == 1"
                  class="v-card--reveal" color="transparent"
                  style="height: 100%;"  width="100%">

                  <v-form
                  @submit.prevent="submit()" ref="form"
                  class="w-100 h-auto px-5">
                  <h1
                       style="font-size: 30px;"
                      class="mb-5 text-white font-weight-bold  text-center">
                      Welcome 😍, kindly fill the form to continue🚀.
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
                      v-model="address"
                      label="Address"
                      hint="eg. ifunanya lodge ifite ,Awka "
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

                

                  <!-- <div class="text-center py-3">
                      <v-btn
                      :loading="loading"
                      @click="submit()"
                      size="x-large"
                      rounded
                      color=""
                      theme=""
                      class="font-weight-bold text-capitalize mx-auto"
                      >submit</v-btn
                      >
                  </div> -->

                 

                  </v-form>


                  
                  </v-card>
              </v-expand-transition>

              
              
              
              
              
            </v-card>

            <v-expand-transition>
              <v-card v-if="reveal == 2" class="v-card--reveal" color="transparent"
              style="height: 100%;"  width="100%">
              <div  class="mb-5">
                  <h1  style="font-size: 30px;" class="mb-5 text-white font-weight-bold  text-center">
                                    Proceed to Pay
                               </h1>

                                <p 
                                   style="
                                        background: rgb(21 21 21);
                                        padding: 10px 15px;
                                        border-radius: 8px;line-height:19px;
                                        margin-top: 20px; font-size:15px" 
                                        class="text-orange-darken-1 text-left"><span style="
                                        font-size:18px" class="text-grey font-weight-bold">Note</span>  
                                        <br> <br> 1.  Kindly wait for your payment to be confirmed by flutterwave before closing the payment screen <br><br>  
                                        2. Final amount will include payment gateway charges <br><br>  
                                   3. Contact Support for any payment issues
                                </p>

                        </div>
              </v-card>
            </v-expand-transition>
          
      </v-col>

      <div class=" tw-w-full  md:tw-mt-4 tw-opacity-70 tw-col-span-1 tw-shadow tw-rounded-md tw-min-h-[300px]  
      md:tw-h-[520px] tw-overflow-y-scroll md:tw-p-4 ">
               
                 
              <div class="tw-flex tw-flex-col tw-justify-end tw-items-center tw-font-bold  tw-mt-14 tw-w-full tw-border tw-rounded 
              tw-p-4 tw-border-gray-900"
                color="deep-purple-accent-3">

                    <div class="tw-w-full">
                          <div class="tw-flex tw-justify-between tw-border-b tw-border-gray-900 tw-py-4">
                          <span>Subtotal:</span>
                          <span>N{{ addCommas(subtotalPrice) }}.00</span>
                          <!-- <v-money>${{ totalPrice}}</v-money> -->
                          </div>

                          <!-- <div class="tw-flex tw-justify-between tw-pb-4 tw-border-b tw-border-gray-900">
                          <span class="tw-capitalize">Discount:</span>
                          <span>N{{ addCommas(discountPrice)}}.00</span>
                          </div> -->

                          <div class="tw-flex tw-justify-between tw-py-4">
                          <span class="tw-capitalize">total Amount:</span>
                          <span>N{{ addCommas(totalPrice) }}.00</span>
                          </div>

                         

                         

                    </div>

                      <v-row class="tw-p-2 tw-grid tw-grid-cols-2 tw-gap-3">

                          <v-btn  @click.prevent="navigateTo('/shop')" rounded size="x-large"
                               type="submit" class="tw-mt-4  mb-2
                              font-weight-bold text-capitalize mx-auto ">
                              go back
                          </v-btn>

                          <v-btn v-if="isVisible" style="color:white !important;"  @click.prevent="isVisible = false" rounded  size="x-large"
                              color="blue-darken-4" type="submit" class="tw-mt-4  mb-0  
                              font-weight-bold text-capitalize mx-auto ">
                             <span style="color:white!important">
                               check out

                             </span> 
                          </v-btn>

                          <div v-else>
                              <v-btn v-if="reveal == false" style="color:white !important;"  :loading="loading" @click.prevent="checkemail" rounded   size="x-large"
                                  color="blue-darken-4" type="submit" class="tw-mt-4 mb-0 
                                  font-weight-bold text-capitalize mx-auto ">
                                  check out
                              </v-btn>

                              <v-btn v-if="reveal == 1" style="color:white !important;"  :loading="loading" @click.prevent="submit()" rounded   size="x-large"
                                  color="blue-darken-4" type="submit" class="tw-mt-4 mb-0 
                                  font-weight-bold text-capitalize mx-auto ">
                                  Submit
                              </v-btn>

                              <v-btn v-if="reveal == 2" style="color:white !important;"  :loading="loading" 
                              @click.prevent="paynow()" rounded   size="x-large"
                                  color="blue-darken-4" type="submit" class="tw-mt-4 mb-0 
                                  font-weight-bold text-capitalize mx-auto ">
                                   pay now
                              </v-btn>
                          </div>

                    </v-row>
                </div>


      </div>
    </row>

        
   </div>
  
</v-container>

  </div>
  <Footer />
     </v-card>

</template>
<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import {useFlutterwave} from "flutterwave-vue3"

export default {
  setup () {
    const toast = (message) => {
        createToast(message)
    }
    return { toast }
  },

  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      myCategoryTabsValue: ['All','T-Shirts','Shorts','Hoodie','Joggers'],
      selecteditemsToD:[],
      activeCategory: 'All',
      discountPrice: 0,
      email:'',
      text: '',
      id: '',
      phone: "",
      address: "",
      order_ID:'',
      consent: true,
      isVisible: true,
      loading: false,
      reveal: false,

      isopen:false,
    };
  },


  mounted(){

    if(!this.$store.state.cartItems.length){
         this.$router.push('/shop')
        //  console.log('done')
       }

    
  },

  methods:{
    
   


    setActiveCategory(tab) {
      this.selecteditemsToD = this.$store.state.shop_items.list.filter((item) =>  item.category.includes(tab))
     
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
              "Accept": "application/json",
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
              this.loading = false;
              this.user = res.success.msg
                this.email =  this.user.email
                 this.phone =  this.user.phone
                 this.name =  this.user.name
              this.reveal = 2
            })
            .catch(() => {

              this.dialog = true;
              this.loading = false;
            });
        }
      },


      async verify_trans(transaction_reference){
        // console.log(transaction_reference)
        try{
            const data = await fetch(`https://backend.unboxedparty.com/api/order/verify?reference=${transaction_reference}`,{
              method:"GET",
              headers:{
                'Content-Type': 'application/json',
              }
            }) .then(resp=>resp.json())

            if(data.success) this.toast("Transaction successfully, we will get back to you")
            this.$store.state.cartItems = []
            this.$router.push('/shop')

        }catch(e){
           this.toast(e)
        }
          
      },


      async addOrder(){

        const cart_items ={
          user_id:this.user.id,
          total_amount:this.totalPrice,
          cart_items:JSON.stringify(this.cartitems)
        }

        try{
          const data = await fetch('https://backend.unboxedparty.com/api/order',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(cart_items)
          }).then(resp=>resp.json())

        // if(data.success) this.toast('Order placed Successfully')

        localStorage.setItem("order_id", data.order_id)

        }catch(e){
          this.toast(e)
        }
      },


    paynow(){

      this.loading = true
      if(!this.totalPrice){
        this.loading = true
        return
      }

      this.addOrder()
      const order_id = localStorage.getItem("order_id");
        
      var random = Math.random().toString(36).slice(2, 8);

    var data = {email: this.email, id: this.user.id, name: this.name, phone_number: this.phone}
    // //this will launch Fluterwave payment modal
    // if (!this.totalPrice) return;


   const modal = useFlutterwave({
    // amount: 200,//amount
    amount: this.totalPrice, //amount
    currency: "NGN",


    callback: (e)=>{
      // console.log(e)
      const transaction_reference = e.transaction_id;
      this.verify_trans(transaction_reference)
      modal.close();
    },


    // country: "NG",
    onclose: ()=>{
      this.loading = false
      // alert('Are you having issues with your payment? kindly contact us on 09012770000')
    },
    
    public_key: "FLWPUBK-7efa3db90b59bb99bd153e108da68608-X",
    
    // public_key: "FLWPUBK_TEST-dc78942734a59f37eb0cd2f432ecf155-X",
    // redirect_url: undefined,
    
    tx_ref: `${this.phone}_${random}_${+ new Date()}`,

    payment_options:  "card, banktransfer, ussd",
    bank_transfer_options: {
      expires: 3600
    },

    meta: {
      consumer_mac: order_id,
    },
    
    customer: data,
    customizations: {logo: "https://res.cloudinary.com/dnqw7x4bp/image/upload/c_fit,w_200/v1582290476/e_dey_e_only_2.png", title: "E Dey App"},
  })


  this.cartItems = []

},

    async checkemail() {
        this.booked = false;
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
                this.reveal = 1
              }else{
                this.user = res.success.msg
                this.email =  this.user.email
                 this.phone =  this.user.phone
                 this.name =  this.user.name
                this.reveal = 2

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

  },

  computed:{
   

      items () {
      return  this.$store.state.shop_items.list
    },
    subtotalPrice() {
        return this.$store.state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    },
    totalPrice(){
      return parseFloat(this.subtotalPrice - this.discountPrice)

    },
    cartitems(){
        return this.$store.state.cartItems
      
    },

  }
}


</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,200&display=swap");

.em .v-input__control{
    box-shadow:none!important
}
.v-text-field .v-input__control{
    box-shadow:none!important
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
.herotitleb {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  
  align-items: center;

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
  .bigtext {
    font-size: 40px !important;
    line-height: 50px !important;
    text-align: center;
  }
  .herotitleb {
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
    line-height: 46px !important;
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