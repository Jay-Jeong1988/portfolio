<template>
  <div class="ContactCard" id="ContactCard">
    <div class="cardContainer" v-if="type==='phone'">
      <img src="../assets/images/smartphone.svg" alt="smartphone icon" />
      <p>778 792 1407</p>
    </div>
    <div class="cardContainer" v-if="type==='katalk'">
      <img src="../assets/images/kakao-talk.svg" alt="kakaotalk icon" />
      <p>hangma12</p>
    </div>
    <div class="cardContainer" v-if="type==='email'">
      <img src="@/assets/images/email.svg" alt="email icon" />
      <p>heybro32@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["type", "iconClickedPosition"],
  mounted(){
    var component = document.getElementById("ContactCard")
    var card = component.children[0]
    card.style.left = `${this.iconClickedPosition[0] - 100}px`
    card.style.top = `${this.iconClickedPosition[1] + 20}px`
  },
  created(){
  }
};
</script>

<style scoped>
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  background-color: white;
  padding: 1em;
  position: fixed;
  border: solid gray 0.5px;
}
.cardContainer img {
  width: 1.5em;
  margin-right: .5em;
}
.cardContainer p {
  margin: 0;
}
</style>