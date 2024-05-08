<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 mb-6">Phone numbers</h1>
        </v-col>
      </v-row>
      <v-card>
              <div class="pa-2 tw-grid tw-grid-cols-3 md:tw-grid-cols-8" >
  
                <div v-for="(i,index) in phones" :key="index" >
                        <div style="display: flex !important;">
                            <span>{{ i  + ',' }}</span>
                        </div>
                </div>
  
              </div>
            
      </v-card>
    </v-container>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        phones: [],
        headers: [
          { title: 'S/n',  align: 'start', key: 'index'  },
          { title: 'list of phones',  align: 'start', key: 'index'  },
        ]
      };
    },
  
    mounted() {
      this.get_phones();
    },
  
    methods: {
      selectEmail(email) {
        // Handle selecting an email (e.g., show email details)
        console.log('Selected email:', email);
      },
      async get_phones() {
        try {
          const data = await fetch("https://backend.unboxedparty.com/api/getUserPhones", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(res => res.json());
  
          this.phones = data.phone_numbers;
          console.log(this.phones);
        } catch (e) {
          console.log(e);
        }
      },
  
    }
  };
  </script>