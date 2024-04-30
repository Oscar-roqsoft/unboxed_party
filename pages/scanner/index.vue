<template>
    <div class="" style="margin: 24px !important;display: flex; flex-direction: column; justify-content:center; align-items: center;">

        <div style="width: 100%;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold">Scan Tickets</h1>
          </div>
        </div>
        <div style="max-width: 500px">
            <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
      
      <p v-if="scannedData">Scanned data: {{ scannedData }}</p>
    </div>
</template>
  
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
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
    methods: {
      onDecode(decodedData) {
        this.scannedData = decodedData;
        // Handle the scanned data, for example, send it to a backend server
        // or navigate to another page based on the scanned data
      }
    }
  };
</script>
  