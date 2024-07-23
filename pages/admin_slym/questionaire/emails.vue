

<template>
      <v-container>
        <div class="md:tw-max-w-[1200px] mx-auto">
          <v-btn color="blue-darken-4" @click.prevent="$router.push('/admin_slym/questionaire')" class="rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
            </svg>
          </v-btn>
        </div>
      </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 mb-6">Email List</h1>
        </v-col>
      </v-row>
      <v-card>
              <div class="pa-2 tw-flex tw-flex-wrap" >
  
                <div v-for="(i,index) in emails" :key="index" class="d-flex" style="display: flex !important">
                      <span>{{ i + ',' }}<br></span>
                </div>
  
              </div>
            
      </v-card>
    </v-container>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        emails: [],
        headers: [
          { title: 'S/n',  align: 'start', key: 'index'  },
          { title: 'list of emails',  align: 'start', key: 'index'  },
        ]
      };
    },

    computed:{
        emails() {
            return this.$store.state.questionaireEmails;
        },
    },
  
    mounted() {
      this.emails;
    },
  
}
  </script>