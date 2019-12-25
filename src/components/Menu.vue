<template>
  <div id="menu">
    <div class="fixedContainer">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/JJ RIDE1.png" alt="logo" />
        </router-link>
      </div>
      <div class="filters">
        <button class="about" @click="goToAbout">
          <img src="../assets/images/about.svg" alt="about icon" />
          <p>소개</p>
          <p>About</p>
        </button>
        <button class="trips" @click="goToHome">
          <img src="../assets/images/travel.svg" alt="travel icon" />
          <p>예약현황</p>
          <p>Trips</p>
        </button>
        <button class="notification" @click="goToNotification">
          <img src="../assets/images/notification.svg" alt="notification icon" />
          <p>공지사항</p>
          <p>Notification</p>
        </button>
        <button class="payment" @click="goToPayment">
          <img src="../assets/images/payment.svg" alt="payment icon" />
          <p>결제방법</p>
          <p>Payment</p>
        </button>
        <button class="admin" @click="goToAdminPage" v-if="$store.state.isAdmin">
          <img src="../assets/images/admin.svg" alt="admin person icon" />
          <p>Admin</p>
        </button>
      </div>
      <div class="footers">
        <p>SERVICE CENTRE 24/7</p>
        <span>
          <img src="../assets/images/smartphone.svg" alt="smartphone icon" />
          <p>778 792 1407</p>
        </span>
        <span>
          <img src="../assets/images/kakao-talk.svg" alt="kakaotalk icon" />
          <p>hangma12</p>
        </span>
        <span>
          <img src="@/assets/images/email.svg" alt="email icon" />
          <p>heybros32@gmail.com</p>
        </span>
        <div class="checkAdmin">
          <div id="code">
            <input type="text" class="form-control" v-model="adminCode" v-on:input="verifyAdminCode">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      categories: [],
      adminCode: ""
    };
  },
  computed: {},
  methods: {
    switchPage() {},
    goToNotification() {
      this.$emit("closeMenu");
      this.$router.push("Notification");
    },
    goToHome() {
      this.$emit("closeMenu");
      this.$router.push("/");
    },
    goToPayment() {
      this.$emit("closeMenu");
      this.$router.push("/how-to-pay");
    },
    goToAdminPage() {
      this.$emit("closeMenu");
      this.$router.push("/admin");
    },
    goToAbout() {
      this.$emit("closeMenu");
      this.$router.push("/about");
    },
    verifyAdminCode(){
      this.$store.state.isAdmin = this.adminCode === process.env.VUE_APP_ADMINKEY
    }
  },
  created() {
    this.$store.commit("setAdmin");
  },
  mounted() {
  },
  props: []
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
#menu {
  min-width: 16em;
  border-right: solid 1px rgb(211, 211, 211);
}
@media only screen and (max-width: 924px) {
  #menu {
    display: none;
  }
}
.warning {
  display: none;
  position: absolute;
  padding: 1em;
}
.warning p {
  margin: 0;
  font-size: 1rem;
}
.notification {
  display: none;
}
@media only screen and (max-width: 600px) {
  .warning {
    display: block;
  }
  .notification {
    display: block;
  }
}
button {
  border: none;
  background-color: transparent;
}

.nav-menu:last-of-type {
  margin-bottom: 4em;
}
.fixedContainer {
  width: calc(16em - 1px);
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  justify-content: space-between;
}
.closeMenu {
  margin-bottom: 4em;
}
.closeMenu button img {
  width: 1em;
}
.closeMenu * {
  display: inline-block;
}
.logo img {
  width: 15em;
}
.filters img {
  width: 2em;
}
.filters p {
  margin: 0;
  margin-top: 0.5em;
  font-size: 1em;
}
.filters p:last-child {
  margin: 0;
}
.filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 7rem;
  width: inherit;
}
.filters > *:hover {
  transition: all 0.2s;
  background: rgba(245, 217, 250, 0.5);
}
.footers {
  text-align: center;
  padding-bottom: 8vh;
  background-color: rgb(240, 240, 240);
  width: 100%;
  padding-top: 1em;
  color: rgb(110, 110, 110);
  font-family: "Nanum Gothic", sans-serif;
}
.footers img {
  width: 1.2em;
  margin: 0 10px;
}
.footers span {
  display: flex;
  align-items: center;
  margin: 3px 0;
  margin-left: 1em;
}
.footers p {
  margin: 0;
}
</style>