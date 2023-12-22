<template>
       <v-container :class="$vuetify.display.smAndDown ?'px-2':''">
          <v-row
            no-gutters
            class="d-flex py-0 justify-space-between align-center"
            style="height: "
          >
          <v-img eager @click="$router.push('/')" width="auto" max-width="200" 
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
            
             <!-- <v-btn  href="#" class="rounded-xl text-capitalize font-weight-bold mx-3" value="justify">
                   <cart>
                      <slot></slot>
                   </cart>
              </v-btn> -->
              <!-- <v-btn value="DJ_mix"  to="/DJ_mix" class="rounded-xl mx-3  text-capitalize font-weight-bold">
                  <span > DJ_Mix </span>
              </v-btn> -->

              <drawer>
                <slot></slot>

              </drawer>


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

          </v-row>
        </v-container>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@media only screen and (max-width: 768px) {
  
    .logoTexta {
      font-size: 23px !important;
      line-height: 30px !important;
    }
  }
</style>