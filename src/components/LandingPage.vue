<template>
  <div class="LandingPage">
    <Navbar></Navbar>
    <div class="banner">
      <img src="../assets/images/vippp_logo_white.png" alt="logo" />
    </div>
    <section class="aboutUs">
      <div class="texts">
        <h3>탁구장 소개</h3>
        <p>
          저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 저희 귀빈탁구클럽은 
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
        <h2>STAFFS</h2>
      </div>
      <div class="photoContainer owner" @mouseover="hoverOnOwner = true" @mouseleave="hoverOnOwner = false">
        <div class="overlay" :class="{show: hoverOnOwner}">
          <div>
            <p style="margin-bottom: 0"><small>귀빈탁구클럽</small></p>
            <p><small>관장</small></p>
            <p>곽효월</p>
          </div>
        </div>
      </div>
      <div class="photoContainer coach" @mouseover="hoverOnCoach = true" @mouseleave="hoverOnCoach = false">
        <div class="overlay" :class="{show: hoverOnCoach}">
          <div>
            <p style="margin-bottom: 0"><small>귀빈탁구클럽</small></p>
            <p><small>메인 코치</small></p>
            <p>???</p>
          </div>
        </div>
      </div>
    </section>
    <section class="menus">
      <div>
        <h2>알려 드립니다</h2>
        <p>주차장사용은  주말은  탁구장주변  (단속없음)
주중엔  귀빈돌솥밥주차장에 사용가능시간  오전9시~11시까지
오후2시~5시까지
오후8시부터는  프리</p>
      </div>
      <div class="lesson" name="lesson" @click="openModal">
        <img src="../assets/images/coach.svg" alt="coach icon" />
        <p>탁구 레슨</p>
      </div>
      <div name="question" @click="openModal">
        <img src="../assets/images/question.svg" alt="question mark" />
        <p>구장 정보</p>
      </div>
      <div name="membership" @click="openModal">
        <img src="../assets/images/membership.svg" alt="membership card icon" />
        <p>멤버쉽</p>
      </div>
      <div name="community" @click="openModal">
        <img src="../assets/images/teamwork.svg" alt="networking icon" />
        <p>친목</p>
      </div>
      <div name="newFeed" @click="openModal">
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
          :clickable="true"
          @click="showTooltip=!showTooltip"
           />
        </GmapMap>
        <div class="customTooltip" v-if="showTooltip">
          <p>대전광역시 서구 만년동 349번지 지하1층</p>
          <p style="font-size: 1.2em"><b>귀빈탁구클럽</b></p> 
          <p style="font-size: 1.2em"><b>010 6420 8888</b></p>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="buttons">
        <button class="navigateToTop" @click="scrollToTop">
          <img src="../assets/images/up-arrow.svg" alt="up arrow icon"/>
        </button>
        <button class="phoneNumber">
          <img src="../assets/images/phone-call.svg" alt="phone icon"/>
        </button>
        <!-- <button class="kakaotalk">
          <img src="../assets/images/kakao.svg" alt="kakaotalk icon"/>
        </button> -->
      </div>
      <div class="booknow">
        <button>
          <p>예약하기</p>
        </button>
      </div>
    </section>
    <section class="credit">
      <p>©2020 귀빈탁구클럽</p>
    </section>
    <ModalCard :modalShow="modalShow" :modalContent="modalContent" @closeModal="modalShow=false"/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import ModalCard from "./ModalCard"
export default {
  name: "LandingPage",
  data() {
    return {
      hoverOnOwner: false,
      hoverOnCoach: false,
      showTooltip:false,
      modalShow: false,
      modalContent: "",
    };
  },
  methods: {
    scrollToTop(){
      window.scrollTo({left:0,top:0,behavior: 'smooth'})
    },
    openModal(e){
      this.modalContent = e.currentTarget.getAttribute("name")
      this.modalShow = !this.modalShow
    }
  },
  computed: {
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 36.366378, lng: 127.380517 });
    });
    this.$root.$on("bv::modal::hide", () => {
      this.modalShow = false;
    });
  },
  components: { Navbar, ModalCard }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
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
.aboutUs .texts h3 {
  color: rgb(170, 170, 170);
}
.aboutUs .texts {
  color: rgb(170, 170, 170);
  padding: 3em;
  text-align: center;
  font-size: 1.3em;
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
  background-image: url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/ownerPic-creamy.jpg");
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
  min-height: 42vh;
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
.menus > div:first-child {
  background-color: #0c1821 !important;
  grid-column: 1 / span 2;
  padding: 3em;
  color: white;
}
.menus > div:nth-child(even) {
  background-color: rgb(216, 216, 216);
}
.menus > div:nth-child(odd) {
  background-color: rgb(172, 172, 172);
}
.menus div img {
  width: 50%;
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
.customTooltip p {
  margin: 0;
}
.map {
  position: absolute;
  z-index: 1000;
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
  background-color: #EB644A;
  z-index: 1001;
  width: 100%;
  min-height: 20vh;
  padding: 0 3em;
  margin-top: 70vh;
}
.footer button {
  border: none;
  background-color: transparent;
}
.booknow button {
  background-color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em 2em;
  width: 10em;
}
.booknow p {
  margin: 0;
}
.footer .buttons {
  display: flex;
}
.footer .buttons button {
  background-color: rgba(255, 255, 255,0.3);
  border-radius: 50%;
  padding: 1em;
  margin: 0 .7em;
}
.footer .buttons img {
  width: 2.5em;
}
.credit {
  background-color: white;
  min-height: 2em;
  font-size: 1em;
  color: rgb(152, 152, 152);
  padding: .5em 2.5em;
  text-align: end;
}
.credit p {
  margin: 0;
}
@media only screen and (max-width: 924px) {
  .menus {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .menus > div:first-child {
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
  .aboutUs div img {
    min-height: 60vh;
  }
  .aboutUs div p {
    padding: 1em;
    text-align: start;
  }
  .staffs {
    display: block;
  }
  .staffs > div:first-child {
    min-height: 22vh;
  }
  .photoContainer {
    min-height: 45vh;
  }
  .overlay.show {
    width: 100%;
    height: 45vh;
  }
  .joinUs p {
    text-align: start;
  }
  .menus {
    display: block;
  }
  .aboutUs .texts {
    padding: 1em;
    padding-top: 3em;
  }
  .footer {
    padding: 0 1em;
  }
  .footer .buttons button {
    margin: 0 0.3em;
    padding: .7em;
  }
  .footer .buttons img {
    width: 2.5em;
  }
}
</style>