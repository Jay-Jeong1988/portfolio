<template>
  <div class="AboutMeSwiper">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(url, i) in photoUrls" :key="i">
        <img :src="url" alt="about me images" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "AboutMeSwiper",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: 
        {
          el: ".swiper-pagination",
          clickable: false,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
  },
  props: [
    'photoUrls'
  ],
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
  },
  mounted() {
  }
};
</script>

<style>
.AboutMeSwiper {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
}
.AboutMeSwiper .swiper-container > .swiper-button {
  top: 85%;
  width: 4em;
  height: 4em;
  background-size: cover;
}
.AboutMeSwiper .swiper-container > .swiper-button-prev {
  left: unset;
  right: calc(1.5em + 4em + 1.5em);
  background-image: url("../assets/images/left.svg");
}
.AboutMeSwiper .swiper-container > .swiper-button-next {
  right: 1.5em;
  background-image: url("../assets/images/right.svg");
}
.AboutMeSwiper .swiper-pagination-bullet-active {
  background: white !important;
}
@media only screen and (max-width: 600px) {
  .AboutMeSwiper .swiper-container > .swiper-button {
    width: 3.5em;
    height: 3.5em;
  }
  .AboutMeSwiper .swiper-container > .swiper-button-prev {
    right: calc(1.5em + 3.5em + 1.5em);
  }
}
</style>