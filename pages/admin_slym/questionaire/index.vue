<template>
    <div>
      <v-container>
            <div  class=" md:tw-max-w-[1000px] mx-auto">

              <v-btn color="blue-darken-4" @click.prevent="$router.push('/admin_slym')" class="rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
                  </svg>
              </v-btn>
            </div>
        </v-container>

  
      <v-container class="pt-10">
        <v-row class="mb-6 tw-flex tw-justify-between tw-items-center">
          <h1 class="text-white text-2xl font-weight-bold px-4">Questionaires </h1>
          <!-- <v-btn
            class="mx-4 rounded-xl"
            color="blue-darken-3"
            fab
            @click="$router.push('/admin_slym')"
          >
            Create Items
          </v-btn> -->
        </v-row>
        
        <v-card theme="dark" class="text-white py-4 ">
            <div class="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-flex-wrap tw-mx-auto">

                <v-data-table
                  :headers="headers"
                  :items="submittedResponses"
                  :items-per-page="5"
                  class="elevation-1"
                >
                  <template v-slot:top>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </template>
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ item.location }}</td>
                      <td>{{ item.phone }}</td>
                      <td>{{ item.student }}</td>
                      <td>{{ item.socialMediaHandles }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.favoriteColor }}</td>
                      <td>{{ item.favorite }}</td>
                    </tr>
                  </template>
                </v-data-table>

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
            submittedResponses:[
                [
                    {question:'what is my name',response:'obi'},
                    {question:'what is my name',response:'obi'},
                    {question:'what is my name',response:'obi'}
                ],

            ]
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