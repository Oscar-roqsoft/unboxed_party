<template>

    <aside class="lg:tw-hidden tw-fixed tw-inset-y-0 tw-left-0 z-40  tw-flex tw-flex-col tw-h-screen tw-transition-all tw-z-50  
    tw-duration-300 tw-transform 
       tw-bg-[#282828] tw-overflow-y-auto tw-lg:translate-x-0" :class="{ 'tw--translate-x-full': !open }">

           <div class="tw-border-b tw-border-gray-700 tw-p-4">
                <v-img eager @click="$router.push('/')" width="auto" max-width="200" 
                src="https://res.cloudinary.com/crushcontest-com/image/upload/v1684055372/Unboxed_Web_rggvdz.png">
                </v-img>
           </div>

            <div class="tw-flex tw-flex-col tw-justify-center  tw-border-b tw-border-gray-700  ">
             
                <a value="shop"  @click.prevent="navigateTo('/shop')" class="tw-p-6   text-capitalize hover:tw-bg-[#393939]  font-weight-bold">
                  <span style="font-family: Permanent Marker !important;font-size: 20px;"> Shop! </span>
                </a>
                <a  @click.prevent="navigateTo('/events')" class=" tw-p-6 tw-capitalize tw hover:tw-bg-[#393939]  tw-font-bold" value="left">
                  Events
                </a>

                <a  @click.prevent="navigateTo('/about')" class="tw-p-6 text-capitalize hover:tw-bg-[#393939] font-weight-bold" value="center">
                  About us
                </a>

                <a  @click.prevent="navigateTo('/articles')" class="tw-p-6 text-capitalize hover:tw-bg-[#393939]  font-weight-bold" value="right">
                  Quick Reads
                </a>

                <a  href="#contact" class="tw-p-6  text-capitalize hover:tw-bg-[#393939]  font-weight-bold" value="justify">
                  Contact Us
                </a>
               

            <!-- <a  href="/back_to_school" class="rounded-xl text-yellow text-capitalize font-weight-bold" value="justify">
                  <span style="font-family: Permanent Marker !important;font-size: 20px;"> Back to school! </span>
                </a> -->
              
            </div>

                <a
                  class="font-weight-bold text-capitalize tw-rounded  tw-text-center tw-p-4 "
                  style="
                    background: linear-gradient(
                      132.03deg,
                      #c471ed 14.22%,
                      #a044ff 97.95%
                    );
                  "
                  @click.prevent="navigateTo('/reserve')"
                  color="green"
                  >
                  Register
                </a>

                <div class="  tw-h-full   tw-flex tw-flex-col tw-justify-end ">
                   

                    <div class="tw-bg-[#232220] tw-p-4 tw-border-t tw-border-gray-700">
                        <v-btn
                        target="_blank"
                        href="https://www.instagram.com/the_unboxedparty/"
                        size="x-small"
                        icon
                        class="mr-4"
                        variant="outlined"
                        ><v-icon icon="mdi:mdi-instagram"
                        /></v-btn>

                        <v-btn icon class="mr-4" variant="outlined" size="x-small"
                        href="https://twitter.com/theunboxedparty"
                        ><v-icon icon="mdi:mdi-twitter"
                        /></v-btn>

                        <v-btn icon class="mr-4" variant="outlined" size="x-small"
                        href="https://www.tiktok.com/@the_unboxedparty"
                        ><v-icon icon="mdi:mdi-music-note"
                        /></v-btn>
                        <v-btn icon class="mr-4" variant="outlined" size="x-small"
                        href="https://www.youtube.com/@unboxedparty"
                        ><v-icon icon="mdi:mdi-youtube" 
                        /></v-btn>
                    </div>

                </div>


    </aside>

   <button @click="open = !open" class=" lg:tw-hidden tw-text-xl hover:tw-bg-[#151515]  tw-rounded-full tw-p-2 tw-transition tw-ease-in-out">
    <svg class="tw-w-10 tw-h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
   </button>

</template>


<script>
  export default {
    data () {
      return {
        drawer: null,
        open: false,
      }
    },
    
  }
</script>