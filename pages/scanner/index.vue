<template>
    <div class="" style="margin: 24px !important;display: flex; flex-direction: column; justify-content:center; align-items: center;">

        <div style="width: 100%;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold">Scan Tickets</h1>
          </div>
        </div>
        <div style="max-width: 500px; border-radius: 20px">
            <qrcode-stream @detect="onDetect"></qrcode-stream>

            
        </div>
      
      <p v-if="scannedData" class="tw-mt-5">Scanned data: {{ scannedData }}</p>
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
        scannedData: null
      };
    },

    watch(){

    },
    
    methods: {
      
        async onDetect(detectedCodes)  {
        this.scannedData = detectedCodes.rawValue;
        // Handle the scanned data, for example, send it to a backend server
        try{
                const data = await fetch(`https://backend.unboxedparty.com/api/verify_eventuser`,{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(this.scannedData)
                }).then(res=>res.json())
                
                if(data.status){
                    this.toast(`${data.message}`)
                }else{
                    this.toast(`${data.message}`)
                }

            }catch(e){
                console.log(e)

            }
    
       
        // or navigate to another page based on the scanned data
      },
     
    }
  };
</script>
  