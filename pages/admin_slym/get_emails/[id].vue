<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Email List</h1>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="headerss(index,item)"
            :items="emails"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item="{ item, index }">
              <tr @click="selectEmail(item)" style="font-size: 20px !important;">
                <td>{{ index + 1 }}</td>
                <td >{{ item }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      emails: [],
      headers: [
        { text: 'S/n', value: 'index' },
        { text: 'List of Emails', value: 'email' }
      ]
    };
  },
  mounted() {
    this.get_email();
  },
  methods: {
    selectEmail(email) {
      // Handle selecting an email (e.g., show email details)
      console.log('Selected email:', email);
    },
    async get_email() {
      try {
        const data = await fetch("https://backend.unboxedparty.com/api/emailsByEvent?event_id=" + this.$route.params.id, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => res.json());

        this.emails = data.emails;
        console.log(this.emails);
      } catch (e) {
        console.log(e);
      }
    },
    headerss(index,text){
      return  this.headers = [
        { text: 'S/n', value: index },
        { text: 'List of Emails', value: text}
      ]
    }

  }
};
</script>

  
  <style>
  /* Add custom styles here if needed */
  </style>
  