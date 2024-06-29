<template>
    <div>
      <v-container>
        <div class="md:tw-max-w-[1000px] mx-auto">
          <v-btn color="blue-darken-4" @click.prevent="$router.push('/admin_slym')" class="rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"/>
            </svg>
          </v-btn>
        </div>
      </v-container>
  
      <v-container class="pt-10">
        <v-row class="mb-6 tw-flex tw-justify-between tw-items-center">
          <h1 class="text-white text-2xl font-weight-bold px-4">Questionnaires</h1>
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
            style="min-width: 50px !important;"
          >
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
  export default {
    data() {
      return {
        search: '',
        headers: [
          { title: 'Name', key: 'name' },
          { title: 'Location', key: 'location' },
          { title: 'Number', key: 'number' },
          { title: 'Student', key: 'student' },
          { title: 'Social Media', key: 'socialMediaHandles' },
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
      }
    },
    async mounted() {
      try {
        const response = await fetch('https://backend.unboxedparty.com/api/surveys', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        this.$store.dispatch('setMySurvey', data.data);
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  
  