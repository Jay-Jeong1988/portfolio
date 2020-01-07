<template>
  <div class="Navbar" :class="{show: !isWindowTop}">
    <div class="topContainer">
      <a id="homeLink" href>
        <img src="../assets/images/vippp_logo.png" />
      </a>
      <div class="navs" v-if="!isMobile">
        <button class="scrollTo" name="intro" @click="scrollTo">
          <p>탁구장 소개</p>
        </button>
        <button class="scrollTo" name="notice" @click="scrollTo">
          <p>알려 드립니다</p>
        </button>
        <button class="scrollTo" name="location" @click="scrollTo">
          <p>찾아오시는 길</p>
        </button>
        <button class="scrollTo" name="book" @click="scrollTo">
          <p>예약하기</p>
        </button>
      </div>
      <div class="contactIcons">
        <!-- <span>
          <img @click="selectContact" src="@/assets/images/email.svg" alt="email icon" name="email"/>
          <ContactCard :type="contactType" v-if="isContactCardOpen && contactType==='email'" :iconClickedPosition="iconClickedPosition"/>
        </span>
        <span>
          <img @click="selectContact" src="../assets/images/smartphone.svg" name="phone" alt="smartphone icon" />
          <ContactCard :type="contactType" v-if="isContactCardOpen && contactType==='phone'" :iconClickedPosition="iconClickedPosition"/>
        </span>
        <span>
          <img @click="selectContact" src="../assets/images/kakao-talk.svg" name="katalk" alt="kakaotalk icon" />
          <ContactCard :type="contactType" v-if="isContactCardOpen && contactType==='katalk'" :iconClickedPosition="iconClickedPosition"/>
        </span>-->
      </div>
      <button class="toggleDropdownBtn" v-if="isMobile" @click="toggleDropdown">
        <img src="../assets/images/menu.svg" alt="dropdown icon" />
      </button>
    </div>
    <div class="dropdownContainer" :class="{show: showDropdown}">
      <button class="scrollTo" name="intro" @click="scrollTo">
        <p>탁구장 소개</p>
      </button>
      <button class="scrollTo" name="notice" @click="scrollTo">
        <p>알려 드립니다</p>
      </button>
      <button class="scrollTo" name="location" @click="scrollTo">
        <p>찾아오시는 길</p>
      </button>
      <button class="scrollTo" name="book" @click="scrollTo">
        <p>예약하기</p>
      </button>
    </div>
  </div>
</template>
<script>
// import ContactCard from './ContactCard'
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
    // ContactCard
  },
  computed: {
    isMobile(){
      return window.innerWidth <= 600
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    scrollTo(e) {
      const scrollToName = e.currentTarget.getAttribute("name");
      const scrollPositions = {
        intro: 607,
        notice: 1505,
        location: 2108,
        book: 2700
      };
      window.scrollTo({
        left: 0,
        top: scrollPositions[scrollToName],
        behavior: "smooth"
      });
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
    // if (window.innerWidth < 600) this.isMobile = true
  },
  mounted() {
    window.onscroll = () => {
      this.isWindowTop = window.scrollY <= 200;
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
  background: #fff;
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  z-index: 950;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  font-family: "Jua", sans-serif;
}
.topContainer {
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
}
.dropdownContainer {
  background-color: white;
  height: 0;
  opacity: 0;
  transition: all .5s ease-in-out;
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
  border-radius: 10px;
  margin: 0 5px;
  padding: 0 2px;
  border: white solid 0.5px;
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