<template>
  <div>
    <!-- <v-col class="px-4">
      <v-btn @click.prevent="changeTab('users')" class="tw-capitalize ma-2">users</v-btn>
      <v-btn  @click.prevent="changeTab('events')" class=" ma-2">events</v-btn>
      <v-btn  @click.prevent="changeTab('merch')" class=" ma-2">merch</v-btn>
      <v-btn  @click.prevent="changeTab('categories')" class=" ma-2">categories</v-btn>
      <v-btn  @click.prevent="changeTab('articles')" class=" ma-2">articles</v-btn>
      <v-btn  @click.prevent="changeTab('general settings')" class=" ma-2">general settings</v-btn>
    </v-col> -->


     <div class="md:tw-max-w-[1100px] tw-mx-auto tw-p-4 md:tw-pt-10 tw-w-full">


        <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">

          <button @click.prevent="navigateTo(`/admin_slym/user`)" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">user </button> 
          <button @click.prevent="navigateTo('/admin_slym/events')" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">events </button> 
          <button @click.prevent="navigateTo('/admin_slym/items')" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">merch</button> 
          <button @click.prevent="navigateTo('/admin_slym/category')" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">categories</button> 
          <button @click.prevent="navigateTo('/admin_slym/articles')" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">articles</button> 
          <button @click.prevent="navigateTo('/admin_slym/orders')" class="tw-h-[150px] md:tw-h-[200px]  
          hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">Orders</button> 
          <button @click.prevent="navigateTo('/admin_slym/settings')" class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">general settings</button> 
      
        </div>

     </div>

      



      <!-- <div class="px-4">
        <div v-if="activeTab === 'users'">
          <AdminUserLists/>
        </div>
  
        <div v-if="activeTab == 'events'">
          <SlymEvents />
        </div >
            
        <div v-if="activeTab == 'merch'">
        <SlymItems/>
        </div>
  
        <div v-if="activeTab == 'categories'">
          <SlymCategory />
        </div>
  
        <div v-if="activeTab == 'articles'">
           <SlymArticles/>
        </div>
  
        <div v-if="activeTab == 'general settings'">
          <SlymSettings/>
        </div>
  
      </div> -->


  </div>
</template>


<script>
import SlymEvents from "@/pages/admin_slym/events/index.vue"
import SlymItems from "@/pages/admin_slym/items/index.vue"
import SlymCategory from "@/pages/admin_slym/category/index.vue"
import SlymSettings from "@/pages/admin_slym/settings/index.vue"
import SlymArticles from "@/pages/admin_slym/articles/index.vue"
export default {
  components: {
    SlymEvents,
    SlymItems,
    SlymArticles,
    SlymCategory,
    SlymSettings
  },
  data() {
    return {
      activeTab: '',
    };
  },
  methods: {
    changeTab(newTab) {
      this.activeTab = newTab;
    },
  },
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

* {
  font-family: "Permanent Marker", cursive !important;
}


.v-tab {
  border-radius: 5px;
  background-color: transparent;
  font-weight: bold;
  padding: 10px;
  height: 48px; /* Adjust height if needed */
  text-transform: capitalize !important;
}

.v-tab--active {
  background-color: purple; /* Replace with your accent-4 color */
}

.v-tab:hover {
  background-color: #88868600;
}

.v-tabs {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
