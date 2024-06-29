<template>
    <div>
      <v-card class="pa-0 ma-0" color="black" flat min-height="100vh">
        <div style="position:relative" class="">
     
     <div
     v-if="$vuetify.display.mdAndUp"
       style="
         position: absolute;
         z-index: -1;
         opacity: 0.2;
         height: 100%;
         display: flex;
         width: 100%;
         justify-content: center;">
              <div style="height: 60vh;
 position: absolute;
 width: 100%;
 bottom: 0;
 background: linear-gradient(360deg, black, transparent);
 z-index: 2;"></div>
       <video
         id="heroVideo"
         :style="$vuetify.display.smAndDown ? ' width: 1365px ' : ' width: 100%'"
         style="
           position: absolute;
           top: 0;
           scale: 1.2;
           height: 100vh;
           z-index: 1;
         "
         autoplay
         muted
         loop
       >
         <source
           src="https://res.cloudinary.com/crushcontest-com/video/upload/v1680267203/WhatsApp_Video_2023-03-31_at_8.40.28_AM_pvaijr.mp4"
         />
       </video>
       <!-- <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"></v-img></v-avatar> -->
     </div>
  </div>
        <v-container class="pa-0" style="position: relative; max-width: 990px">
          <div
            style="width: 100%; min-height: 100vh"
            class="pa-6 d-flex justify-center align-center"
          >
            <v-row
              no-gutters
              style="position: relative"
              class="d-flex  justify-center"
            >
           
              <v-col style="position: relative" class="d-flex justify-center" cols="12" >
                <v-card
                  width="100%"
                  color=""
                  max-width="450" style="position:relative"
                  height="auto"
                  class=" pa-0">


<div class="">
	<div class="">
	</div>
	<div class="">

		<v-img v-if="ticket" eager :src="myevent.image" alt="Movie: Only God Forgives" >
      <div style="position:absolute" class="w-100 h-75 d-flex justify-center align-center">
<div>

  <vue-qrcode :width="150" :height="150" color="#ec38bc"
  :value="$route.params.id"/>
  <h1 style=" text-shadow: 0 0 15px black;" class="text-center text-white">{{ $route.params.id }}</h1>
</div>
    </div>
    </v-img>
	</div>
	<div>

  <v-table v-if="!errort" class="px-1" theme="dark" style="width: 100%;background: #0f0f0f">
    <thead>

		<tr>
			<th  class="text-center px-0 font-weight-black text-capitalize" style="letter-spacing:2px;font-size:14px">PRICE</th>
			<th class="text-center px-0 font-weight-black text-capitalize" style="letter-spacing:2px;font-size:14px">DATE</th>
			<th class="text-center px-0 font-weight-black text-capitalize" style="letter-spacing:2px;font-size:14px">TIME</th>
			<th class="text-center px-0 font-weight-black text-capitalize" style="letter-spacing:2px;font-size:14px">ADMIT</th>
		</tr>
    </thead>
    <tbody>

		<tr>
      
			<td style="font-size:14px" class="text-grey-darken-1 font-weight-bold text-center">
        <span v-if="!loading">
          
          {{amount> 0 ? 'N'+amount * qty : 'Free'}}
        </span>
        <v-progress-circular size="13" indeterminate v-if="loading"></v-progress-circular>
        
      </td>
			<td style="font-size:14px" class="text-grey-darken-1 px-1 font-weight-bold text-center">
        <span v-if="!loading">
        
        {{ events[selected].date }}
      </span>
      <v-progress-circular size="13" indeterminate v-else></v-progress-circular>

    </td>
			<td style="font-size:14px" class="text-grey-darken-1 px-1 font-weight-bold text-center">
        <span v-if="!loading">
        
        {{ events[selected].time }}
      </span>
      <v-progress-circular size="13" indeterminate v-else></v-progress-circular>
</td>
			<td style="font-size:14px" class="text-grey-darken-1 px-1 font-weight-bold text-center">     
         <span v-if="!loading">

{{ qty }}
</span>
<v-progress-circular size="13" indeterminate v-if="loading"></v-progress-circular>
</td>
      
		</tr>
    </tbody>
	</v-table>
	</div>

</div>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <p>
  
</p>
        </v-container>
        <v-dialog width="100%" max-width="310" v-model="dialog">
          <a
            style="text-decoration: none"
            href="https://www.instagram.com/the_unboxedparty/"
            target="_blank"
          >
            <v-card to="" color="#220744">
              <v-card-text class="text-center">
                <div
                  v-if="booked"
                  style="font-family: 'Permanent Marker', cursive !important;"
                  class="px-3 text-body-1 text-white font-weight-medium text-h4"
                >
                  Your reservation has been booked successfully
                </div>
                <div 
                  style="font-family: 'Permanent Marker', cursive !important"
                  class="px-3 text-white text-h3  text-center"
                >
                  <p
                    class="font-weight-bold"
                    style="
                      text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0;
                      font-family: 'Permanent Marker', cursive !important;">
                    Follow us on instagram
                  </p>
                  <div    style="
                      /* text-shadow: 4px 4px #ec38bc, 8px 8px #7303c0; */
                      font-family: 'Permanent Marker', cursive !important;
                    " class="mt-5 text-h5 text-center w-100 justify-center d-flex">
                    <v-icon color="red darken-2" class="mr-2"
                      >mdi-instagram</v-icon
                    >
                    @the_unboxedparty
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click.prevent="dialog = false"
                  >Close
                </v-btn>
              </v-card-actions>
            </v-card></a
            >
          </v-dialog>
        </v-card>
      
    </div>
  </template>
  <script>
  import VueQrcode from 'vue-qrcode'

  export default {
    components: {
    VueQrcode,
  },
    data: () => ({

 
      user: {},
      loading: true,
      consent: false,
      dialog: false,
      events: [
        {time: '08:00pm',date: '24th Nov. 2023',image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1699725435/Unboxed_Party_Neon_Fest_u6khvp.jpg'},
        {time: '07:00pm',date: '8th Dec. 2023',image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1700458125/Unboxed_Party_Meme_Party_2_usm8ub.jpg'},
        ],
      booked: false,
      errort: false,
      qty:0,
      ticket: null,
      amount:0,
      eventsLists:[],
      eventp:null,
      selected:0,
      myevent:null,
      event_id: null,
    }),

    computed:{
      events () {
      return this.$store.state.myevents.list
    },
      eventsList () {
      return this.$store.state.myevents.list.filter(event =>  event.on_sale === "1")
    },
    },

    mounted() { 
      // console.log('IMG',this.eventsList[0].image)
      this.getQty()
      setTimeout(() => {
        this.dialog = true;
      }, 10000);

      if(this.events.length){
        this.eventsLists = this.events.filter(el=>{
          return el.on_sale === "1"
        }).reverse()
      }
      this.eventp =  [...this.eventsList]
      this.getQty()
      
      
     

    },

    methods: {
      onDecode(decodedString) {
      this.qrCodeData = decodedString;
    },
      getQty(){
      this.loading = true
      fetch("https://backend.unboxedparty.com/api/get_qty?code="+this.$route.params.id, {
          method: "GET",
          headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'


          }})
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            throw new Error("Something went wrong");
            alert("An error has occurred");

          })
          .then((res) => {
           
    
            if(res.success.ticket.event_id < 7){
              this.errort = true

              alert('wrong code')
              return
            }else{
              this.errort = false
              this.loading = false
              this.qty = res.success.ticket.qty
              this.ticket = res.success.ticket
              this.amount = parseInt(res.success.ticket.amount)
              this.event_id = res.success.ticket.event_id
              this.myevent = this.eventp.find(e => e.id == parseInt(this.event_id))
              console.log('ppp', this.myevent)
            }
          })
          .catch(() => {
            // alert("An error has occurred");
            this.errort = true
            this.loading = false;
          });
        
    },
      
    },
  };
  </script>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  .v-input__control {
    display: flex;
    grid-area: control;
    box-shadow: 4px 4px #ec38bc, 8px 8px #7303c0;
  }



img {
  max-width: 100%;
  height: auto;
}

.ticket {
  width: 300px;
  height: 500px;
  background-color: white;
  margin: 25px auto;
  position: relative;
}

.holes-top {
  height: 50px;
  width: 50px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: -25px;
}
.holes-top:before, .holes-top:after {
  content: "";
  height: 50px;
  width: 50px;
  background-color: transparent;
  position: absolute;
  border-radius: 50%;
}
.holes-top:before {
  left: -150px;
}
.holes-top:after {
  left: 150px;
}

.holes-lower {
  position: relative;
  margin: 25px;
  border: 1px dashed #aaa;
}
.holes-lower:before, .holes-lower:after {
  content: "";
  height: 50px;
  width: 50px;
  background-color: transparent;
  position: absolute;
  border-radius: 50%;
}
.holes-lower:before {
  top: -25px;
  left: -50px;
}
.holes-lower:after {
  top: -25px;
  left: 250px;
}

.title {
  padding: 50px 25px 10px;
}

.cinema {
  color: #aaa;
  font-size: 22px;
}

.movie-title {
  font-size: 50px;
}

.info {
  padding: 15px 12px;
}

table {
  width: 100%;
  font-size: 18px;
  margin-bottom: 15px;
}
table tr {
  margin-bottom: 10px;
}
table th {
  text-align: left;
}
table th:nth-of-type(1) {
  width: 38%;
}
table th:nth-of-type(2) {
  width: 40%;
}
table th:nth-of-type(3) {
  width: 15%;
}
table td {
  width: 33%;
  font-size: 20px;
}

.bigger {
  font-size: 48px;
}

.serial {
  padding: 25px;
}
.serial table {
  border-collapse: collapse;
  margin: 0 auto;
}
.serial td {
  width: 3px;
  height: 50px;
}

.numbers td {
  font-size: 12px;
  text-align: center;
}
  * {
    font-family: "Permanent Marker", cursive !important;
  }
  </style>
  