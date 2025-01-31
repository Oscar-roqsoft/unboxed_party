<template>


    <div class="">
        <v-container >

            <div class="tw-flex tw-justify-between md:tw-max-w-[800px] mx-auto">

              <Backbutton/>

                    
            <div >
                      
                      <a 
                      :href="`https://scanner.unboxedparty.com/${eventId}`" 
                      target="_blank" class="tw-inline-flex tw-relative tw-items-center tw-justify-center tw-px-4 
                      tw-py-1.5 tw-bg-gradient-to-tr tw-from-yellow-400 tw-via-yellow-500 tw-rounded-full tw-mr-2
                      tw-to-yellow-500 tw-text-white tw-font-bold tw-hover:bg-blue-600 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-blue-300">
                      Scanner
                      <svg class="tw-ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.75 1a.75.75 0 0 0 0 1.5h1.69L8.22 6.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V1zM2.5 4v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8.75a.75.75 0 0 1 1.5 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H3a.5.5 0 0 0-.5.5" clip-rule="evenodd"/></svg>
          
                      </a>

                      
          </div>
          </div>

        </v-container>

        <v-container>
          <h1 class="tw-text-center tw-font-bold  pa-3  text-capitalize tw-text-2xl md:tw-max-w-[800px] mx-auto">Edit Event</h1>
          <v-card class="pa-4 md:tw-max-w-[800px] mx-auto" style="background: #22222261;">
            <v-form>
                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.name"
                label="Name"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.caption"
                label="caption"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.venue"
                label="venue"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.time"
                label="time"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.date"
                label="date"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="event.video"
                label="Video link"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-textarea
                class="mb-2 rounded-xl"
                v-model="event.description"
                label="description"
                persistent-hint
                density="compact"
                variant="solo"
                ></v-textarea>

      
              <v-card-text>
                <v-file-input
                  accept="image/*"
                  label="Event Image"
                  v-model="image"
                  @input="handleImageUpload($event)"
                  prepend-icon="mdi-image"
                />
                <v-img  :src="event.image" width="150" max-height="150"  />
              </v-card-text>

              <v-col>
                  <v-col>
                    
                      <v-checkbox
                          v-model="on_salecheck"
                          label="Is ticket on sale"
                          color="primary"
                          class="mx-4"
                          >
        
                          <div class="">{{ on_salecheck }}</div>
                      </v-checkbox>


                      <v-checkbox
                          v-model="activecheck"
                          label="Is event active"
                          color="primary"
                          class="mx-4"
                          >
        
                          <div class="">{{ activecheck }}</div>
                      </v-checkbox>
                  </v-col>

                  <h3 class="text-h6 tw-mb-3  tw-mt-10 tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> Create ticket price lists</h3>
                  
                  <v-col>
                      <v-row class="px-3">
                          
                          <v-text-field
                          class="mb-2 rounded-xl"
                          v-model="ticketName"
                          label="ticket name"
                          persistent-hint
                          variant="solo"
                          ></v-text-field>
        
                          <v-text-field
                          class="mb-2 tw-ml-1 rounded-xl"
                          v-model="ticketValue"
                          label="ticket value"
                          persistent-hint
                          variant="solo"
                          ></v-text-field>
                       
                      </v-row>
    
                      <v-btn @click.prevent="addTicketType" class="mb-2">add ticket</v-btn>
                  </v-col>
                 

                  <v-list class="pa-2 tw-mb-6 rounded tw-min-h-20">
                     <span class="border-b tw-py-2" color="primary ">list of added ticket price details</span>
                     <div v-if="ticketList" v-for="(i,index) in ticketList">
                        <v-col>
                            <v-row class="border-b tw-py-4 tw-flex tw-justify-between tw-text-gray-500">

                                    <div class=" tw-drop-shadow-xl">
                                        <span>name: {{ i.name }}</span>
                                        <span class="mx-4">price: {{ i.value }}</span>
                                    </div>

                                    <v-btn size="small" color="" href="#" @click.prevent="deleteItem(i.name)" 
                                         class="font-medium text-blue-600 dark:text-blue-500 hover:underline tw-flex tw-justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
                                            <path fill="red" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
                                            0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 
                                            111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 
                                            32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"/>
                                        </svg>
                                    </v-btn>

                            </v-row>
                        </v-col>
                     </div>
                  </v-list>
              </v-col>
              
              <span class="tw-text-red-500" v-if="message.length">{{ message }}*</span>
              <v-btn :loading="loading"  @click.prevent="EditEvent"  class="d-flex justify-content-center ma-4" size="x-large"  color="blue-darken-4">
            confirm</v-btn>

            </v-form>
          </v-card>
        </v-container>
    </div>


</template>



  
  <script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
  import { useStore } from '~~/store';
  const store = useStore();
  import {handleFileChange,uploadToCloudinary,asyncRequest} from "@/composables/mixins"
  export default {
    setup () {
    const toast = (message) => {
        createToast(message)
    }
    return { toast }
  },
    data() {
      return {
        event:[],
        image:[],
          
          ticketName:[],
          ticketValue:[],
          ticketList:[], 

          selectedimage:null,
          message:'',
          itemm:'sucess',

          messageBoxContent:'',

          loading:false,
          showToast: false,

          activecheck:null,
          on_salecheck:null,

      };
    },

 


    mounted() {
        var name = decodeURIComponent(this.$route.params.id)
        
        this.event = this.events.find(el=>{
            return el.id == name
        })
      

        if(this.event.active == "0"){
          this.activecheck = false
        }else{
          this.activecheck =  true
        }

        if(this.event.on_sale == "0"){
          this.on_salecheck = false
        }else{
          this.on_salecheck =  true
        }
        // this.ticketName = JSON.parse(this.event.tickets).name
        this.ticketList = JSON.parse(this.event.tickets)
        // console.log(this.ticketList)
        
        setTimeout(() => {
            this.dialog = true;
        }, 10000);
    },
   


    methods: {
    

        addTicketType(){
            const tic = {name:this.ticketName,value:this.ticketValue}
            this.ticketList.push(tic)
            this.ticketList.reverse(this.ticketList)
            this.ticketName = null
            this.ticketValue= null
        },

        async handleImageUpload(event){
            const file = event.target.files[0];
            if(!file) return;
            this.selectedimage = file

           

        },

        deleteItem(itemName) {
            const itemIndex = this.ticketList.findIndex((item) => item.name === itemName);
            if (itemIndex >= 0) {
            this.ticketList.splice(itemIndex, 1);
           }
        },



        

       async EditEvent() {
        this.loading = true
        // const img = ''
        // if(!(this.selectedimage === null)){
        //   return img = await uploadToCloudinary(this.selectedimage);
        // }
        const {secure_url} = await uploadToCloudinary(this.selectedimage);

        
        const event ={
            id:this.event.id,
            name: this.event.name,
            caption:this.event.caption,
            description: this.event.description,
            venue:this.event.venue,
            date:this.event.date,
            time:this.event.time,
            on_sale:this.on_salecheck,
            active:this.activecheck,
            video:this.event.video,
            tickets:JSON.stringify(this.ticketList),
            image: secure_url ? secure_url : this.event.image,
        }

        // console.log(event)
       

        try{
            const data = await fetch(`https://backend.unboxedparty.com/api/event`,{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                  'Authorization': `Bearer ${store.state.token}`
                },
                body:JSON.stringify(event)
            }).then(res=>res.json())

            if(data.success) this.toast('Event edited successfully');



            this.loading =false

            // console.log(data)

            navigateTo('/admin_slym/events')

        }catch(e){
          //  console.log(e)
           this.toast("message status:  failed to update Event")
           
        }

      },
    },


    computed: {
      
      eventId(){
        return this.$router.currentRoute.value.params.id;
      },
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

      events () {
      return this.$store.state.myevents.list

      },

    },

  };
  </script>

  <style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

* {
  font-family: "Permanent Marker", cursive !important;
}
</style>
