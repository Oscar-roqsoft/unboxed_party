<template>

    <v-card class="pa-4 " style="background: #22222261;">
        <v-form  color="transparent tw-bg-gray-900" @submit.prevent="null">
            <v-text-field
                class="mb-2 rounded-xl"
                v-model="smsSubject"
                label="Subject"
                persistent-hint
                density="compact"
                variant="solo"
            ></v-text-field>

            <v-textarea
                class="mb-2 rounded-xl"
                v-model="smsMessage"
                label="Message"
                persistent-hint
                density="compact"
                variant="solo"
            ></v-textarea>
            
            <v-card-text>
                <v-file-input
                  class="mb-2 rounded-xl"
                  size="large"
                  accept="image/*"
                  label="Sms Image (Optional)"
                  v-model="smsImage"
                  @change="handleImageUpload($event)"
                  prepend-icon="mdi-image"
                  variant="solo"
                />
                <v-img ref="img"  :src="imageUrl" max-width="200" max-height="200"  v-if="imageUrl" />
            </v-card-text>

            <v-row class="tw-flex tw-justify-center tw-gap-4">
                <v-btn @click.prevent="emit('close',closed = false)"   size="large">Cancel</v-btn>
                <v-btn  @click.prevent="sendBulkSms" :loading="isLoading"  color="blue-darken-4" size="large" :disabled="!smsSubject || !smsMessage">
                    Proceed
                </v-btn>

            </v-row>
        </v-form>
    </v-card>
      
</template>

<script setup>
  import { createToast } from 'mosha-vue-toastify'
  import 'mosha-vue-toastify/dist/style.css'
import {handleFileChange,uploadToCloudinary,asyncRequest} from "@/composables/mixins"

const smsImage = ref('')
const smsMessage = ref('')
const smsSubject = ref('')
const selectedImage = ref('')
const img = ref('')
const isLoading = ref(false)

const closed = ref(false)


const emit = defineEmits('close');


const toast = (message) => {
            createToast(message)
        }


const handleImageUpload = async(event) => await handleFileChange(event,selectedImage,img)

const sendBulkSms = async()=>{

    const {secure_url} = await uploadToCloudinary(selectedImage.value);
    if(!secure_url) return alert("failed to upload file");
    isLoading.value = true

    const options = {
        msg: smsMessage.value ,
        subject: smsSubject.value,
        image: secure_url, // New field to store image data
    }
    console.log(options)
    try {
       const data = await fetch('https://backend.unboxedparty.com/api/email/send',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(options)
       })

       isLoading.value = false
       if(data.success) toast.value("Email sent successfully")

       console.log(data)
    }catch(e){
        console.log(e)
      isLoading.value = false
      toast.value("Email sending failed")
    }
}


</script>


<style scoped>



@media screen and (max-width: 768px) {
  .cart-icon {
    font-size: 20px;
  }
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  overflow-y: scroll;
}

.modal-content {
  width: 80vw;
  height: 80vh;
  background-color:  rgba(11, 9, 9, 0.9);
  border-radius: 5px;
  padding: 20px;
  overflow-y: scroll;
  z-index: 999999999999;
}

.modal-close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  /* background-color: red; */
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.modal-close-button i {
  padding: 5px;
}


@media screen and (max-width: 768px) {
  .modal-content {
    width: 100vw;
    height: 90vh;
  }
}



.modal-wrapper {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.modal-wrapper.active {
  opacity: 1;
}
</style>