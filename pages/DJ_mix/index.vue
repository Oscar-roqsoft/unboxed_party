<template>
    <v-card class="pa-0 ma-0" color="black" tile flat min-height="100vh">
     
      <div style="position:relative;    min-height: 100vh;" class="overflow-hidden">
       <div>
        <div
        v-if="$vuetify.display.mdAndUp"
          style="
            position: absolute;
            z-index: -1;
            opacity: 0.4;
            height: 100vh;
            display: flex;
            width: 100%;
            justify-content: center;">
                  <div style="z-index:5; scale:1.2;position: relative;height: 100vh;width:100%">
                  <div style="height:100%;
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        background: linear-gradient(360deg, black, transparent);
                        z-index: 6;">
                  </div>
                   </div>
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
     <Header />
    </div>

   

<v-container>
  <h1 class="mb-8 text-center  text-capitalize tw-text-2xl  tw-font-extrabold">DJ_Mix </h1>



    <v-row>

    <v-col cols="12" md="6" lg="4" class="mb-4" v-for="(item, i) in activeCategory === 'All' ? items : selecteditemsToD " :key="i">
    <v-card :to="'/shop/'+item.name" style="cursor: pointer;"  color="transparent" flat height="">
    <v-img  eager  max-width="500px"
            class="rounded-lg" height="400" width="100%" cover :src="'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_800/v1694578910/unboxed/'+ item.options[0].images[0] +'.png'"></v-img>
            <h3 class="font-weight-medium my-4 text-truncate text-white">{{item.name}}</h3>

    </v-card>
      </v-col>
    </v-row>

</v-container>

  </div>
  <Footer />
     </v-card>

</template>
<script>
import {useStore} from "@/stores/index"
export default {
  data() {
    return {
      myCategoryTabsValue: ['All','T-Shirts','Shorts','Hoodie','Joggers'],
      selecteditemsToD:[],
      activeCategory: 'All',
      store:useStore(),
    };
  },

  methods:{
    setActiveCategory(tab) {
      this.selecteditemsToD = this.$store.state.items.filter((item) =>  item.category.includes(tab))
     
      console.log(this.activeCategory)
    },
  },

  computed:{
      items () {
      return this.$store.state.items
    },
  }
}


</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,200&display=swap");

.godown{
  position:relative;top: 40px;
}
.goup{
  position:relative;bottom: 40px;
}
.scehimg{
  position:absolute;
  right:0;
  top:-50px;
  transform: rotate3d(-2, 39, 0, 180deg);

}
.shadow:before,
.shadow:after {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  border-radius: 2px;
  content: "";
  position: absolute;

  width: calc(100%);
  height: calc(100%);
  background: linear-gradient(
    45deg,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000
  );
  background-size: 400%;
  z-index: -1;
  animation: animate 20s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.shadow:after {
  filter: blur(20px);
}
.herotitle2 {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  display: flex;
  align-items: center;
}
.herotitle {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  
  align-items: center;

  background: radial-gradient(
        102.82% 2444.7% at 95.38% 100.02%,
        #a84efa 0%,
        rgba(255, 255, 255, 0) 32.73%,
        rgba(135, 135, 135, 0.506798) 81.48%,
        #131313 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.herotitleb {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  
  align-items: center;

  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.numberstyle {
  font-weight: 700;
  font-size: 38px;
  line-height: 60px;
  align-items: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.numberstyle2 {
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.text2 {
  font-size: 16px;
}
* {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

@media only screen and (max-width: 768px) {
  .scehimg{
  position:relative;
  /* right:0; */
  top:0px;
  transform: rotate3d(-2, 39, 0, 180deg);

}
  .herotitle {
    font-size: 40px !important;
    line-height: 55px !important;
    text-align: center;
  }
  .bigtext {
    font-size: 40px !important;
    line-height: 50px !important;
    text-align: center;
  }
  .herotitleb {
    font-size: 40px !important;
    line-height: 55px !important;
    text-align: center;
  }
  .text2 {
    font-size: 13px;
    line-height: 16px !important;
    text-align: center;
  }
  .logoText {
    font-size: 23px !important;
    line-height: 46px !important;
  }
  .herotitle2 {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }
  .cnter{
    justify-content:center
  }
  .centerIt {
    text-align: center !important;
  }
  .numberstyle {
    font-weight: 700;
    line-height: 46px;
    font-size: 28px;
  }
}
</style>