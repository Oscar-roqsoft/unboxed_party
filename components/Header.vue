<template>
       <v-container :class="$vuetify.display.smAndDown ?'px-2':''">
          <v-row
            no-gutters
            class="d-flex py-0 justify-space-between align-center"
            style="height: "
          >
          <v-img eager @click="$router.push('/')" width="auto" max-width="200"  style="cursor: pointer;"
          src="https://res.cloudinary.com/crushcontest-com/image/upload/v1684055372/Unboxed_Web_rggvdz.png">
        </v-img>
            <v-col
              v-if="$vuetify.display.mdAndUp"
              class="d-flex align-center justify-center"
              cols="" >
              <v-btn-toggle
                rounded="0"
                text
                color="deep-purple-accent-3"
                group theme="dark" variant="text">
             
                <v-btn value="shop"  to="/shop" class="rounded-xl  text-capitalize font-weight-bold">
                  <span style="font-family: Permanent Marker !important;font-size: 20px;"> Shop! </span>
                </v-btn>
                <v-btn  to="/events" class=" rounded-xl text-capitalize font-weight-bold" value="left">
                  Events
                </v-btn>

                <v-btn to="/about" class="rounded-xl text-capitalize font-weight-bold" value="center">
                  About us
                </v-btn>

                <v-btn  to="/articles" class="rounded-xl text-capitalize font-weight-bold" value="right">
                  Quick Reads
                </v-btn>

                <v-btn  href="#contact" class="rounded-xl text-capitalize font-weight-bold" value="justify">
                  Contact Us
                </v-btn>
               

                <!-- <v-btn  href="/back_to_school" class="rounded-xl text-yellow text-capitalize font-weight-bold" value="justify">
                  <span style="font-family: Permanent Marker !important;font-size: 20px;"> Back to school! </span>
                </v-btn> -->
              </v-btn-toggle>
            </v-col>

             <div class="tw-flex tw-items-center">

               <v-btn  style="z-index: 99 !important;" v-if="$store.state.cartItems.length"  href="#"  
               class="rounded-xl text-capitalize  font-weight-bold  tw-mr-20 md:tw-mr-3" value="justify">
                     <cart>
                        <slot></slot>
                     </cart>
                </v-btn>
 
                <drawer >
                  
                 <slot></slot>
                 
               </drawer>

               
             </div>
              
              <div class="tw-hidden lg:tw-block">
  
                <v-btn
                  class="font-weight-bold text-capitalize tw-hidden md:tw-block"
                  rounded
                  outline
                  style="
                    background: linear-gradient(
                      132.03deg,
                      #c471ed 14.22%,
                      #a044ff 97.95%
                      );
                  "
                  to="/reserve"
                  color="green"
                  >Register</v-btn
                  >
              </div>

              
            <!-- <v-btn value="DJ_mix"  to="/DJ_mix" class="rounded-xl mx-3  text-capitalize font-weight-bold">
              <span > DJ_Mix </span>
            </v-btn> -->
            
           


              <!-- <div class="tw-hidden lg:tw-block">
                
                <a href="#" target="blank" class="tw-inline-flex tw-relative tw-items-center tw-justify-center tw-px-4 
                tw-py-1.5 tw-bg-gradient-to-tr tw-from-yellow-400 tw-via-yellow-500 tw-rounded-full tw-mr-2
                tw-to-yellow-500 tw-text-white tw-font-bold tw-hover:bg-blue-600 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-blue-300">
                Scanner
                 <svg class="tw-ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.75 1a.75.75 0 0 0 0 1.5h1.69L8.22 6.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V1zM2.5 4v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8.75a.75.75 0 0 1 1.5 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H3a.5.5 0 0 0-.5.5" clip-rule="evenodd"/></svg>
                 
                </a>
                
                
              </div> -->
              
              
              
              <!-- <div class="tw-hidden lg:tw-block">
                <v-btn
                  class="font-weight-bold text-capitalize tw-hidden md:tw-block ml-2"
                  rounded
                  outline
                  style="
                    background: linear-gradient(
                      132.03deg,
                      #c471ed 14.22%,
                      #a044ff 97.95%
                      );
                      "
                      to="/"
                      color="green"
                      >scanner</v-btn
                      >
                    </div> -->
                    

          </v-row>
        </v-container>
</template>

<script>
 export default {


    data(){

      return {
        drawer: null,
        open: false,
      }

    },

    methods:{
      toggleDrawer(){
        this.open = !this.open
      }
    }
    
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@media only screen and (max-width: 768px) {
  
    .logoTexta {
      font-size: 23px !important;
      line-height: 30px !important;
    }
  }

</style>