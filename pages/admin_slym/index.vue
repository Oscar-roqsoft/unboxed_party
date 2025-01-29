<template>
  <div>

    <v-container>

      <!-- Inner container centered with specific dimensions and styling -->
      <div class="mx-auto container" style="max-width: 490px; height: 730px; border-radius: 37px; margin-top: 90px; ">

        <v-row class="row">
          <!-- First column for form -->
          <v-col>


            <form @submit.prevent="log_in()">
              <div class="inner-container"
                style="max-width: 446px; min-height: 605px; background: #12181F; border-radius: 37px; margin-left: 20px; margin-top: 5px; display: flex;flex-direction: column; padding: 40px 70px;">

                <!-- Logo container, visible only on small screens -->
                <!-- <div class="d-md-none" style=" margin-bottom: 22.62px;">
                  <div style=" font-size:20px;" class="logo  pa-1 d-flex justify-center items-center font-weight-bold"> -->
                    <!-- <img class="img" src="/Logo1.png" style="width: 48.425px;"/> -->
                    <!-- <span class="Demo" style="margin-left: 11px; margin-top: 8px;color:#FFFFFF;">Unboxed party</span>
                  </div>
                </div> -->

                <!-- Welcome heading and instruction text -->
                <h1 class="heading tw-mt-5" style="font-weight: 600; font-size: 30px; color:#FFFFFF">Welcome back</h1>
                <p class="text" style="color: #C3CDDB;font-size: 16px; font-weight: 400;">Please Enter your email and
                  password</p>

                <!-- Role display box -->
                <div
                  style="color:#FFFFFF;background: #161D26; font-size: 14px;font-weight: 400; display: inline-flex;justify-content: center; align-items: center; max-width: 220px; min-height: 50px; border-radius: 20px; margin-top: 21px;">
                  Super Admin
                </div>

                <!-- Form inputs for email and password -->
                <div style="margin-top: 54px;">
                  <!-- Email input field with icon -->
                  <div class="position-relative">
                    <!-- <svg style="position: absolute;top: 27px; left: 42px; z-index: 50;" width="6" height="18"
                      viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round" />
                    </svg> -->

                    <v-text-field ref="email" class="custom-text-field" type="email" placeholder="Enter your email"
                      prepend-inner-icon="mdi-at" variant="solo-filled" @click:append-inner="visible = !visible"
                      rounded="20px" background="#12181F" style="background: #12181F !important;"></v-text-field>
                  </div>
                  <!-- v-model.trim="email.value.value" -->
                  <!-- :error-messages="email.errorMessage.value" -->
                  <!-- Password input field with icon -->
                  <div style="position: relative;">
                    <v-divider class="border-opacity-75" color="#ffff" vertical
                      style="position: absolute; z-index: 60px;"></v-divider>
                    <div class="position-relative">
                      <!-- <svg style="position: absolute;top: 27px; left: 42px; z-index: 50;" width="6" height="18"
                        viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round" />
                      </svg> -->

                      <v-text-field ref="password" class="custom-text-field"
                        :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                        placeholder="Enter your password" prepend-inner-icon="mdi-lock" variant="solo-filled"
                        @click:append-inner="visible = !visible" rounded="20px" background="#12181F"
                        style="background: #12181F !important;"></v-text-field>
                    </div>
                    <!-- v-model.trim="password.value.value" -->
                    <!-- :error-messages="password.errorMessage.value" -->
                  </div>
                </div>

                <!-- Continue button -->
                <div style="margin-top: 55px; width: 100%;position: relative;">
                  <v-btn class="icon" type="submit" :loading="isloading" append-icon="mdi:arrow-right" variant="tonal"
                    height="60px" width="100%" rounded style="
                  background: linear-gradient(
                    132.03deg,
                     #c471ed 14.22%,
                    #a044ff 97.95%
                  );color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                    Continue
                  </v-btn>
                </div>

              </div>
            </form>

          </v-col>

          <!-- Second column for Account QR Code, visible only on large screens -->
          <!-- <v-col sm=" 12" lg="6" class="d-none d-lg-block">
                    <AccountQrCode />
          </v-col> -->
        </v-row>

      </div>

    </v-container>




  </div>
</template>


<script>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup'; // Import Yup for validation
import { login } from '@/composables/requests/auth';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
// import SlymEvents from "@/pages/admin_slym/events/index.vue";
// import SlymItems from "@/pages/admin_slym/items/index.vue";
// import SlymCategory from "@/pages/admin_slym/category/index.vue";
// import SlymSettings from "@/pages/admin_slym/settings/index.vue";
// import SlymArticles from "@/pages/admin_slym/articles/index.vue";
import { useStore } from '~~/store';
// export default {
//   components: {
//     SlymEvents,
//     SlymItems,
//     SlymArticles,
//     SlymCategory,
//     SlymSettings
//   },
//   data() {
//     return {
//       activeTab: '',
//     };
//   },
//   methods: {
//     changeTab( newTab ) {
//       this.activeTab = newTab;
//     },
//   },
// };
export default {
  // components: {
  //   SlymEvents,
  //   SlymItems,
  //   SlymArticles,
  //   SlymCategory,
  //   SlymSettings,
  // },
  setup() {
    const toast = ( message ) => {
      createToast( message );
    };
    return { toast };
  },
  data() {
    return {
      activeTab: '',
      visible: false,
      isloading: false, // Include `isloading` in `data`
    };
  },
  methods: {
    changeTab( newTab ) {
      this.activeTab = newTab;
    },
    log_in() {
      const pinia = useStore()
      const { email, password } = this.$refs;
      this.isloading = true;

      const payload = {
        email: email.value,
        password: password.value,
      };

      login( payload )
        .then( ( data ) => {
          // console.log(data,'data')
          if ( data.token ) {
            // this.$toast.success( 'Logged in successfully' );
            this.toast( 'Logged in successfully' );
            pinia.setUser( data.token );
            navigateTo( "/admin_slym/routes" )
            // this.$router.push( '/dashboard' );
          }
        } )
        .catch( ( e ) => {
          this.toast('Failed to login')
          console.error( e );
        } )
        .finally( () => {
          this.isloading = false;
        } );
    },
  },
};

// Define the validation schema
// const schema = yup.object( {
//   email: yup
//     .string()
//     .email( 'Must be a valid e-mail.' )
//     .required( 'Email is required.' ),
//   password: yup
//     .string()
//     .required( 'Password is required.' )
// } );


// // Set up form fields with validation
// const { handleSubmit, handleReset, errors } = useForm( {
//   validationSchema: schema,
// } );
// const email = useField( 'email' );
// const password = useField( 'password' );

const isloading = ref( false );

// Visibility state for password field
const visible = ref( false )

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
  height: 48px;
  /* Adjust height if needed */
  text-transform: capitalize !important;
}

.v-tab--active {
  background-color: purple;
  /* Replace with your accent-4 color */
}

.v-tab:hover {
  background-color: #88868600;
}

.v-tabs {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>


<!-- <v-col class="px-4">
          <v-btn @click.prevent="changeTab('users')" class="tw-capitalize ma-2">users</v-btn>
          <v-btn  @click.prevent="changeTab('events')" class=" ma-2">events</v-btn>
          <v-btn  @click.prevent="changeTab('merch')" class=" ma-2">merch</v-btn>
          <v-btn  @click.prevent="changeTab('categories')" class=" ma-2">categories</v-btn>
          <v-btn  @click.prevent="changeTab('articles')" class=" ma-2">articles</v-btn>
          <v-btn  @click.prevent="changeTab('general settings')" class=" ma-2">general settings</v-btn>
        </v-col> -->

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