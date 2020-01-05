<template>
  <div class="LandingPage">
    <Navbar></Navbar>
    <div class="banner">
      <img src="../assets/images/vippp_logo_white.png" alt="logo" />
    </div>
    <section class="aboutUs">
      <div>
        <p>
          About us
          Providing personal training and group fitness since 2006.
          Train with us in our fully equipped, custom-built gym in the heart of the City – in Braddon. We love coaching our clients in a supportive and motivating training environment, ensuring your training experience is rewarding and fulfilling.
          We have a broad range of training options to suit every one, including Personal Training, CrossFit and High Intensity Interval Training (HIIT29). At each session we focus on you! In personal training appointments we evaluate your strengths & weaknesses and tailor training programs that meet your needs and help you reach your fitness goals. Group training options including CrossFit and HIIT29 are supportive, challenging and importantly tailored to your fitness level.
        </p>
      </div>
      <div>
        <img
          src="http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/gbpp.jpeg"
          alt="interior pics"
        />
      </div>
    </section>
    <section class="staffs">
      <div>
        <h2>STAFF</h2>
      </div>
      <div @mouseover="hoverOnOwner = true" @mouseleave="hoverOnOwner = false">
        <p :class="{show: hoverOnOwner}">
          귀빈탁구클럽 관장
          <br />곽효월
        </p>
        <img
          src="http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/ownerPic-creamy.jpg"
          alt="owner pic"
        />
      </div>
    </section>
    <section class="menus">
      <div>
        <p>주차장사용은  주말은  탁구장주변  (단속없음)
주중엔  귀빈돌솥밥주차장에 사용가능시간  오전9시~11시까지
오후2시~5시까지
오후8시부터는  프리</p>
      </div>
      <div class="lesson">
        <img src="../assets/images/coach.svg" alt="coach icon" />
        <p>탁구 레슨</p>
      </div>
      <div>
        <img src="../assets/images/robot.svg" alt="robot icon" />
        <p>로봇 탁구</p>
      </div>
      <div>
        <img src="../assets/images/membership.svg" alt="membership card icon" />
        <p>멤버쉽</p>
      </div>
      <div>
        <img src="../assets/images/teamwork.svg" alt="networking icon" />
        <p>친목</p>
      </div>
      <div>
        <img src="../assets/images/new-arrivals.svg" alt="new arrival" />
        <p>새소식</p>
      </div>
    </section>
    <section class="location">
      <div>
        <h2>찾아오시는 길</h2>
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
          :center="{lat:36.366198, lng:127.380517}"
          :zoom="17"
          style="width: 100%; min-height: 70vh"
        >
          <GmapMarker 
          :icon="{ 
            url: require('../assets/images/ping-pong-racket.svg'),
            size: {width: 40, height: 40, f: 'px', b: 'px'},
            scaledSize: {width: 40, height: 40, f: 'px', b: 'px'},
            }"
          :position="{lat:36.366198, lng:127.380517}" 
          :clickable="true" />
        </GmapMap>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { gmapApi } from "vue2-google-maps";
export default {
  name: "LandingPage",
  data() {
    return {
      hoverOnOwner: false
    };
  },
  computed: {
    google() {
      return gmapApi;
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 36.366378, lng: 127.380517 });
    });
  },
  components: { Navbar }
};
</script>

<style>
.banner {
  /* position: absolute;
  left: 0; */
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-2000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg");
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
.aboutUs div p {
  color: rgb(170, 170, 170);
  padding: 4em;
  text-align: center;
  font-size: 1.3em;
}
.aboutUs div img {
  /* background-image: url('http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-2000e-usm-2-2-0.8-0.024/table-tennies.jpg');
  background-size: cover; */
  width: 100%;
}
.staffs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-7-3/concrete_bg.jpg");
}
.staffs > div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.staffs img {
  width: 100%;
}
.staffs img:hover {
  filter: brightness(0.6) saturate(0.5);
}
.staffs p {
  display: none;
  position: absolute;
  z-index: 980;
  font-size: 1.5em;
}
.staffs p.show {
  display: block;
}
.joinUs {
  width: 100%;
  min-height: 30vh;
  display: flex;
  text-align: center;
  align-items: center;
  color: white;
}
.joinUs p {
  padding: 3em;
}
.menus {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-7-3/concrete_bg.jpg");
}
.menus div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 35vh;
  padding: 1em;
}
.menus > div:not(:first-child):hover {
  transition: all 0.2s;
  background-color: rgba(249, 232, 252, 0.7) !important;
}
.menus p {
  margin: 0;
  margin-top: 1em;
  font-size: 1.3em;
}
.menus div:first-child {
  background-color: #0c1821 !important;
  grid-column: 1 / span 2;
  padding: 3em;
  color: white;
}
.menus div:nth-child(even) {
  background-color: rgb(216, 216, 216);
}
.menus div:nth-child(odd) {
  background-color: rgb(172, 172, 172);
}
.menus div img {
  width: 50%;
}
.location div:first-child {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
}
@media only screen and (max-width: 924px) {
  .menus {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .menus div:first-child {
    grid-column: 1 / span 3;
  }
}
@media only screen and (max-width: 767px) {
  .banner {
    background-position: 16%;
  }
  .banner img {
    width: 18em;
  }
  .aboutUs {
    display: block;
  }
  .aboutUs > div {
    width: 100%;
  }
  .aboutUs div p {
    padding: 3em;
    text-align: start;
  }
  .staffs {
    display: block;
  }
  .staffs > div {
    min-height: 22vh;
  }
  .joinUs p {
    text-align: start;
  }
  .menus {
    display: block;
  }
}
</style>