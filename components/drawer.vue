<template>

     <div  @click="toggleDrawer" class="tw-w-full  tw-duration-300 tw-transform tw-overflow-y-auto  tw-lg:translate-x-0 tw-fixed tw-left-0 tw-top-0 
     tw-z-40" :class="{ 'tw--translate-x-full': !open }">
       <aside style="background: rgba(14, 4, 39, 0.6); backdrop-filter: blur(15px) !important;-webkit-backdrop-filter: blur(15px) !important;"   class="lg:tw-hidden  tw-inset-y-0  z-40  tw-flex tw-flex-col tw-h-screen tw-transition-all tw-z-50  tw-w-[65%] 
       tw-duration-300 tw-transform  tw-overflow-y-auto tw-lg:translate-x-0" :class="{ 'tw--translate-x-full': !open }">
   
              <div class=" tw-p-4 tw-flex tw-justify-start tw-items-start">
   
                   <v-img eager @click="$router.push('/')" width="auto" max-width="200" 
                   src="https://res.cloudinary.com/crushcontest-com/image/upload/v1684055372/Unboxed_Web_rggvdz.png">
                   </v-img>
   
              </div>
   
               <div  class="tw-flex tw-flex-col tw-justify-center ">
                
                 <a  @click.prevent="navigateTo('/ticket/list')" class=" tw-p-5 tw-capitalize tw hover:tw-bg-[#1d133687]  tw-font-bold" value="left">
                   Tickets
                 </a>
                   <a value="shop"  @click.prevent="navigateTo('/shop')" class="tw-p-5   text-capitalize hover:tw-bg-[#1d133687] font-weight-bold">
                     <span style="font-family: Permanent Marker !important;font-size: 20px;"> Shop! </span>
                   </a>
                   <a  @click.prevent="navigateTo('/events')" class=" tw-p-5 tw-capitalize tw hover:tw-bg-[#1d133687]  tw-font-bold" value="left">
                     Events
                   </a>
   
                   <a  @click.prevent="navigateTo('/about')" class="tw-p-5 text-capitalize hover:tw-bg-[#1d133687] font-weight-bold" value="center">
                     About us
                   </a>
   
                   <a  @click.prevent="navigateTo('/articles')" class="tw-p-5 text-capitalize hover:tw-bg-[#1d133687]  font-weight-bold" value="right">
                     Quick Reads
                   </a>
                   <!-- <a  @click.prevent="navigateTo('/questionaire')" class="tw-p-5 text-capitalize hover:tw-bg-[#1d133687]  font-weight-bold" value="right">
                     Survey
                   </a> -->
   
                   <a  href="#contact" class="tw-p-5  text-capitalize hover:tw-bg-[#1d133687]  font-weight-bold" value="justify">
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
                     
                     
                       <div class="tw-bg-[#0c0c0c] tw-w-full tw-flex tw-justify-center  tw-items-center tw-p-4 tw-border-t tw-border-gray-700">
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
                           href="https://twitter.com/theunboxedparty" target="blank"
                           ><v-icon icon="mdi:mdi-twitter"
                           /></v-btn>
   
                           <v-btn icon class="mr-4" variant="outlined" size="x-small"
                           href="https://www.tiktok.com/@the_unboxedparty" target="blank"
                           ><v-icon icon="mdi:mdi-music-note"
                           /></v-btn>
                           <v-btn icon class="mr-4" variant="outlined" size="x-small"
                           href="https://www.youtube.com/@unboxedparty" target="blank"
                           ><v-icon icon="mdi:mdi-youtube" 
                           /></v-btn>
                       </div>
   
                   </div>
   
   
       </aside>
     </div>

     <button @click="toggleDrawer" style="z-index: 999px;" class=" tw-fixed tw-right-4 lg:tw-hidden tw-z-50 tw-text-xl tw-bg-[#151515]  
     tw-rounded-full tw-p-2 tw-transition tw-ease-in-out">
      <svg v-if="!open" class="menu-icon close tw-w-10 tw-h-10 tw-transition-all tw-duration-500 tw-ease-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" 
        clip-rule="evenodd"></path></svg>
      
        <svg v-else class="menu-icon open tw-w-10 tw-h-10 tw-transition-all tw-duration-500 tw-ease-out" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>


        <!-- <svg v-if="!open"  class="menu-icon close" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>

        <svg v-else class="menu-icon open" viewBox="0 0 24 24">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg> -->
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


<style>

.menu-icon {
 
  stroke-width: 2;
  transition: transform 0.3s ease;
  cursor: pointer;
}


</style>