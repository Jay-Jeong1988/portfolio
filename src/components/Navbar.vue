<template>
  <div class="Navbar" :class="{show: !isWindowTop}">
    <div class="topContainer">
      <a id="homeLink" href>
        <img src="../assets/images/logo.png" />
      </a>
      <div class="navs" v-if="!$store.state.isMobile">
        <button class="scrollTo" name="aboutUs" @click="scrollTo">
          <p>About Me</p>
        </button>
        <button class="scrollTo" name="members" @click="scrollTo">
          <p>Members</p>
        </button>
        <button class="scrollTo" name="myProjects" @click="scrollTo">
          <p>My Projects</p>
        </button>
        <button class="scrollTo" name="references" @click="scrollTo">
          <p>References</p>
        </button>
        <button class="scrollTo" name="location" @click="scrollTo">
          <p>Where I Am</p>
        </button>
        <button class="scrollTo" name="footer" @click="scrollTo">
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
        <a href="https://www.linkedin.com/in/jay-jeong" target="_blank">
          <span>
            <img src="@/assets/images/linkedin.svg" alt="linkedin icon" name="github" />
          </span>
        </a>
      </div>
      <button class="toggleDropdownBtn" v-if="$store.state.isMobile" @click="toggleDropdown">
        <img id="dropdownBtn" :src="dynamicToggleBtnImg" alt="dropdown icon" />
      </button>
    </div>
    <div class="dropdownContainer" id="dropdownContainer" :class="{show: showDropdown}">
      <button class="scrollTo" name="aboutUs" @click="scrollTo">
        <p>About Me</p>
      </button>
      <button class="scrollTo" name="members" @click="scrollTo">
        <p>Members</p>
      </button>
      <button class="scrollTo" name="myProjects" @click="scrollTo">
        <p>My Projects</p>
      </button>
      <button class="scrollTo" name="references" @click="scrollTo">
        <p>References</p>
      </button>
      <button class="scrollTo" name="location" @click="scrollTo">
        <p>Where I Am</p>
      </button>
      <button class="scrollTo" name="footer" @click="scrollTo">
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
      showDropdown: false,
      sectionPositions: {}
    };
  },
  components: {
    ContactCard
  },
  computed: {
    dynamicToggleBtnImg() {
      return this.showDropdown
        ? "/img/icons/cancel.svg"
        : "/img/icons/menu.svg";
    }
  },
  methods: {
    setSectionPositions() {
      const sections = document.getElementsByTagName("section");
      for (let section of sections) {
        this.sectionPositions[section.id] = this.getOffsetTop(section);
      }
    },
    getOffsetTop(el) {
      const navbarHeight = window.innerWidth <= 600 ? 80 : 130;
      const sectionRect = el.getBoundingClientRect();
      return sectionRect.top + window.scrollY - navbarHeight;
    },
    toggleDropdown() {
      setTimeout(() => (this.showDropdown = !this.showDropdown), 0);
      //use async in order to make sure this toggles showDropdown AFTER the other event handler
    },
    scrollTo(e) {
      const sectionName = e.currentTarget.getAttribute("name");
      window.scrollTo({
        left: 0,
        top: this.sectionPositions[sectionName],
        behavior: "smooth"
      });
      this.showDropdown = false;
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
    window.addEventListener("resize", () => {
      this.setSectionPositions();
    });
  },
  mounted() {
    window.onscroll = () => {
      this.isWindowTop = window.scrollY <= 100;
    };
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", e => {
      if (this.isContactCardOpen) {
        e.preventDefault();
        var contactCard = document.getElementById("ContactCard");
        if (!contactCard.contains(e.target)) this.isContactCardOpen = false;
      }
      if (this.showDropdown) {
        e.preventDefault();
        var dropdown = document.getElementById("dropdownContainer");
        var dropdownBtn = document.getElementById("dropdownBtn");
        if (!dropdown.contains(e.target) && e.target != dropdownBtn)
          this.showDropdown = false;
      }
    });
    this.setSectionPositions();
  },
  props: []
};
</script>
<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Jua&display=swap")
.Navbar.show 
  opacity: 1
  height: 130px

.Navbar 
  width: 100%
  height: 0
  position: fixed
  top: 0
  z-index: 950
  opacity: 0
  transition: all 0.5s ease-in-out
  font-family: "Raleway", sans-serif
 
  > .topContainer 
    background: #0d1822
    display: flex
    justify-content: space-between
    align-items: center
    white-space: nowrap
    flex-wrap: nowrap
    padding: 0.5rem 1.5rem
    overflow: hidden
    height: 100%

    > #homeLink 
      > img 
        width: 10em

    > .navs 
      >button 
        margin-right: 2em
        border: none
        background-color: transparent
        color: white

    > .contactIcons 
      display: flex
      align-items: center

      p 
        color: rgb(250, 250, 250)
        margin-right: 0.5em

      img 
        width: 1.5em

      span 
        margin: 0 5px
        padding: 0 2px

    > .toggleDropdownBtn 
      img 
        width: 2em

  .dropdownContainer 
    background: #0d1822
    display: none
    height: 0
    opacity: 0
    transition: all 0.5s ease-in-out

  .dropdownContainer.show 
    display: block
    padding: 0.8rem 0.8rem
    height: 15em
    opacity: 1

    >button 
      margin-left: auto
      display: block
      margin-bottom: 0.5em
      color: white

@media only screen and (max-width: 600px) 
  .Navbar.show 
    background-color: white
    height: 80px !important
  
  .Navbar
    >.topContainer 
      padding: 0.5em 0.8em
      flex-wrap: no-wrap

      #homeLink 
        > img 
          width: 7em

</style>