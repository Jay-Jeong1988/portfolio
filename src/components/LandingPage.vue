<template>
  <div class="LandingPage">
    <Navbar></Navbar>
    <div class="banner">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <section class="aboutUs">
      <div class="texts">
        <div>
          <h3>Hi ! I am Jay, <br/>a growing developer.</h3>
          <p>I am a full stack web developer with 2 years of experience(2020). I  studied coding at CodeCore Web Developer College and successfully graduated with my Diploma of Web Development. After graduation, I  worked as a front-end web developer at a marketing company from 2018-2019, then worked on my own to improve my development skills. My next goal is to get a development job in North America. I hope to work long-term for my next company to advance my career in the tech industry.</p>
        </div>
      </div>
      <div class="swiperContainer">
        <AboutMeSwiper :photoUrls="aboutMePhotoUrls"/>
      </div>
    </section>
    <StaffsSection/>
    <ProjectsSection/>
    <section class="location">
      <div>
        <h2>Where I Am</h2>
      </div>
      <div class="map">
        <GmapMap
          ref="mapRef"
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: true,
            fullscreenControl: true,
            disableDefaultUi: false
          }"
          :center="{lat:49.327973, lng:-123.141709}"
          :zoom="10"
        >
          <GmapMarker
            :icon="{ 
            url: require('../assets/images/home.svg'),
            size: {width: 40, height: 40, f: 'px', b: 'px'},
            scaledSize: {width: 40, height: 40, f: 'px', b: 'px'},
            }"
            :position="{lat:49.327973, lng:-123.141709}"
            :clickable="true"
            @mouseover="showTooltip=true"
            @mouseout="showTooltip=false"
            @click="showTooltip=!showTooltip"
          />
        </GmapMap>
        <div class="customTooltip" v-if="showTooltip">
          <p>935 Marine Drive, West Vancouver</p>
          <p style="font-size: 1.2em">
            <b>778 792 1407</b>
          </p>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="buttons">
        <button class="navigateToTop" @click="scrollToTop">
          <img src="../assets/images/up-arrow.svg" alt="up arrow icon" />
        </button>
        <a href="tel:+1-778-792-1407">
          <button class="phoneNumber">
            <img src="../assets/images/phone-call.svg" alt="phone icon" />
          </button>
        </a>
      </div>
      <div class="booknow">
        <BookingModal/>
      </div>
    </section>
    <section class="credit">
      <p>©2020 Jay Jeong's Portfolio Website</p>
    </section>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import ProjectsSection from "./ProjectsSection";
import BookingModal from "./BookingModal";
import AboutMeSwiper from "./AboutMeSwiper";
import StaffsSection from "./StaffsSection"
export default {
  name: "LandingPage",
  data() {
    return {
      hoverOnOwner: false,
      hoverOnCoach: false,
      showTooltip: false,
      aboutMePhotoUrls: [
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/laptop.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage00.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage01.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage02.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage03.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage04.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage05.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage06.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage07.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage08.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage09.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage10.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage11.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage13.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage14.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage15.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage16.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage17.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage18.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage19.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage20.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage21.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024,fo-bottom/aboutMeImage22.jpg",
        "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage23.jpg",

      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    },
    handleHashChange() {
      if (!window.location.hash) {
        this.$store.state.swiperOn = false;
        this.$store.state.bookingModalShow = false;
        this.$store.state.projectModalShow = false;
        this.$store.state.staffModalShow = false;
      }else if (window.location.hash == this.$store.state.openProjectModalHashStateId){
        this.$store.state.bookingModalShow = false;
        this.$store.state.projectModalShow = true;
        setTimeout(()=> {this.$bvModal.show("projectModal")}, 100)
      }else if (window.location.hash == this.$store.state.openBookingModalHashStateId){
        this.$store.state.bookingModalShow = true;
        setTimeout(()=> {this.$bvModal.show("bookingModal")}, 100)
      }else if (window.location.hash == this.$store.state.openStaffModalHashStateId){
        this.$store.state.staffModalShow = true;
        setTimeout(()=> {this.$bvModal.show("staffModal")}, 100)
      }
    }
  },
  computed: {},
  mounted() {
    this.handleHashChange()
    window.onhashchange = () => {
      this.handleHashChange()
    }
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 49.327973, lng: -123.141709 });
    });
    this.$root.$on("bv::modal::hide", () => {
      window.history.back();
    });
  },
  components: { Navbar, ProjectsSection, BookingModal, AboutMeSwiper, StaffsSection}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
button {
  border: none;
  background-color: transparent;
}
p {
  margin: 0;
}
.LandingPage {
  background-color: rgb(36, 36, 36);
  font-family: "Jua", sans-serif;
}
.banner {
  /* position: absolute;
  left: 0; */
  width: 100%;
  height: 57vw;
  background-position: bottom center;
  background: url("http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-2000e-usm-2-2-0.8-0.024/banner1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner img {
  width: 25em;
}
.aboutUs {
  display: flex;
  max-height: 47vw;
}
.aboutUs > div {
  width: 50%;
}
.aboutUs .swiperContainer {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-7-3/concrete_bg.jpg");
}
.aboutUs .texts {
  padding: 3em;
  height: 47vw;
  display: flex;
  justify-content: center;
}
.aboutUs .texts > div {
  color: rgb(170, 170, 170);
  font-size: 1.3rem;
  font-family: sans-serif;
  overflow: hidden;
}
.aboutUs .texts > div > h3 {
  color: rgb(170, 170, 170);
  font-size: 2.5em;
  margin-bottom: 1em;
  text-shadow: 1px 1px white;
}
.location > div:first-child {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 23vw;
}
.customTooltip {
  background-color: #f3fcec;
  border: solid 3px black;
  border-radius: 10px;
  position: absolute;
  padding: 1em;
  align-self: baseline;
  margin-top: 4em;
  text-align: center;
}
.map {
  position: absolute;
  z-index: 949;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-map-container {
  width: 100%; 
  height: 47vw;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  background-color: #eb644a;
  z-index: 1001;
  width: 100%;
  height: 17vw;
  padding: 0 3em;
  margin-top: 47vw;
}
.booknow button {
  background-color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em 2em;
  width: 10em;
  font-family: "Raleway", sans-serif;
}
.footer .buttons {
  display: flex;
}
.footer .buttons button {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  padding: 1em;
  margin: 0 0.7em;
}
.footer .buttons img {
  width: 2.5em;
}
.credit {
  background-color: white;
  min-height: 2em;
  font-size: 1em;
  color: rgb(152, 152, 152);
  padding: 0.5em 2.5em;
  text-align: end;
}
@media only screen and (max-width: 924px) {
  .banner {
    height: 85vw;
  }
  .aboutUs {
    display: block;
    max-height: unset;
  }
  .aboutUs > div {
    width: 100%;
  }
  .aboutUs .texts {
    padding: 3em 2em;
    font-size: 1.5em;
    min-height: 55vw;
    height: unset;
    max-height: 93vw;
    align-items: center;
  }
  .location > div:first-child {
    height: 26vw;
  }
  .vue-map-container {
    height: 64vw;
  }
  .footer {
    height: 23vw;
    margin-top: 64vw;
  }
}
@media only screen and (max-width: 740px) {
  .banner {
    height: 103vw;
  }
  .location > div:first-child {
    height: 37vw;
  }
  .vue-map-container {
    height: 74vw;
  }
  .footer {
    height: 33vw;
    margin-top: 74vw;
  }
}
@media only screen and (max-width: 600px) {
  .banner {
    background-position: 16%;
    height: 190vw;
  }
  .banner img {
    width: 18em;
  }
  .aboutUs div img {
    min-height: 130vw;
  }
  .aboutUs .texts {
    padding: 3em 2em;
    font-size: 1.3em;
    max-height: unset;
  }
  .aboutUs .texts h3 {
    font-size: 1.8em;
  }
  .footer {
    padding: 0 1em;
    min-height: 55vw;
    margin-top: 150vw;
  }
  .footer .buttons button {
    margin: 0 0.3em;
    padding: 0.7em;
  }
  .footer .buttons img {
    width: 2.5em;
  }
  .location > div:first-child {
    min-height: 67vw;
  }
  .vue-map-container {
    min-height: 150vw !important;
  }
}
</style>