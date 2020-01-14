<template>
  <div class="CustomSwiper">
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
          clickable: true
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
.CustomSwiper {
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
.swiper-container > .swiper-button {
  right: 40px;
  width: 4em;
  height: 4em;
  background-size: cover;
}
.swiper-container > .swiper-button-prev {
  left: unset;
  top: 70%;
  background-image: url("../assets/images/left.svg");
}
.swiper-container > .swiper-button-next {
  top: 85%;
  background-image: url("../assets/images/right.svg");
}
.swiper-pagination-bullet-active {
  background: white !important;
}
</style>