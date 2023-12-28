<template>

    <div  class="fixed tw-min-w-40 bottom-4 tw-bg-gray-600 tw-p-4 tw-text-white right-4 
    z-50 max-w-sm bg-red-500 text-white rounded-lg shadow-md p-4">
      <div class="flex items-center">
        <v-icon @click="hideToast" class="mr-2">mdi-alert-circle-outline</v-icon>
        <div>{{ messageBox }}</div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {

    props:{
        messageBox:String,
    },
    emits: ['hide-toast'],

    data() {
      return {
        showToast: false,
        message: '',
      };
    },


    methods: {
      showErrorToast(message) {
        this.message = message;
        this.showToast = true;
        // Animation for entrance
        this.$el.style.opacity = 0;
        this.$el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          this.$el.style.opacity = 1;
          this.$el.style.transform = 'translateY(0)';
        }, 10);
  
        // Auto-hide after a timeout
        setTimeout(() => {
          this.hideToast();
        }, 3000);
      },

      hideToast() {
        this.showToast = false;
        // Animation for exit
        this.$el.style.opacity = 1;
        this.$el.style.transform = 'translateY(0)';
        setTimeout(() => {
          this.$el.style.opacity = 0;
          this.$el.style.transform = 'translateY(20px)';
        }, 10);
      },
    },
    
  };
  </script>
  