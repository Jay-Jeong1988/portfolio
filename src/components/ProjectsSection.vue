<template>
  <section>
    <div class="menus">
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
      <div name="justmusic" @click="openProjectModal">
        <img src="../assets/images/play.svg" alt="play button icon" />
        <p>Just Music</p>
      </div>
      <div name="jjride" @click="openProjectModal">
        <img src="../assets/images/car.svg" alt="car icon" />
        <p>JJ Ride</p>
      </div>
      <div name="bdayLetter" @click="openProjectModal">
        <img src="../assets/images/letter.svg" alt="love letter icon" />
        <p>Birthday Letter</p>
      </div>
      <div name="idealio" @click="openProjectModal">
        <img src="../assets/images/restaurant.svg" alt="restaurant icon" />
        <p>Idealio</p>
      </div>
      <div name="codezen" @click="openProjectModal">
        <img src="../assets/images/zen-circle.svg" alt="zen circle icon" />
        <p>Codezen</p>
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
      <section class="photoSection" :style="`background-image: url(${computedContents.dynamicBg})`">
        <CustomSwiper v-if="$store.state.swiperOn" :photoUrls="computedContents.dynamicPhotoUrls" />
      </section>
      <section class="contentsContainer">
        <div class="contentsHeader">
          <button class="closeModalBtn" @click="closeModal">
            <img src="../assets/images/error.svg" alt="close button" />
          </button>
        </div>
        <div class="modalTextContents">
          <h3>{{computedContents.textTitle}}</h3>
          <p>{{computedContents.textContent}}</p>
          <a :href="computedContents.linkToProject" target="_blank">
            <h4>You can check {{computedContents.textTitle}} here</h4>
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
            <a :href="computedContents.githubUrl" target="_blank">
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
      contentsTypes: {
        justmusic: {
          title: "JustMusic - Random Youtube Music Video Player (Beta)",
          contents:
            "Hi all, I have just launched my first mobile app ever! The name of the app is JustMusic (please search as justmusic without a space between each word, not Just Music, on Play Store, otherwise it won't show 😭) and it is for android only. I first got the idea when I saw my dad trying to listen to music, but most modern music players were too difficult for him to use. I thought it'd be great if I could make a music player app with a simpler interface so other older people my dad's age can easily use it. It didn’t turn out as good as I had hoped, but I wanted to finish it anyways and here it is now 😄I've built it from scratch and spent 5 hours daily on average for 3 months to completion. \n\nTech stacks I used are: \n\nLanguages/Frameworks: \nDart/Flutter(Front-End)\nNode.js/Express.js/MongoDB/Mongoose(Back-End)\n\nFlutter Plugins: \ngeolocator\nfirebase\nyoutube_player_flutter \ndevice_info \nshared_preferences \nfluttertoast \ndotted_border \nimage_cropper \nimage_picker \nflutter_launcher_icons \nflutter_svg \nhtml_unescape \nads \n\nThe server is running on an AWS EC2 instance and because it is also my first time launching my own production server using AWS, it would be really appreciated if you could tell me what possible issues are when launching servers at AWS. Anyways, please check my app and let me know if anything could be improved. I'd be glad to hear all feedback! Thank you!",
          bgUrl:
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-bg00.png",
          photoUrls: [
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner00.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner01.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner02.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner03.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner04.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner05.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner06.png",
            "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner07.png"
          ],
          linkToProject:
            "https://play.google.com/store/apps/details?id=com.random.JustMusic",
          githubUrl: "https://github.com/Jay-Jeong1988/JustMusic"
        },
        jjride: {
          title: "Info",
          contents:
            "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.",
          bgUrl: "",
          photoUrls: [
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/table-tennies.jpg"
          ],
          linkToProject: "",
          githubUrl: "https://github.com/Jay-Jeong1988/JustMusic"
        },
        idealio: {
          title: "Membership",
          contents:
            "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.",
          bgUrl: "",
          photoUrls: [
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/tabletennis.jpg"
          ],
          linkToProject: "",
          githubUrl: "https://github.com/Jay-Jeong1988/JustMusic"
        },
        bdayLetter: {
          title: "Community",
          contents:
            'The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. ",Sir, you will undoubtedly end up in a drunkard\'s grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.',
          bgUrl: "",
          photoUrls: [
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
          ],
          linkToProject: "",
          githubUrl: "https://github.com/Jay-Jeong1988/JustMusic"
        },
        codezen: {
          title: "News",
          contents:
            "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
          bgUrl: "",
          photoUrls: [
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
          ],
          linkToProject: "",
          githubUrl: "https://github.com/Jay-Jeong1988/JustMusic"
        }
      }
    };
  },
  props: [],
  methods: {
    openProjectModal(e) {
      window.location.hash += this.$store.state.openProjectModalHashStateId;
      this.modalContentName = e.currentTarget.getAttribute("name");
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
    }
  },
  computed: {
    computedContents() {
      const contentType = this.contentsTypes[this.modalContentName];
      return {
        textTitle: contentType.title,
        textContent: contentType.contents,
        dynamicPhotoUrls: contentType.photoUrls,
        dynamicBg: contentType.bgUrl,
        linkToProject: contentType.linkToProject,
        githubUrl: contentType.githubUrl
      };
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.$store.state.swiperOn = true;
    }, 100);
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
.menus h2 {
  margin: 0;
}
.menus > div:not(:first-child) p {
  font-size: 2em;
}
.menus > div:first-child {
  font-size: 1.3em;
  display: block;
  text-align: start;
  overflow: hidden;
  background-color: #0c1821 !important;
  grid-column: 1 / span 2;
  padding: 2em 3em;
  padding-left: 5em;
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
  .menus > div:first-child {
    grid-column: 1 / span 3;
  }
}
@media only screen and (max-width: 600px) {
  .menus {
    display: block;
  }
  .menus div {
    max-height: unset;
    min-height: 90vw;
  }
  .menus > div:first-child {
    padding: 3em 2em;
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
</style>