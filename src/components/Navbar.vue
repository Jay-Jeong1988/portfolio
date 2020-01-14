<template>
  <div class="Navbar" :class="{show: !isWindowTop}">
    <div class="topContainer">
      <a id="homeLink" href>
        <img src="../assets/images/logo.png" />
      </a>
      <div class="navs" v-if="!isMobile">
        <button class="scrollTo" name="intro" @click="scrollTo">
          <p>About Me</p>
        </button>
        <button class="scrollTo" name="notice" @click="scrollTo">
          <p>My Projects</p>
        </button>
        <button class="scrollTo" name="location" @click="scrollTo">
          <p>Where I Am</p>
        </button>
        <button class="scrollTo" name="book" @click="scrollTo">
          <p>Direct Message</p>
        </button>
      </div>
      <div class="contactIcons">
        <span>
          <img
            @click="selectContact"
            src="../assets/images/email.svg"
            name="email"
            alt="email icon"
          />
          <ContactCard
            :type="contactType"
            v-if="isContactCardOpen && contactType==='email'"
            :iconClickedPosition="iconClickedPosition"
          />
        </span>
        <span>
          <img
            @click="selectContact"
            src="../assets/images/phone.svg"
            name="phone"
            alt="smartphone icon"
          />
          <ContactCard
            :type="contactType"
            v-if="isContactCardOpen && contactType==='phone'"
            :iconClickedPosition="iconClickedPosition"
          />
        </span>
        <a href="https://github.com/Jay-Jeong1988" target="_blank">
          <span>
            <img src="@/assets/images/github-image.svg" alt="github icon" name="github" />
          </span>
        </a>
      </div>
      <button class="toggleDropdownBtn" v-if="isMobile" @click="toggleDropdown">
        <img :src="dynamicToggleBtnImg" alt="dropdown icon" />
      </button>
    </div>
    <div class="dropdownContainer" :class="{show: showDropdown}">
      <button class="scrollTo" name="intro" @click="scrollTo">
        <p>About Me</p>
      </button>
      <button class="scrollTo" name="notice" @click="scrollTo">
        <p>My Projects</p>
      </button>
      <button class="scrollTo" name="location" @click="scrollTo">
        <p>Where I Am</p>
      </button>
      <button class="scrollTo" name="book" @click="scrollTo">
        <p>Contact</p>
      </button>
    </div>
  </div>
</template>
<script>
import ContactCard from "./ContactCard";
export default {
  name: "Navbar",
  data() {
    return {
      contactType: "",
      iconClickedPosition: "",
      isContactCardOpen: false,
      isWindowTop: true,
      showDropdown: false
    };
  },
  components: {
    ContactCard
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 600;
    },
    dynamicToggleBtnImg() {
      return this.showDropdown
        ? "/img/icons/cancel.svg"
        : "/img/icons/menu.svg";
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    scrollTo(e) {
      const scrollToName = e.currentTarget.getAttribute("name");
      const scrollPositions = this.isMobile
        ? {
            intro: 604,
            notice: 2270,
            location: 4495,
            book: 4847
          }
        : {
            intro: 614,
            notice: 1595,
            location: 2198,
            book: 2730
          };
      window.scrollTo({
        left: 0,
        top: scrollPositions[scrollToName],
        behavior: "smooth"
      });
      this.showDropdown = false
    },
    selectContact(e) {
      var clickedPosition = [e.clientX, e.clientY];
      var clickedType = e.target.name;
      this.contactType = clickedType;
      this.iconClickedPosition = clickedPosition;
      setTimeout(() => (this.isContactCardOpen = true), 0);
    }
  },
  created() {
  },
  mounted() {
    window.onscroll = () => {
      this.isWindowTop = window.scrollY <= 100;
    };
    var self = this;
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", function(e) {
      if (self.isContactCardOpen) {
        e.preventDefault();
        var contactCard = document.getElementById("ContactCard");
        if (!contactCard.contains(e.target)) self.isContactCardOpen = false;
      }
    });
  },
  props: ["totalItemCount", "checkedItemCount"]
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Jua&display=swap");
p {
  margin: 0;
}
.Navbar {
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  z-index: 950;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  font-family: "Raleway", sans-serif;
}
.topContainer {
  background: #0D1822;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  flex-wrap: nowrap;
  padding: 0.5rem 1.5rem;
  overflow: hidden;
  height: 100%;
}
.Navbar.show {
  opacity: 1;
  height: 6.874rem;
}
.navs button {
  margin-right: 2em;
  border: none;
  background-color: transparent;
  color: white;
}
.dropdownContainer {
  background: #0D1822;
  height: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.dropdownContainer.show {
  padding: 0.8rem 0.8rem;
  height: 10em;
  opacity: 1;
}
.dropdownContainer button {
  margin-left: auto;
  display: block;
  margin-bottom: 0.5em;
  color: white;
}
.rightSideContainer {
  display: flex;
  align-items: center;
}
#homeLink > img {
  width: 10em;
}
.contactIcons p {
  color: rgb(250, 250, 250);
  margin-right: 0.5em;
}
.buffer {
  display: none;
}
.contactIcons {
  display: flex;
  align-items: center;
}
.contactIcons img {
  width: 1.5em;
}
.contactIcons span {
  /* border-radius: 10px; */
  margin: 0 5px;
  padding: 0 2px;
  /* border: white solid 0.5px; */
}
.toggleDropdownBtn img {
  width: 2em;
}
@media only screen and (max-width: 600px) {
  .Navbar.show {
    background-color: white;
    height: 80px !important;
  }
  .topContainer {
    padding: 0.5em 0.8em;
  }
}
</style>