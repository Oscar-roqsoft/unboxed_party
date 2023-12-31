<template>
    <div style="z-index: 99 !important;">
      <span @click.prevent="navigateTo('/shop/cartItems')" class="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" 
            d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1
             1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 
             0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 
             1.5a1.5 1.5 0 0 0-1.5-1.5Z"/></svg>
        <span >{{ $store.state.cartItems.length }}</span>
      </span>

        <!-- <div v-if="showModal" class="modal-wrapper active overflow-y-scrol tw-z-[99999px]">
            <div class="modal-content tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-3 tw-overflow-y-scroll tw-mt-12 
            tw-mx-2 md:tw-mx-0 md:tw-mt-0 tw-z-[99999px]" >
                <button @click="showModal = false" class="modal-close-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="#ffff" d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21L3 16.74m9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42L12 13.41Z"/></svg>
                </button>
                

                <Product class="md:tw-col-span-2 ">
                    <slot></slot>
                </Product>

                


                <div class=" tw-bg-gradient-to-t tw-mt-4 tw-opacity-70  tw-shadow tw-rounded-md tw-min-h-[300px]  md:tw-h-[520px] tw-overflow-y-scroll tw-p-4">
                  <h5 class="tw-py-2 tw-pb-4 tw-border-b tw-border-gray-700  tw-text-white tw-text-center tw-rounded-t tw-capitalize tw-text-xl">Payment Info</h5>
                  <br><hr class=" tw-text-xs"><br>
                   
                  <div class="tw-flex tw-justify-end tw-items-center  tw-mt-4 tw-w-full">
                      <div class="tw-w-full">
                        <div class="tw-flex tw-justify-between tw-py-4">
                          <span>Substotal:</span>
                          <span>#{{ subtotalPrice }}</span>
                           <v-money>${{ totalPrice}}</v-money> 
                        </div>

                        <div class="tw-flex tw-justify-between tw-pb-4">
                          <span class="tw-capitalize">Delivery fee:</span>
                          <span>#0.00</span>
                        </div>
                        <hr>
                        <div class="tw-flex tw-justify-between tw-py-4">
                          <span class="tw-capitalize">total:</span>
                          <span>#{{ totalPrice }}</span>
                        </div>
                      </div>
                  </div>

                  <v-btn  :loading="loading" @click.prevent="paynow"  block  size="large"
                      color="blue-darken-4" type="submit" class="tw-mt-4 tw-bg-blue-800 mb-0 tw-rounded font-weight-bold text-capitalize mx-auto ">
                      Pay now
                  </v-btn>

                </div>

            </div>
        </div> -->
    
    </div>
</template>
  
  <script>
  import {useFlutterwave} from "flutterwave-vue3"
  export default {
    data() {
      return {
        email: "", // Customer email
        text: '',
        id: '',
        phone: "",
        showModal: false,
      };
    },

    computed:{
      cartitems(){
        return this.$store.state.cartItems
      },
      subtotalPrice() {
        return this.$store.state.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );

    },

    totalPrice(){
      return this.subtotalPrice

    }

  },

  methods:{
      paynow(){
     this.loading = true

    var random = Math.random().toString(36).slice(2, 8);

    var datas ={email: this.email, id: this.user.id, name: this.name, phone_number: this.phone}
    //this will launch Fluterwave payment modal
    if (this.totalPrice == 0) return this.loading = false

  
   const modal = useFlutterwave({
    // amount: 200,//amount

    amount: this.totalPrice,//amount
    callback: (e)=>{
      console.log(e)
     this.verify_trans(e)
      modal.close();
    },
    country: "NG",
    currency: "NGN",
    customer: datas,
    customizations: {logo: "https://res.cloudinary.com/dnqw7x4bp/image/upload/c_fit,w_200/v1582290476/e_dey_e_only_2.png", title: "E Dey App"},
    onclose: ()=>{
      this.loading = false
  // alert('Are you having issues with your payment? kindly contact us on 09012770000')
    },
    payment_options:  "card, banktransfer, ussd",
    bank_transfer_options: {
      expires: 3600
    },
    meta: {
      // qty: this.qty, 
      amount: this.totalPrice
    },
    public_key: "FLWPUBK-7efa3db90b59bb99bd153e108da68608-X",
    // redirect_url: undefined,
    tx_ref: this.phone+'-'+random+'-'+this.email
  })

  }
      },
  };

  </script>
  

<style scoped>
.cart-icon {
    position: relative;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cart-icon span {
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  left: 18px;
  margin-left: 5px;
  font-size: 12px;
  color: #fff;
   background-color: #ff4757;
   width: 19px;
   height: 19px;
   border-radius: 100%;
}



@media screen and (max-width: 768px) {
  .cart-icon {
    font-size: 20px;
  }
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  overflow-y: scroll;
}

.modal-content {
  width: 80vw;
  height: 80vh;
  background-color:  rgba(11, 9, 9, 0.9);
  border-radius: 5px;
  padding: 20px;
  overflow-y: scroll;
  z-index: 999999999999;
}

.modal-close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  /* background-color: red; */
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.modal-close-button i {
  padding: 5px;
}


@media screen and (max-width: 768px) {
  .modal-content {
    width: 100vw;
    height: 90vh;
  }
}



.modal-wrapper {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.modal-wrapper.active {
  opacity: 1;
}
</style>