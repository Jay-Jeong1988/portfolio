<template>
  <div class="LandingPage">
    <Navbar></Navbar>
    <div class="banner">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <section class="aboutUs">
      <div class="texts">
        <h3>Hi ! I am Jay, a growing developer.</h3>
        <p></p>
      </div>
      <div>
        <AboutMeSwiper :photoUrls="aboutMePhotoUrls"/>
      </div>
    </section>
    <section class="staffs">
      <div>
        <h2>OUR STAFFS</h2>
      </div>
      <div
        class="photoContainer owner"
        @mouseover="hoverOnOwner = true"
        @mouseleave="hoverOnOwner = false"
      >
        <div class="overlay" :class="{show: hoverOnOwner}">
          <div>
            <p style="margin-bottom: 0"></p>
            <p>
              <small>Web Developer</small>
            </p>
            <p>Jay Jeong</p>
          </div>
        </div>
      </div>
      <div
        class="photoContainer coach"
        @mouseover="hoverOnCoach = true"
        @mouseleave="hoverOnCoach = false"
      >
        <div class="overlay" :class="{show: hoverOnCoach}">
          <div>
            <p style="margin-bottom: 0">
              <small>Vancouver Developers</small>
            </p>
            <p>
              <small>Senior Developer</small>
            </p>
            <p>Randy</p>
          </div>
        </div>
      </div>
    </section>
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
          style="width: 100%; min-height: 70vh"
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
  },
  computed: {},
  mounted() {
    window.onhashchange = () => {
      if (!window.location.hash) {
        this.$store.state.bookingModalShow = false;
        this.$store.state.projectModalShow = false;
      }else if (window.location.hash == this.$store.state.openProjectModalHashStateId){
        this.$store.state.bookingModalShow = false;
        this.$store.state.projectModalShow = true;
        setTimeout(()=> {this.$bvModal.show("projectModal")}, 100)
      }else if (window.location.hash == this.$store.state.openBookingModalHashStateId){
        this.$store.state.bookingModalShow = true;
        setTimeout(()=> {this.$bvModal.show("bookingModal")}, 100)
      }
    }
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 49.327973, lng: -123.141709 });
    });
    this.$root.$on("bv::modal::hide", () => {
      window.history.back();
    });
  },
  components: { Navbar, ProjectsSection, BookingModal, AboutMeSwiper}
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
  height: 100vh;
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
}
.aboutUs > div {
  width: 50%;
}
.aboutUs .texts h3 {
  color: rgb(170, 170, 170);
  font-size: 2em;
}
.aboutUs .texts {
  color: rgb(170, 170, 170);
  padding: 3em;
  text-align: center;
  font-size: 1.8em;
  font-family: sans-serif;
  max-height: 85vh;
  overflow: hidden;
}
.aboutUs div img {
  width: 100%;
  min-height: 85vh;
  object-fit: cover;
}
.staffs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-7-3/concrete_bg.jpg");
  min-height: 40vh;
}
.staffs > div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.staffs h2 {
  font-family: "Raleway", sans-serif;
}
.photoContainer {
  background-size: cover;
  width: 100%;
  height: 100%;
}
.photoContainer.owner {
  background-image: url("http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/image.png");
}
.photoContainer.coach {
  background-image: url("https://cdn.clipart.email/e18613dfcd8eefadcab305c9d921fd33_silhouette-question-mark-at-getdrawingscom-free-for-personal-_615-456.jpeg");
}
.staffs .overlay {
  display: none;
  position: absolute;
  z-index: 949;
  font-size: 1.5em;
  background-color: rgba(0, 0, 0, 0.5);
  width: 25%;
  height: 40vh;
  font-family: "Do Hyeon", sans-serif;
}
.staffs .overlay.show {
  display: flex;
  justify-content: center;
  align-items: center;
}
.location > div:first-child {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  background-color: #eb644a;
  z-index: 1001;
  width: 100%;
  min-height: 20vh;
  padding: 0 3em;
  margin-top: 70vh;
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
  .aboutUs {
    display: block;
  }
  .aboutUs > div {
    width: 100%;
  }
  .aboutUs .texts {
    padding: 1em;
    padding-top: 3em;
    font-size: 1.5em;
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
    min-height: 160vw;
  }
  .aboutUs div p {
    padding: 1em;
    text-align: start;
  }
  .staffs {
    display: block;
  }
  .staffs > div:first-child {
    min-height: 45vw;
  }
  .photoContainer {
    min-height: 100vw;
  }
  .overlay.show {
    width: 100%;
    height: 100vw;
  }
  .aboutUs .texts {
    padding: 1em;
    padding-top: 3em;
    font-size: 1.3em;
    max-height: 170vw;
  }
  .footer {
    padding: 0 1em;
    min-height: 42vw;
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
    min-height: 60vw;
  }
  .vue-map-container {
    min-height: 150vw !important;
  }
}
</style>