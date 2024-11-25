<template>

  <Testimonial />

  <v-container :class="$vuetify.display.smAndDown?'px-0':''" class="py-12 px-6" style="overflow:hidden">
    <h2 :style="$vuetify.display.smAndDown?'padding-top:100px;font-size:40px !important':'font-size: 60px'"
      style=" padding-bottom: 0px;color:#fff"
      class=" my-0 mb-12 coreupcard hidden text-center logoText font-weight-bold   px-5 ">Our Partners </h2>
    <v-row class="flex-wrap d-flex" wrap>
      <!-- <v-col class="pa-1 d-flex align-center justify-center" :cols="cols[5]">
                <v-img eager height="184" class="ma-a25o" max-width="300" width="100%" 
                src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500,h_500/v1683285416/reboot_luxuryc_place_xzbd3l.png"></v-img>
            </v-col> -->
      <v-col class="pa-1 d-flex align-center justify-center" :cols="cols[5]">
        <v-img eager height="184" max-width="320" width="100%"
          src="https://res.cloudinary.com/dpehz96bs/image/upload/c_fit,w_500,h_500/v1710232447/Artboard11_ea2gi4.png"></v-img>
      </v-col>
      <!-- <v-col class="pa-1 d-flex align-center justify-center"  :cols="cols[5]">
              <v-img eager height="184" max-width="300" width="100%" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1683286002/E_dey_place_ads_1_ftwgyc.png"></v-img>
            </v-col> -->
      <v-col class="pa-1 d-flex align-center justify-center" :cols="cols[5]">
        <v-img eager height="184" class="ma-a25o" max-width="300" width="100%"
          src="https://res.cloudinary.com/dpehz96bs/image/upload/c_fit,w_500,h_500/v1709808009/odogwu_nppldw.png"></v-img>
      </v-col>
    </v-row>

  </v-container>

  <div id="contact">

    <v-container style="position: relative" class="my-12 pa-6">
      <v-img width="300px" style="position: absolute; left: -120px; top: calc(50% - 150px)"
        src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679725847/Group_5_bunz8h.png"></v-img>
      <v-img width="300px" style="position: absolute; right: -120px; top: calc(50% - 150px)"
        src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679725850/Group_6_rrvh5z.png"></v-img>
      <v-card style="" :class="$vuetify.display.smAndDown ? 'pt-8 pb-4' :'pt-12 pb-8'"
        class="text-center cardStylea  pa-5">
        <h1 style="
            font-size: 40px !important;
            max-width: 800px;
            font-size: 64px;
            line-height: 81px;
          " class="herotitlea mx-auto">
          For more information about sponsorship and partnership
        </h1>

        <v-btn class="font-weight-bold text-capitalize mb-6 mt-8 text-white" size="x-large" rounded target="_blank"
          href="https://wa.me/+2349012770000?text= Hi%20" outline style="
            background: linear-gradient(
              132.03deg,
               #26a68c 14.22%,
               #0a3222 97.95%
            );
          ">Contact Us</v-btn>
      </v-card>
    </v-container>
    <v-container class="centerIt py-8">
      <v-row>
        <v-col class="text-center" :cols="cols[5]">
          <!-- <v-icon icon="fas fa-plus" /> -->
          <v-img eager class="mx-auto" height="auto" contain @click="$router.push('/')" width="auto" max-width="200"
            src="https://res.cloudinary.com/crushcontest-com/image/upload/v1684055372/Unboxed_Web_rggvdz.png"></v-img>


          <p style="font-size: 15px; max-width:" class="text-grey">
            The box is limitless. </p>

          <div class="py-12">
            <v-btn target="_blank" href="https://www.instagram.com/the_unboxedparty/" icon class="mr-4"
              variant="outlined"><v-icon icon="mdi:mdi-instagram" /></v-btn>

            <v-btn icon class="mr-4" variant="outlined" href="https://twitter.com/theunboxedparty"><v-icon
                icon="mdi:mdi-twitter" /></v-btn>

            <v-btn icon class="mr-4" variant="outlined" href="https://www.tiktok.com/@the_unboxedparty"><v-icon
                icon="mdi:mdi-music-note" /></v-btn>
            <v-btn icon class="mr-4" variant="outlined" href="https://www.youtube.com/@unboxedparty"><v-icon
                icon="mdi:mdi-youtube" /></v-btn>
          </div>

        </v-col>
        <v-col :cols="cols[4]">
          <v-row class="d-flex justify-end">
            <v-col :key="n" class="centerIt" v-for="n in footmenu" :cols="cols[6]">
              <h3 class="mb-3">{{ n.name }}</h3>
              <p style="font-size: 14px" class="py-1 text-grey"></p>
              <a v-for="(n, i) in n.links" :key="i" :href="n.link" class="text-right centerIt text-decoration-none">
                <p class="py-2  text-grey" style="font-size: 14px; width: 100%">
                  <span class="d-flex cnter">

                    <!-- <v-icon :icon="'mdi mdi-' + n.name" class="mr-1"></v-icon> -->
                    {{ n.title }}
                  </span>
                </p>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-img @click="$router.push('/shop')" eager style="cursor: pointer;" class="rounded-lg mt-12" height="auto" cover
        src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1698217127/unboxed/Unboxed_Thelma_1_qnjvmo.jpg"></v-img>

      <p class="text-center text-grey-darken-2 py-12" style="font-size: 12px">
        &copy Copyright 2023 Unboxed Party All Rights Reserved, A Subsidiary of
        KopyKat Dreams
      </p>
    </v-container>
  </div>
</template>
<style>
 .herotitlea {
    font-weight: 700;
    font-size: 58px;
    line-height: 81px;
    align-items: center;
    background: radial-gradient(
          102.82% 2444.7% at 95.38% 100.02%,
          #26a68c 0%,
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
@media only screen and (max-width: 768px) {
  .herotitlea {
      font-size: 30px !important;
      line-height: 45px !important;
      text-align: center;
    }
 .cnter{
    justify-content:center
  }
  }
  .cardStylea {
  border-radius: 50px !important;
  background: #ffffff21;
  backdrop-filter: blur(6px);
}
  
</style>
<script>
export default {
  computed: {
    displ() {
      return this.$vuetify.display;
    },
    cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [4, 12, 6, 4, 8, 4, 3]
        : md
        ? [4, 12, 12, 6, 8, 4, 3]
        : sm
        ? [6, 12, 12, 12, 12, 12, 12]
        : [6, 12, 12, 12, 12, 12, 12]
      },
      footmenu(){
         return [
        {name:'Menu', links: [
          {name: 'receipt', title: 'Home', link: '/'},
          {name: 'calendar',title:'Events', link:'/events' },
          // {name: 'shop',title:'Shop', link:'/shop' },
         {name: 'book', title: 'Quick Reads', link:'/articles'},
       {name: 'receipt', title: 'About us', link: '/about'},
      ]}, 
       {name:'Links', links: [{name: 'instagram',title:'Instagram', link:'https://www.instagram.com/the_unboxedparty/' },
        {name: 'twitter', title: 'Twitter', link:'https://twitter.com/theunboxedparty'},
        {name: 'tiktok', title: 'Tiktok', link:'https://www.tiktok.com/@the_unboxedparty'},
        {name: 'youtube', title: 'Youtube', link:'https://www.youtube.com/@unboxedparty'}
      ]},
         {name:'Support', links: [{name: 'mail',title:'Email', link:'mailto:admin@unboxedparty.com' }, {name: 'whatsapp', title: 'Whatsapp', 
         link:  "https://wa.me/+2349012770000?text= Hi%20"}, {name: 'phone', title: 'Phone', link: 'tel:+2349012770000'}]}]

    }  },
};
</script>
