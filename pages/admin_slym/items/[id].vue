<template>
    <div>

        <v-container>
            <div  class=" md:tw-max-w-[1000px] mx-auto">

              <v-btn color="blue-darken-4" @click.prevent="navigateTo('/admin_slym/items')" class="rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
                  </svg>
              </v-btn>
            </div>
        </v-container>

        <v-container>
            <h1 class="tw-text-center tw-font-bold  pa-3  text-capitalize tw-text-2xl md:tw-max-w-[800px] mx-auto">Edit Items</h1>

            <v-card class="pa-4 mb-10 md:tw-max-w-[800px] mx-auto" style="background: #22222261;">

                <v-form>
                    <!-- <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="item.category"
                    label="Category"
                    persistent-hint
                    variant="solo"
                    ></v-text-field> -->

                    <div  class="w-100 mb-0 d-flex align-center justify-space-around ">

                    <v-select
                    v-model="item.category"
                    label="Select Category"
                    :items="fetchedcategory"
                    item-title="name"
                    item-value=""
                    variant="solo"
                    background="transparent"
                    elevation="0"
                    ></v-select>

                    </div>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="item.name"
                    label="name"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="item.price"
                    label="Price"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                   
                    
                 



                    <h3 class="tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> 
                        Edit uploaded items Image and colors
                    </h3>
                    
                        <v-card-text>
                                <v-file-input
                                accept="image/*"
                                label="item Image"
                                v-model="itemImage"
                                @input="handleImageUpload($event)"
                                prepend-icon="mdi-image"
                                variant="solo"
                                />
                                <!-- <v-img  :src="imageUrl" max-width="200" max-height="200" v-if="imageUrl" /> -->
                        </v-card-text>
    

            
                    <v-text-field
                    class="mb-2 tw-ml-1 rounded-xl"
                    v-model="itemColor"
                    label="item color"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>
                        

                  <v-btn @click.prevent="addColor" color="blue" class="mb-2">add item type </v-btn>
                    
                    <v-list class="pa-2 roounded tw-h-50">
                        <span class="border-b" color="primary ">Review list of added Item Image </span>
                        <div  class="tw-grid tw-grid-cols-4 tw-h-full tw-gap-4 tw-items-center  border-b">
                            
                            <div class="tw-col-span-1">
                                <div v-for="i in imageList" :key="i">
                                        <div class="tw-m-3   tw-w-14 ma-2">
                                          <img :src="i" alt="">
                                        </div>
                                </div>
                            </div>

                            <div class=" tw-w-full tw-col-span-3 tw-flex tw-flex-col tw-justify-center tw-h-full">

                                <div v-for="i in colorList" :key="i" class="  tw-text-gray-500 tw-h-full  tw-py-3 ma-2 tw-flex  tw-justify-between ">
                                        <v-row class="mt-1 ">
                                            <span>color: {{ i }}</span>
                                        </v-row>
        
                                        <v-btn size="x-small" href="#" @click.prevent="deleteItem(i.id)" 
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline tw-flex tw-justify-start tw-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
                                                <path fill="red" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
                                                0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 
                                                111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 
                                                32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"/>
                                            </svg>
                                        </v-btn>
                                </div>
                            </div>

                        </div>
                    </v-list>

                    <h3 class="tw-mt-14 tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> 
                        create items Sizes
                    </h3>
                    
                    <v-col>
                        <v-col class="px-3">
                            <v-text-field
                            class="mb-2 tw-ml-1 rounded-xl"
                            v-model="itemSize"
                            label="item size"
                            persistent-hint
                            variant="solo"
                            ></v-text-field>
                        
                        </v-col>
    
                      <v-btn @click.prevent="addSize" color="blue" class="mb-2">add Size </v-btn>
                  </v-col>


                  <v-list class="pa-2 roounded tw-min-h-20">
                     <span class="border-b" color="primary ">Review list of added Item Sizes </span>
                     <div v-for="i in sizeList">
                        <v-col>
                            <v-row class="border-b tw-py-2 tw-flex tw-justify-between">
                                <span>{{ i }}</span>

                                <v-btn size="x-small" href="#" @click.prevent="deleteSize(i.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
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

                  


                    <div class="tw-flex tw-items-center  tw-justify-center ma-4">

                        <div class="tw-flex  tw-flex-col mt-4">
                            <span class="tw-text-red-500 pa-2" v-if="message.length">{{ message }}*</span>
                            <v-btn :loading="loading"  @click.prevent="editItem"   size="x-large"  
                            color="blue-darken-4">Edit Item</v-btn>
                        </div>

                    </div>

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
        item:'',
        name:'',
        category:'',
        price:'',
        itemImage: '',
        itemColor:"",
        itemSize:"",
        image: null,


        loading:false,
        

        itemList:[],

       
        imageList:'',
        colorList:'',
        sizeList:'',


        itemOptionList: [],

        imageUrl: null, // URL for previewing uploaded image

        selectedimage:null,
        message:'',

    };
  },

  

  computed:{
     
        
    itemOption(){
            return this.itemOptionList = {images:this.imageList,colors:this.colorList,sizes:this.sizeList};
        },

    items () {
         return this.$store.state.shop_items.list
        },

    fetchedcategory(){
        return this.$store.state.mycategory;
        },
        
    },

   

mounted() {
    // console.log(JSON.parse(this.item.options).sizes)
    var name = decodeURIComponent(this.$route.params.id)
    
    this.item = this.items.find(el=>{
        return el.id == name
    })

        


    this.sizeList = JSON.parse(this.item.options).sizes
    this.imageList = JSON.parse(this.item.options).images
    this.colorList = JSON.parse(this.item.options).colors
    // console.log(JSON.parse(this.item.options).color)
    // console.log(JSON.parse(this.item.options).image)
//   console.log(this.imageList)
      

    //   this.category = this.item.category
      
      setTimeout(() => {
        this.dialog = true;
      }, 10000);
},

 


  methods: {
    deleteItem(imgId){
        const itemIndex = this.imageList.findIndex((item) => item.name === imgId);
            if (itemIndex >= 0) {
            this.imageList.splice(itemIndex, 1);
            this.colorList.splice(itemIndex, 1);
            
           }
    },
   

    deleteSize(sizeId){
        const itemIndex = this.sizeList.findIndex((item) => item.id === sizeId);
            if (itemIndex >= 0) {
            this.sizeList.splice(itemIndex, 1);
            
           }
    },
    
    

    


      async addColor(){

            const {secure_url} = await uploadToCloudinary(this.selectedimage);
            if(!secure_url) return alert("failed to upload file");

            // console.log(secure_url)
            // console.log(this.imageList)
            this.imageList.push(secure_url)
            this.imageList.reverse(this.imageList)

            
            // console.log(this.itemColor)

            this.colorList.push(this.itemColor)
            this.colorList.reverse(this.colorList)

            this.itemColor = ''
            this.itemImage = ''
        },


      addSize(){
            this.sizeList.push(this.itemSize)
            // this.sizeList.reverse(this.sizeList)
            this.itemSize = null
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

     async editItem() {
        this.loading = true
      
      const item ={
          id:this.item.id,
          name: this.item.name,
          category: this.item.category,
          price: this.item.price,
          options: JSON.stringify(this.itemOption),
      }


    //   console.log(item)

      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/merch`,{
              method:"PATCH",
              headers:{
                  'Content-Type': 'application/json', 'Authorization': `Bearer ${store.state.token}`
              },

              body:JSON.stringify(item)
          }).then(res=>res.json())

          if(data.success) this.toast("Item edited successfully")
         
          this.loading = false
        //   console.log(data)

          navigateTo("/admin_slym/items")

      }catch(e){
        //  console.log(e)
         this.toast(
              "message status:  failed to update Item",
           )
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