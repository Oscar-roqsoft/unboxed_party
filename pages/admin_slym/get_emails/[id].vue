<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Email List</h1>
      </v-col>
    </v-row>
    <v-card>
            <div class="pa-2 tw-flex tw-flex-wrap">

              <div v-for="(i,index) in emails" :key="index" class="d-flex" style="display: flex !important">
                    <span>{{ i  + ' ,' }}</span>
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

  mounted() {
    this.get_email();
  },

  methods: {
    selectEmail(email) {
      // Handle selecting an email (e.g., show email details)
      // console.log('Selected email:', email);
    },
    async get_email() {
      const authData = localStorage.getItem( 'unboxAdminApp' );
      const parsedAuth = JSON.parse( authData );
      const token = parsedAuth.state?.token;
      try {
        const data = await fetch("https://backend.unboxedparty.com/api/emailsByEvent?event_id=" + this.$route.params.id, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
          },
        }).then(res => res.json());

        this.emails = data.emails;
        // console.log(this.emails);
      } catch (e) {
        // console.log(e);
      }
    },

  }
};
</script>

  
  <style>
  /* Add custom styles here if needed */
  </style>
  