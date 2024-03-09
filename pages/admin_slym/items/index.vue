<template>
    <div>
      <v-container>
            <div  class="  mx-auto">

              <v-btn color="blue-darken-4" @click.prevent="navigateTo('/admin_slym')" class="rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
                  </svg>
              </v-btn>
            </div>
        </v-container>

     
  
      <v-container class="pt-10">
        <v-row class="mb-6 tw-flex tw-justify-between tw-items-center">
          <h1 class="text-white px-4">Items</h1>
          <v-btn
            class="mx-4 rounded-xl"
            color="blue-darken-3"
            fab
            @click="$router.push('/admin_slym/items/create')"
          >
            Create Items
          </v-btn>
        </v-row>
        
        <v-card theme="dark" class="text-white py-4 ">
            <div class="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-flex-wrap tw-mx-auto">
                <div v-for="(item, index) in items" :key="item.id" class="tw-flex tw-flex-col">

                    <div v-if="toast" class="tw-fixed tw-top-1/3 tw-left-[12%] lg:tw-left-[40%] tw-min-h-28 tw-min-w-28 tw-rounded-lg  tw-bg-[#282828]  tw-z-40
                        tw-transition tw-duration-300 tw-ease-in-out tw-transform">
                           <div class="tw-p-4 tw-py-6 tw-text-center ">
                               <span class="tw-text-gray-100 ">Do You Want Delete {{ itemName }}</span>
                               <div class="mt-4">
                                   <v-btn class="mx-2" @click="toast=false">Cancel</v-btn>
                                   <v-btn class="mx-2" color="red" @click="deleteItem(idItem)">confirm</v-btn>
                               </div>
                         </div>
                   </div>

              <div class=" tw-max-w-full tw-flex tw-flex-col tw-items-center tw-justify-center  tw-rounded-md tw-mx-auto">
                
                <div class="">
                  <ItemImage :options="item.options" :width="itemSize" />
                </div>
  
                <div class="tw-mt-3">
                  <span class="font-bold">Name:</span>
                  <span class="ml-2">{{ item.name }}</span>
                </div>

                <div class="tw-mt-3">
                  <span class="font-bold">Price:</span>
                  <span class="ml-2">N{{ addCommas(item.price) }}</span>
                </div>
  
                <div class="tw-mt-3">
                  <span class="font-bold">Color:</span>
                  <span v-for="(color,index) in JSON.parse(item.options).colors" :key="index">
                      <span class="ml-2">{{ color}}</span>
                      <span v-if="index !== JSON.parse(item.options).colors.length - 1">,</span>
                  </span>
                </div>
  
                <div class="tw-mt-3">
                  <span class="font-bold">Sizes:</span>
                  <span v-for="(sizes,index) in JSON.parse(item.options).sizes" :key="index">
                      <span class="ml-2">{{ sizes }}</span>
                      <span v-if="index !== JSON.parse(item.options).sizes.length - 1">,</span>
                  </span>
                  <!-- <span class="ml-2">{{ item.options.sizes.join(', ') }}</span> -->
                </div>
  
                <div class="tw-my-4">
                  <v-btn color="primary" @click="navigateTo(item)">Edit</v-btn>

                  <v-btn class="mx-2" color="error" @click="toast = true; idItem = item.id ;itemName = item.name ">
                    Delete
                  </v-btn>


                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-container>
    </div>
  </template>
  

<script>
import { imageFilter } from "@/composables/mixins";
import ItemImage from "@/components/ItemImage";

export default {
    data(){
        return{
            toast:false,
            idItem:null,
            itemName:'',
        }
    },
  computed: {
    items() {
      return this.$store.state.shop_items.list;
    },
    screenWidth() {
        return this.$vuetify.display.width;
    },



    itemSize(){

        if (this.screenWidth >= 1264) {
        return 350; 

        } else if (this.screenWidth >= 960) {
        return 300;

        } else {
        return 300;

        }

    },
  },

 async mounted(){

    console.log(this.$vuetify.display.width)

  
   
       try {
           const data = await fetch(`https://backend.unboxedparty.com/api/category`,{
               method:"GET",
               headers:{
               'Content-Type': 'application/json',
               }
           }).then(res=>res.json());
   
           
           const payload =  [...data.categories]
           this.$store.dispatch("setMyCategory", payload);
           
   
       } catch (error) {
         console.error(error);
       }
       

        try {
          const data = await fetch(`https://backend.unboxedparty.com/api/merch`,{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
            }

          }).then(res=>res.json());

          console.log(data)

          const payload =  [...data.items]
          payload.reverse(payload)
          this.$store.dispatch("setMyItems", payload);
          this.$store.dispatch("setMyItemsExpirationDate", addMinutes(30));

        } catch (error) {
          console.error(error);
        }

 
  },

  methods: {
    addCommas(num) {
      // ... your method logic
       // Convert the number to a string
       let str = num.toString();
        // Split the string into an array of characters
        let arr = str.split('');
        // Reverse the array so we can add commas from right to left
        arr.reverse();
        // Loop through the array and add commas every three digits
        for (let i = 3; i < arr.length; i += 4) {
          arr.splice(i, 0, ',');
        }
        // Reverse the array again and join it back into a string
        str = arr.reverse().join('');
        // Return the formatted string
        return str;
    },

    navigateTo(item) {
      this.$router.push(`/admin_slym/items/${item.id}`);
    },

    async deleteItem(itemId) {

     console.log(itemId)
      const id = { id: itemId };
      try {
        await fetch(`https://backend.unboxedparty.com/api/merch`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(id),
        });

        const filteredItems = this.items.filter(
          (item) => item.id !== itemId
          );
          this.$store.dispatch("setMyItems", filteredItems);

         this.toast = false
      } catch (error) {
        console.error(error);
      }
    },
  },
};


</script>
    