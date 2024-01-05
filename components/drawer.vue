<template>

     <div @click="toggleDrawer" class="tw-w-full  tw-duration-300 tw-transform tw-overflow-y-auto  tw-lg:translate-x-0 tw-fixed tw-left-0 tw-top-0 
     tw-z-40" :class="{ 'tw--translate-x-full': !open }">
       <aside   class="lg:tw-hidden  tw-inset-y-0  z-40  tw-flex tw-flex-col tw-h-screen tw-transition-all tw-z-50  tw-w-[65%] 
       tw-duration-300 tw-transform tw-bg-[#282828] tw-overflow-y-auto tw-lg:translate-x-0" :class="{ 'tw--translate-x-full': !open }">
   
              <div class="tw-border-b tw-border-gray-700 tw-p-4 tw-flex tw-justify-center tw-items-center">
   
                   <v-img eager @click="$router.push('/')" width="auto" max-width="200" 
                   src="https://res.cloudinary.com/crushcontest-com/image/upload/v1684055372/Unboxed_Web_rggvdz.png">
                   </v-img>
   
              </div>
   
               <div class="tw-flex tw-flex-col tw-justify-center  tw-border-b tw-border-gray-700  ">
                
                 <a  @click.prevent="navigateTo('/ticket/list')" class=" tw-p-5 tw-capitalize tw hover:tw-bg-[#393939]  tw-font-bold" value="left">
                   Tickets
                 </a>
                   <a value="shop"  @click.prevent="navigateTo('/shop')" class="tw-p-5   text-capitalize hover:tw-bg-[#393939]  font-weight-bold">
                     <span style="font-family: Permanent Marker !important;font-size: 20px;"> Shop! </span>
                   </a>
                   <a  @click.prevent="navigateTo('/events')" class=" tw-p-5 tw-capitalize tw hover:tw-bg-[#393939]  tw-font-bold" value="left">
                     Events
                   </a>
   
                   <a  @click.prevent="navigateTo('/about')" class="tw-p-5 text-capitalize hover:tw-bg-[#393939] font-weight-bold" value="center">
                     About us
                   </a>
   
                   <a  @click.prevent="navigateTo('/articles')" class="tw-p-5 text-capitalize hover:tw-bg-[#393939]  font-weight-bold" value="right">
                     Quick Reads
                   </a>
   
                   <a  href="#contact" class="tw-p-5  text-capitalize hover:tw-bg-[#393939]  font-weight-bold" value="justify">
                     Contact Us
                   </a>
                  
   
               <!-- <a  href="/back_to_school" class="rounded-xl text-yellow text-capitalize font-weight-bold" value="justify">
                     <span style="font-family: Permanent Marker !important;font-size: 20px;"> Back to school! </span>
                   </a> -->
                   <a
               class="font-weight-bold rounded-xl mx-4 my-4 tw-text-center tw-p-4 "
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
               </div>
   
               <!-- <a href="#" target="blank" 
                   class="tw-inline-flex tw-relative tw-items-center tw-justify-center tw-px-4 tw-py-4 tw-bg-gradient-to-tr tw-from-yellow-400 tw-via-yellow-500
                     tw-to-yellow-500 tw-text-white tw-font-bold tw-hover:bg-blue-600 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-blue-300">
                     
                     Scanner
                     <svg class="tw-ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.75 1a.75.75 0 0 0 0 1.5h1.69L8.22 6.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V1zM2.5 4v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8.75a.75.75 0 0 1 1.5 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H3a.5.5 0 0 0-.5.5" clip-rule="evenodd"/></svg>
                   
                 </a> -->
   
               
               
             
   
   
   
                  
   
   
                   
                   <div class="  tw-flex tw-flex-col tw-justify-end tw-h-full">
                     
                     
                       <div class="tw-bg-[#232220] tw-w-full tw-flex tw-justify-center  tw-items-center tw-p-4 tw-border-t tw-border-gray-700">
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
     </div>

     <button @click="toggleDrawer" style="z-index: 999px;" class=" tw-fixed tw-right-4 lg:tw-hidden tw-z-50 tw-text-xl tw-bg-[#151515]  
     tw-rounded-full tw-p-2 tw-transition tw-ease-in-out">
      <svg class="tw-w-10 tw-h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
     </button>


</template>


<script>
  export default {
   
    emits: ['toggle-drawer'],

    data () {
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