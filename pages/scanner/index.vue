<template>
    <div class="" style="margin: 24px !important;display: flex; flex-direction: column; justify-content:center; align-items: center;">

        <div style="width: 100%;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold"> Tickets Scanner</h1>
          </div>
        </div>

        <div v-if="reveal == 1" @click="reveal++" class="tw-mt-20">
            <v-btn color="blue">Scan ticket</v-btn>
        </div>
        <div v-if="reveal == 2" style="max-width: 500px; border-radius: 20px">
            <qrcode-stream @detect="onDetect"></qrcode-stream>
        </div>
      
      <p v-if="scannedData" class="tw-mt-5">Scanned data: {{ scannedData[0].rawValue }}</p>
    </div>
</template>
  
<script>
    import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css';

  export default {
    setup () {
    const toast = (message) => {
        createToast(message)
    }
    return { toast }
   },
    components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
   },

    data() {
      return {
        scannedData: null,
        reveal:1,
      };
    },

   
    
    methods: {
        async verifyEvent(v){
            try{
                const data = await fetch(`https://backend.unboxedparty.com/api/verify_eventuser`,{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({code:v})
                }).then(res=>res.json())
                
                if(data.status){
                    this.toast(`${data.message}`)
                    this.reveal = 1
                }else{
                    this.toast(`${data.message}`)
                }

            }catch(e){
                console.log(e)

            }

        },
      
        async onDetect(detectedCodes)  {
            this.scannedData = detectedCodes;
            // Handle the scanned data, for example, send it to a backend server
            await this.verifyEvent(this.scannedData[0].rawValue)
        
            // or navigate to another page based on the scanned data
      },
     
    }
  };
</script>
  