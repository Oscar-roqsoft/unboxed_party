<template>
    <div>
      <v-container>
        <div class="md:tw-max-w-[1200px] mx-auto">
          <v-btn color="blue-darken-4" @click.prevent="$router.push('/admin_slym/routes')" class="rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
            </svg>
          </v-btn>
        </div>
      </v-container>
  
      <v-container class="pt-10">

        <v-row class="mb-4 tw-flex tw-justify-between tw-items-center">
          <v-col cols="12" md="6">
            <h1 class="text-white tw-text-3xl font-weight-bold px-4">Questionnaires</h1>
          </v-col>
          <v-col cols="12" md="6">
            <v-row class="mb-2 tw-flex tw-justify-end tw-items-center mx-4 tw-gap-6">
              <v-btn to="/admin_slym/questionaire/names" color="blue" class="">Names</v-btn>
              <v-btn to="/admin_slym/questionaire/numbers" color="blue" class="">Numbers</v-btn>
              <v-btn to="/admin_slym/questionaire/emails" color="blue" class="">Emails</v-btn>
            </v-row>
          </v-col>
        </v-row>

        
        <v-card flat>
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
              required
            ></v-text-field>
          </template>
  
          <v-data-table
            :headers="headers"
            :items="submittedResponses"
            :search="search"
            style="min-width: 50px !important;">
            <template v-slot:item.action="{ item }">
                <div style="display: flex; min-width: 100px;" >

                    <!-- <v-btn
                      class="ms-3 text-capitalize"
                      color="blue"
                      @click="editItem(item)"
                    >
                      Edit
                    </v-btn> -->
                    <v-btn
                    class="ms-3 text-capitalize"
                      color="red"
                      @click="deleteItem(item)"
                    >
                      Delete
                    </v-btn>
                </div>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
  </template>
  
  <script>
  import { useStore } from '~~/store';
  const store = useStore();
  export default {
    data() {
      return {
        search: '',
        headers: [
          { title: 'Name', key: 'name' },
          { title: 'Location', key: 'location' },
          { title: 'Number', key: 'number' },
          { title: 'Student', key: 'student' },
          { title: 'Social Media', key: 'socialmedia' },
          { title: 'Email', key: 'email' },
          { title: 'Role', key: 'role' },
          { title: 'Action', key: 'action', sortable: false },
        ],
        // submittedResponses: [
        //   { name: 'Obi', location: 'fvfev', number: '31241', student: 'defwr', socialMediaHandles: 'sdgfhgcjhvkjblkn', email: 'sedrfxcghvjblkn;lmdfgjhvkbjn', role:'sdfgchkvjlbdfgjhkvjblkfghjklmkrdftcgyhvjbkntfcygvuhbijnkofghvjbk'}
        // ],
      };
    },
    computed:{
        submittedResponses() {
      return this.$store.state.survey;
    },
    },
    methods: {
      editItem(item) {
        // Logic to edit the item
        console.log('Editing item:', item);
      },
      deleteItem(item) {
        // Logic to delete the item
        console.log('Deleting item:', item);
        const index = this.submittedResponses.indexOf(item);
        if (index > -1) {
          this.submittedResponses.splice(index, 1);
        }
      },
      mapData(items){
        const data = items.map(e => e.number)
        const payload = data.map(e => (e));
        return console.log(payload)
      }
    },
    async mounted() {
      try {
        const response = await fetch('https://backend.unboxedparty.com/api/surveys', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.token}`
          },
        });
        const data = await response.json();
        this.$store.dispatch('setMySurvey', data.data);
        console.log(data.data)
      } catch (error) {
        console.error(error);
      }

      const numberData = this.submittedResponses.map(e => e.number)
      this.$store.dispatch('setMyQuestionaireNumbers', numberData);
      const emailData = this.submittedResponses.map(e => e.email)
      this.$store.dispatch('setMyQuestionaireEmails', emailData);
      const nameData = this.submittedResponses.map(e => e.name)
      this.$store.dispatch('setMyQuestionaireNames', nameData);

    },
  };
  </script>
  
  