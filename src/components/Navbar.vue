<template>
  <div class="navbar" :class="{show: !isWindowTop}">
    <a id="homeLink" href>
      <img src="../assets/images/vippp_logo.png" />
    </a>
    <div class="contactIcons">
      <span>
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
      </span>
    </div>
  </div>
</template>
<script>
import ContactCard from './ContactCard'
export default {
  name: "Navbar",
  data() {
    return {
      contactType: "",
      iconClickedPosition: "",
      isContactCardOpen: false,
      isWindowTop: true,      
    };
  },
  components: {
    ContactCard
  },
  computed: {
  },
  methods: {
    selectContact(e){
      var clickedPosition = [e.clientX, e.clientY]
      var clickedType = e.target.name
      this.contactType = clickedType
      this.iconClickedPosition = clickedPosition
      setTimeout(()=>this.isContactCardOpen = true, 0)
    },
  },
  mounted() {
    window.onscroll = ()=>{
        this.isWindowTop = window.scrollY <= 300;
    }
    var self = this
    var body = document.getElementsByTagName("body")[0]
      body.addEventListener("click", function(e){
        if(self.isContactCardOpen){
          e.preventDefault()
          var contactCard = document.getElementById("ContactCard")
          if (!contactCard.contains(e.target)) self.isContactCardOpen = false
        }
      })
  },
  props: ["totalItemCount", "checkedItemCount"]
};
</script>
<style scoped>
.navbar {
  background: #fff;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 950;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
  opacity: 0;
  transition: all .5s ease-in-out;
}
.navbar.show {
  opacity: 1;
  height: 6.874rem;
}
@media only screen and (max-width: 924px) {
}
.nav-menu button {
  background-color: transparent;
  border: none;
}
.rightSideContainer {
  display: flex;
  align-items: center;
}
#homeLink > img {
  width: 12em;
}
.contactIcons p {
  color: rgb(250, 250, 250);
  margin: 0;
  margin-right: .5em;
}
@media only screen and (max-width: 924px) {
  .buffer {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .navbar {
    background-color: white;
    height: 70px !important;
  }
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
</style>