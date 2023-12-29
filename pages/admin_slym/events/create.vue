<template>
    <div>

        <v-container>
            <Backbutton class=" md:tw-max-w-[800px] mx-auto"/>
        </v-container>

        <v-container >
          <h1 class="tw-text-center tw-font-bold  pa-3  text-capitalize tw-text-2xl ">Create Event</h1>
           <v-card class="pa-4" style="background: #22222261;">
            <v-form >
                <v-text-field
                class="mb-2 rounded-xl"
                v-model="name"
                label="Name"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="caption"
                label="caption"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="venue"
                label="venue"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="time"
                label="time"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="date"
                label="date"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-text-field
                class="mb-2 rounded-xl"
                v-model="video"
                label="Video link"
                persistent-hint
                variant="solo"
                ></v-text-field>

                <v-textarea
                class="mb-2 rounded-xl"
                v-model="desc"
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
                <!-- <v-img  :src="imageUrl" max-width="200" max-height="200" v-if="imageUrl" /> -->
              </v-card-text>

              <v-col>
                <v-col>
                    
                    <v-checkbox
                        v-model="isActiveChecked"
                        label="isActive"
                        color="primary"
                        class="mx-4"
                        >
      
                        <div class="">{{ isActiveChecked }}</div>
                    </v-checkbox>


                    <v-checkbox
                        v-model="isOnSaleChecked"
                        label="is_On_Sale"
                        color="primary"
                        class="mx-4"
                        >
      
                        <div class="">{{ isOnSaleChecked }}</div>
                    </v-checkbox>
                </v-col>

                  <h3 class="text-h6 tw-mb-6 tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> Create ticket price lists</h3>
                  
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
                 

                  <v-list class="pa-2 roounded tw-min-h-20">
                     <v-list-item-title class="border-b" color="primary ">list of added ticket price details</v-list-item-title>
                     <div v-for="(i,index) in ticketList" :key="i.name">
                        <v-col>
                            <v-row class="border-b tw-py-2">
                                <span>name: {{ i.name }}</span>
                                <span class="mx-4">value: {{ i.value }}</span>

                                <a href="#" @click.prevent="deleteItem(i.name)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
                                        <path fill="red" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
                                        0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 
                                        111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 
                                        32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"/>
                                    </svg>
                                </a>
                            </v-row>
                        </v-col>
                     </div>
                  </v-list>


              </v-col>
              
              <span class="tw-text-red-500" v-if="message.length">{{ message }}*</span>
              <v-btn :loading="loading"  @click.prevent="createEvent"  class="d-flex justify-content-center ma-4" size="x-large"  color="blue-darken-4">Create</v-btn>

            </v-form>
          </v-card>
        </v-container>
    </div>

</template>
  
  <script>
  import { createToast } from 'mosha-vue-toastify'
  import 'mosha-vue-toastify/dist/style.css'
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
          name: "",
          caption:"",
          desc: "",
          date: null,
          time: null,
          venue: '',
          image: '',
          video:'', 
          isOnSaleChecked: false,
          isActiveChecked:false,
          
          eventImage: null, // File object for uploaded image
          imageUrl: null, // URL for previewing uploaded image
          ticketName:null,
          ticketValue:null,
          ticketList:[], 

          loading:false,

          selectedimage:null,
          message:'',
      };
    },



   


    methods: {
        addTicketType(){
            const tic = {name:this.ticketName,value:this.ticketValue}
            this.ticketList.push(tic)
            this.ticketList.reverse(this.ticketList)
            this.ticketName = null
            this.ticketValue= null
        },

        deleteItem(itemId) {
            const itemIndex = this.ticketList.findIndex((item) => item.name === itemId);
            if (itemIndex >= 0) {
            this.ticketList.splice(itemIndex, 1);
            
           }
    
        },

        async handleImageUpload(event){
            const file = event.target.files[0];
            if(!file) return;
            this.selectedimage = file

           

        },

       async createEvent() {

        if(!this.name) return this.message = 'enter event name'
        if(!this.caption) return this.message = 'enter event caption'
        if(!this.venue) return this.message = 'enter event venue'
        if(!this.time) return this.message = 'enter event time'
        if(!this.date) return this.message = 'enter event date'
        // if(!this.video) return this.message = 'enter event video'
        if(!this.desc) return this.message = 'enter event description'
         
        this.loading =true
        const {secure_url} = await uploadToCloudinary(this.selectedimage);
        if(!secure_url) return alert("failed to upload file");

        console.log(secure_url)
        
        const event ={
            image: secure_url,
            name: this.name,
            description: this.desc,
            venue:this.venue,
            time:this.time,
            date:this.date,
            caption:this.caption,
            on_sale:this.isOnSaleChecked,
            active:this.isActiveChecked,
            video:this.video,
            tickets:JSON.stringify(this.ticketList),
        }


        console.log(event)


        try{
            const data = await fetch(`https://backend.unboxedparty.com/api/event`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(event)
            }) .then(resp=>resp.json())

            console.log(data)

            if(data.success) this.toast("Event created successfully");

            this.loading = false
           
            navigateTo("/admin_slym/events")

        }catch(e){

           console.log(e)
           this.toast("message status:  failed to create Event")
        }

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
  