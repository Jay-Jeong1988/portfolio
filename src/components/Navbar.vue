<template>
  <div class="navbar">
    <!-- <a id="homeLink" href>
      <img src="../assets/images/car.svg" />
    </a> -->
    <div class="statusSample">
      <span><img :src="`/img/icons/scheduled.svg`" alt="white car"/><p>Scheduled</p><p> 예약</p></span>
      <span><img :src="`/img/icons/driving.svg`" alt="green car"/><p>Driving</p><p> 운행중</p></span>
      <span><img :src="`/img/icons/done.svg`" alt="red car"/><p>Done</p><p> 완료</p></span>
    </div>
    <div class="warning">
      <p>현재는 중형차만 보유하고 있는 관계로 대형 이사짐은 운반이 불가합니다.</p>
        <p>차량: Toyota Camry Le/ 4도어 5인석(운전석 포함)/ 트렁크 용량: 대형 캐리어 x 4</p> 
    </div>
  </div>
</template>
<script>
// import DigitalClock from "./DigitalClock";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  components: {
    // DigitalClock
  },
  computed: {
    // pad() {
    //   var s = this.checkedItemCount + "";
    //   var size = `${this.totalItemCount}`.length;
    //   while (s.length < size) s = "0" + s;
    //   return s;
    // }
  },
  methods: {},
  created() {},
  props: ["totalItemCount", "checkedItemCount"]
};
</script>
<style scoped>
.navbar {
  background: #ffffff;
  background-color: #0d1822;
  background-size: 100%;
  width: calc(100vw - 16em);
  height: 4.5em;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 950;
  border-bottom: 1px solid rgb(211, 211, 211);
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
}
@media only screen and (max-width: 924px) {
  .navbar {
    width: 100vw;
  }
}
.nav-menu button {
  background-color: transparent;
  border: none;
}
.rightSideContainer {
  display: flex;
  align-items: center;
}
#twitter {
    margin-left: 1em;
}
#twitter > img {
  width: 1.8em;
}
#homeLink {
  display: none;
}
#homeLink > img {
  width: 2.5em;
}
.statusSample {
  justify-content: space-around;
  color: white;
  font-weight: lighter;
}
.statusSample img{
  width: 1.5rem;
  margin: -2px;
}
.statusSample span {
  display: flex;
  align-items: center;
  font-size: .7em;
  justify-content: space-between;
}
.statusSample p {
  margin: 0;
  margin-left: 5px;
}
.warning p {
  color: rgb(200,200,200);
  margin: 0;
}
@media only screen and (max-width: 924px) {
  #homeLink {
    display: block;
  }
  #progress * {
    font-size: 18px;
  }
  .buffer {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .navbar {
    background-color: #343A40;
  }
  .warning {
    display: none;
  }
}
</style>