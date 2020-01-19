<template>
  <section class="ProjectsSection" id="myProjects">
    <div class="menus">
      <div>
      <div class="introduction">
        <h2>My Projects</h2>
        <p>
          <br />These are the list of my individual/group projects
          <br />I have worked on ever since I had started coding.
          <br />I didn't post the ones I had participated in a company.
          <br />*FYI, this static website is built with VueJS and Express.js.
          <a href="https://github.com/Jay-Jeong1988/portfolio" target="_blank">
            <small style="margin-left: 1em;white-space: nowrap;">Github --></small>
          </a>
        </p>
      </div>
      </div>
      <div name="justmusic" @click="openProjectModal">
        <img src="../assets/images/play.svg" alt="play button icon" />
        <p>Just Music (2019)</p>
      </div>
      <div name="jjride" @click="openProjectModal">
        <img src="../assets/images/car.svg" alt="car icon" />
        <p>JJ Ride (2019)</p>
      </div>
      <div name="idealio" @click="openProjectModal">
        <img src="../assets/images/restaurant.svg" alt="restaurant icon" />
        <p>Idealio (2018)</p>
      </div>
      <div name="codezen" @click="openProjectModal">
        <img src="../assets/images/zen-circle.svg" alt="zen circle icon" />
        <p>Codezen (2018)</p>
      </div>
    </div>
    <b-modal
      centered
      v-if="$store.state.projectModalShow"
      hide-header
      hide-footer
      dialog-class="menu"
      content-class="modalContent shadow-lg border-0 menu"
      body-class="p-0 menu"
      id="projectModal"
    >
      <section class="photoSection" :style="`background-image: url(${project.bgUrl})`">
        <CustomSwiper v-if="$store.state.swiperOn" :photoUrls="project.photoUrls" :videoUrls="videosForDifferentBrowser" />
      </section>
      <section class="contentsContainer">
        <div class="contentsHeader">
          <button class="closeModalBtn" @click="closeModal">
            <img src="../assets/images/error.svg" alt="close button" />
          </button>
        </div>
        <div class="modalTextContents">
          <h3>{{project.title}}</h3>
          <p>{{unescapedContents}}</p>
          <a :href="project.linkToProject" target="_blank">
            <h4>You can check {{project.title}} here</h4>
          </a>
        </div>
        <div class="functions">
          <div class="booknow">
            <button @click="openBookingModal">
              <p>DM</p>
            </button>
          </div>
          <div class="buttons">
            <a href="tel:+1-778-792-1407">
              <button>
                <img src="../assets/images/phone-call-orange.svg" alt="phone icon" />
              </button>
            </a>
            <a :href="project.githubUrl" target="_blank">
              <button>
                <img src="../assets/images/github-orange.svg" alt="github icon" />
              </button>
            </a>
          </div>
        </div>
        <div class="logo">
          <img src="../assets/images/logo-grey.png" />
        </div>
      </section>
      <template v-slot:modal-backdrop></template>
    </b-modal>
  </section>
</template>

<script>
import CustomSwiper from "./CustomSwiper";
export default {
  data() {
    return {
      projectModalShow: false,
      modalContentName: "justmusic", // Default Content Type
      project: {},
    };
  },
  props: [],
  methods: {
    openProjectModal(e) {
      this.$store.state.targetModalId = "projectModal"
      window.location.hash += this.$store.state.openProjectModalHashStateId;
      var modalContentName = e.currentTarget.getAttribute("name");
      this.fetchProject(modalContentName);
      setTimeout(() => (this.$store.state.swiperOn = true), 500);
    },
    openBookingModal() {
      window.location.hash += this.$store.state.openBookingModalHashStateId;
      this.$store.state.bookingModalShow = true;
      setTimeout(() => {
        this.$bvModal.show("bookingModal");
      }, 100);
    },
    closeModal() {
      this.$bvModal.hide("projectModal");
    },
    fetchProject(modalContentName) {
      let self = this;
      const productionRequestUrl = "http://jayjeong.xyz:8081/api/v1/projects/getOne"
      const devRequestUrl = "http://localhost:8081/api/v1/projects/getOne"
      const myRequestUrl = process.env.NODE_ENV === "production" ? productionRequestUrl : devRequestUrl;

      fetch(myRequestUrl + `/${modalContentName}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.project = data || {};
        })
        .catch(error => alert(error));
    }
  },
  computed: {
    unescapedContents(){
      var c = this.project.contents
      return c ? c.split("\\n").join("\n") : c
    },
    videosForDifferentBrowser(){
      var browsers = {
        IE: this.$browserDetect.isIE,
        Chrome: this.$browserDetect.isChrome,
        Safari: this.$browserDetect.isSafari,
      }
      var mp4 = this.project.videoUrls[0].mp4
      var webm = this.project.videoUrls[0].webm
      return browsers.IE || browsers.Safari ? mp4 : webm
    }
  },
  created() {
  },
  mounted() {
  },
  components: {
    CustomSwiper
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap");
.menus {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-7-3/concrete_bg.jpg");
}
.menus > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 26vw;
  padding: 1em;
}
.menus > div:first-child {
  grid-column: 1 / span 2;
  padding: 2em 3em;
  background-color: #0c1821 !important;
}
.menus > div:not(:first-child):hover {
  transition: all 0.2s;
  background-color: rgba(249, 232, 252, 0.7) !important;
}
.menus h2 {
  margin: 0;
}
.menus > div:not(:first-child) p {
  font-size: 2em;
  text-align: center;
}
.introduction {
  font-size: 1.3em;
  display: block;
  text-align: start;
  overflow: hidden;
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
.modal-dialog.menu {
  margin: 0;
  align-items: start;
}
.modal-content.menu {
  width: 100vw;
  height: 50vw;
  border-radius: 0;
  background-color: #e0e0e0;
}
.modal-body.menu {
  width: 100vw;
  height: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.modal-body.menu section {
  width: 50%;
  height: 100%;
}
.modal-body.menu * {
  font-family: "Do Hyeon", sans-serif;
}
.logo img {
  width: 10em;
}
.photoSection {
  background-size: cover;
}
.photoSection img {
  width: 90%;
  height: 90%;
  object-fit: cover;
}
.contentsContainer {
  padding: 1.5em;
  padding-bottom: 0;
  overflow: scroll;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.contentsHeader {
  align-self: flex-end;
}
.closeModalBtn img {
  width: 3.5em;
}
.modalTextContents {
  overflow-wrap: break-word;
  text-align: center;
  color: rgb(66, 63, 59);
  overflow: scroll;
  margin-bottom: 1.5em;
  padding: 0 1em;
}
.modalTextContents p {
  text-align: start;
  font-family: "Raleway", sans-serif !important;
  font-size: 0.9em;
  white-space: pre-wrap;
  margin-bottom: 1em;
}
.functions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.functions .booknow {
  margin: 0 0.5em;
}
.functions .booknow button {
  padding: 1em;
  width: 8em;
  background-color: transparent;
  border: solid 2px white;
  color: #d75a4a;
}
.functions .buttons button {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  padding: 0.5em;
  margin: 0 0.3em;
}
.functions .buttons img {
  width: 2.5em;
}
@media only screen and (max-width: 924px) {
  .menus {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .menus div:first-child {
    grid-column: 1 / span 3;
  }
  .menus > div {
    height: 40vw;
  }
}
@media only screen and (max-width: 740px) {
  .menus {
    grid-template-columns: 1fr 1fr;
  }
  .menus > div {
    height: 45vw;
  }
  .menus > div:first-child {
    grid-column: 1 / span 2;
    height: 58vw;
  }
  .menus > div:nth-child(4) {
    background-color: rgb(172, 172, 172);
  }
  .menus > div:nth-child(5) {
    background-color: rgb(216, 216, 216);
  }
  .modal-content.menu {
    height: auto;
  }
  .modal-body.menu {
    flex-direction: column;
    min-height: 100vh;
    height: auto;
  }
  .modal-body.menu .contentsContainer {
    width: 100%;
    min-height: 50vh;
  }
  .modal-body.menu .photoSection {
    width: 100%;
    height: 120vw !important;
  }
}
@media only screen and (max-width: 600px) {
  .menus {
    display: block;
  }
  .menus > div {
    height: 90vw;
    padding: 1em;
  }
  .menus > div:first-child {
    height: 130vw;
  }
  .menus > div:nth-child(4) {
    background-color: rgb(216, 216, 216);
  }
  .menus > div:nth-child(5) {
    background-color: rgb(172, 172, 172);
  }
}
</style>