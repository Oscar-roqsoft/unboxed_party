<template>
    <div>
        
        <v-container>
            <Backbutton class=" md:tw-max-w-[800px] mx-auto"/>
        </v-container>
        <v-container>
            <h1 class="tw-text-center tw-font-bold pa-3  text-capitalize tw-text-2xl md:tw-max-w-[800px] mx-auto">Create Items</h1>

            <v-card class="pa-4 mb-10 md:tw-max-w-[800px] mx-auto" style="background: #22222261;">

                <v-form>
                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="category"
                    label="Category"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="name"
                    label="name"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                    <v-text-field
                    class="mb-2 rounded-xl"
                    v-model="price"
                    label="Price"
                    persistent-hint
                    variant="solo"
                    ></v-text-field>

                   

                    <h3 class=" tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> 
                        upload item image and color type
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
                            class="mb-2 tw-ml-1 rounded-xl "
                            v-model="itemColor"
                            label="item color"
                            persistent-hint
                            variant="solo"
                            ></v-text-field>
                        
    
                    <v-btn @click.prevent="addColor" class="mb-2">add item type </v-btn>
                    
                    <v-list class="pa-2 roounded tw-min-h-20">
                        <span class="border-b" color="primary ">Review list of added Item Image </span>
                        <div  class="tw-grid tw-grid-cols-4 tw-gap-4 tw-items-center border-b">
                            
                            <div class="tw-block">
                                <div v-for="i in imageList">
                                        <v-row class="tw-m-3 tw-w-14 ma-2">
                                          <img :src="i" alt="">
                                        </v-row>
                                </div>
                            </div>
                            
                            <div class="tw-block tw-w-full tw-col-span-3 ">

                                <div v-for="i in colorList" class="  tw-text-gray-500  tw-py-3 ma-2 tw-flex  tw-justify-between tw-items-center">
                                        <v-row class=" ">
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


                

                    <h3 class="tw-mt-16 tw-mb-4 tw-text-center tw-font-bold" style="font-family: 'Permanent Marker', cursive !important;"> 
                        create items Sizes
                    </h3>
                    
                        <v-text-field
                        class="mb-2 tw-ml-1 rounded-xl"
                        v-model="itemSize"
                        label="item size"
                        persistent-hint
                        variant="solo"
                        ></v-text-field>
                        
    
                      <v-btn @click.prevent="addSize" class="mb-2">add Size </v-btn>


                  <v-list class="pa-2 roounded tw-min-h-20">
                     <span class="border-b" color="primary ">Review list of added Item Sizes </span>
                     <div v-for="i in sizeList">
                        <v-col>
                            <v-row class="border-b tw-py-3 tw-flex tw-justify-between tw-items-center tw-px-4">
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
                            <v-btn  @click.prevent="createItem"  :loading="loading"  size="x-large"  
                            color="blue-darken-4">Create</v-btn>
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
        name:'',
        category:'',
        price:'',
        itemImage: [],
        itemColor:"",
        itemSize:"",
        image: [],
        

        loading:false,

        itemList:[],

       
        imageList:[],
        colorList:[],
        sizeList:[],
        itemType:[],


        itemOptionList: [],

        imageUrl: [], // URL for previewing uploaded image

        selectedimage:[],
        message:'',

    };
  },

computed:{

    itemOption(){

        return this.itemOptionList = {images:this.imageList,colors:this.colorList,sizes:this.sizeList};
    }
},

 


  methods: {

    // addImg(){
    //         const tic = {img:this.itemImage,color:this.itemColor}
    //         this.ticketList.push(tic)
    //         this.ticketList.reverse(this.ticketList)
    //         console.log( this.colorList)
    //         this.itemImage = ''
    //         this.itemColor = ''
    //     },


        // async addImg(){

        //     const {secure_url} = await uploadToCloudinary(this.selectedimage);
        //     if(!secure_url) return alert("failed to upload file");

        //     // const filteredUrl = secure_url.replace(/\/[^\/]+$/, "");
        //     const regex = /\/([^/]+)\.\w+$/;
        //     const imageName = secure_url.match(regex)[1]
        //     console.log(secure_url)

        //     this.imageList.push(secure_url)
        //     this.imageList.reverse(this.imageList)
        //     this.itemImage = ''
        // },

      async addColor(){
            const {secure_url} = await uploadToCloudinary(this.selectedimage);
            if(!secure_url) return alert("failed to upload file");
            this.imageList.push(secure_url)
            this.imageList.reverse(this.imageList)
            this.itemImage = ''
            this.colorList.push(this.itemColor)
            this.colorList.reverse(this.colorList)
            this.itemColor = ''
        },

      addSize(){
            this.sizeList.push(this.itemSize)
            // this.sizeList.reverse(this.sizeList)
            this.itemSize = null
        },


        deleteItem(itemId) {
            const itemIndex = this.imageList.findIndex((item) => item.name === itemId);
            if (itemIndex >= 0) {
            this.imageList.splice(itemIndex, 1);
            this.colorList.splice(itemIndex, 1);
            
           }
    
        },
        deleteSize(itemId) {
            const itemIndex = this.sizeList.findIndex((item) => item.name === itemId);
            if (itemIndex >= 0) {
            this.sizeList.splice(itemIndex, 1);
            
           }
    
        },
    

      async handleImageUpload(event){
          const file = event.target.files[0];
          if(!file) return;
          this.selectedimage = file

         

      },

     async createItem() {
        if(!this.category) return this.message = 'enter event category'
        if(!this.name) return this.message = 'enter event name'
        if(!this.price) return this.message = 'enter event price'
        
         this.loading= true
      
      const item ={
          name: this.name,
          category: this.category,
          price:this.price,
          options: JSON.stringify(this.itemOption),
      }


      console.log(item)

      try{
          const data = await fetch(`https://backend.unboxedparty.com/api/merch`,{
              method:"POST",
              headers:{
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(item)
          }).then(res=>res.json())

          if(data.success) this.toast("Item created successfully")
          
          this.loading= false
          console.log(data)

          navigateTo("/admin_slym/items")

      }catch(e){
         console.log(e)
          this.toast(
              "message status: failed to create Item ",
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