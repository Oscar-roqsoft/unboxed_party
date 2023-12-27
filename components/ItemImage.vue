<template>
    <div>
      <v-img
        eager 
        :src="imageUrl"
        :width="width"
        :height="height"
        alt="Item image"
        lazy-load
        cover
        class="rounded-lg"
      />
    </div>
  </template>
  
  
  <script>
import { imageFilter } from "@/composables/mixins";
  export default {
    props: {
      options: String,
      width: Number,
    },
    computed: {
        screenWidth() {
        return this.$vuetify.display.width;
    },



    itemSize(){

        if (this.screenWidth >= 1264) {
        return 700; // Customize size names and breakpoints

        } else if (this.screenWidth >= 960) {
        return 500;

        } else {
        return 500;

        }

    },


      imageUrl() {
        if (this.options) {

            const parsedOptions = JSON.parse(this.options);
            if (parsedOptions.images && parsedOptions.images.length > 0) {
            return parsedOptions.images[0];

        }
         }
      },

      height() {
        // Adapt the height based on your desired aspect ratio or container layout
        return this.width * 0.75;
      },
    },
  };
  </script>