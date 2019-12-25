<template>
  <div class="navbar">
    <!-- <a id="homeLink" href>
      <img src="../assets/images/car.svg" />
    </a>-->
    <div class="statusSample">
      <span>
        <img :src="`/img/icons/scheduled.svg`" alt="white car" />
        <p>Scheduled</p>
        <p>예약</p>
      </span>
      <span>
        <img :src="`/img/icons/driving.svg`" alt="green car" />
        <p>Driving</p>
        <p>운행중</p>
      </span>
      <span>
        <img :src="`/img/icons/done.svg`" alt="red car" />
        <p>Done</p>
        <p>완료</p>
      </span>
    </div>
    <div class="contactIcons">
      <p>예약문의</p>
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
      isContactCardOpen: false
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
.statusSample img {
  width: 1.5rem;
  margin: -2px;
}
.statusSample span {
  display: flex;
  align-items: center;
  font-size: 0.7em;
  justify-content: space-between;
}
.statusSample p {
  margin: 0;
  margin-left: 5px;
}
.contactIcons p {
  color: rgb(250, 250, 250);
  margin: 0;
  margin-right: .5em;
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
    background-color: #343a40;
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