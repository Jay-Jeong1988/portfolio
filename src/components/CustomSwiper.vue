<template>
  <div class="CustomSwiper">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
      <swiper-slide v-for="(url, i) in videoUrls" :key="`0${i}`">
        <video :src="url" loop onloadstart="this.volume=0.1"></video>
      </swiper-slide>
      <swiper-slide v-for="(url, i) in photoUrls" :key="i">
        <img :src="url" alt="project images" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "CustomSwiper",
  data() {
    return {
      hideElements: true,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: window.innerWidth <= 600, //neither computed nor vuex store data does not work here
        preventInteractionOnTransition: window.innerWidth >= 600,
        pagination: {
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
    slideChange() {
      if (this.previousSlideElement.tagName == "VIDEO") {
        this.previousSlideElement.pause();
        this.previousSlideElement.currentTime = 0;
      }
      if (this.currentSlideElement.tagName == "VIDEO") {
        this.currentSlideElement.play();
      }
    },
    playVideoOnReady() {
      if (this.currentSlideElement.tagName == "VIDEO") this.currentSlideElement.play();
    }
  },
  props: ["photoUrls", "videoUrls"],
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    currentSlideElement() {
      const currentSlide = this.swiper.slides[this.swiper.activeIndex]
      return currentSlide ? currentSlide.firstElementChild : {};
    },
    previousSlideElement() {
      const previousSlide = this.swiper.slides[this.swiper.previousIndex]
      return previousSlide ? previousSlide.firstElementChild : {};
    }
  },
  components: {},
  mounted() {
    this.playVideoOnReady();
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
.swiper-slide video {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .swiper-slide video {
    width: 110%;
  }
}
</style>