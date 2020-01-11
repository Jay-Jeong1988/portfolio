<template>
  <div id="clock">
    <!-- <p class="date">{{ date }}</p> -->
    <p class="time">{{ dynamicDisplayingTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayingTime: new Date().toLocaleString("ko-KO",{timeZone: "Asia/Seoul"}).split(":").slice(0, 2).join(":"),
    };
  },
  computed: {
    // initialDate(){
    //   var cd = new Date();
    //   return this.zeroPadding(cd.getFullYear(), 4) +
    //     "-" +
    //     this.zeroPadding(cd.getMonth() + 1, 2) +
    //     "-" +
    //     this.zeroPadding(cd.getDate(), 2) +
    //     " " +
    //     this.week[cd.getDay()];
    // },
    // initialTime(){
    //   var cd = new Date();
    //   return this.zeroPadding(cd.getHours(), 2) +
    //     ":" +
    //     this.zeroPadding(cd.getMinutes(), 2);
    // }
    dynamicDisplayingTime(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;
      if (this.date && this.date != today) return new Date(`${this.date}`).toLocaleString("ko-KO",{timeZone: "Asia/Seoul"}).split(".").slice(0, 3).join(".")
      else return this.displayingTime
    }
  },
  methods: {
    updateTime() {
      this.displayingTime = new Date().toLocaleString("ko-KO",{timeZone: "Asia/Seoul"}).split(":").slice(0, 2).join(":");
      // this.time =
      //   this.zeroPadding(cd.getHours(), 2) +
      //   ":" +
      //   this.zeroPadding(cd.getMinutes(), 2);
      // this.date =
      //   this.zeroPadding(cd.getFullYear(), 4) +
      //   "-" +
      //   this.zeroPadding(cd.getMonth() + 1, 2) +
      //   "-" +
      //   this.zeroPadding(cd.getDate(), 2) +
      //   " " +
      //   this.week[cd.getDay()];
    },

    // zeroPadding(num, digit) {
    //   var zero = "";
    //   for (var i = 0; i < digit; i++) {
    //     zero += "0";
    //   }
    //   return (zero + num).slice(-digit);
    // }
  },
  props: ["date"],
  created() {
    setInterval(()=>{
      this.updateTime();
    }, 60000);
  }
};
</script>

<style scoped>  
#clock p {
  margin-bottom: 0;
  padding: 0;
  line-height: initial;
}
#clock {
  text-align: center;
  color: #141414;
  display: flex;
}
.time {
  letter-spacing: 0.05em;
  padding: 5px 0;
  font-size: 52px;
}
.date {
  font-weight: bold;
  font-size: 52px;
  letter-spacing: 0.1em;
  margin-right: 1em;
  white-space: nowrap;
}
@media only screen and (max-width: 924px) {
    .time {
      font-size: 36px;
    }
    .date {
        font-size: 36px;
    }
}
</style>