<template>
  <div id="clock">
    <!-- <p class="date">{{ date }}</p> -->
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: ["일", "월", "화", "수", "목", "금", "토"],
      time: new Date().toLocaleString("ko-KO",{timeZone: "Asia/Seoul"}).split(":").slice(0,2).join(":"),
      // date: ""
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
  },
  methods: {
    updateTime() {
      this.time = new Date().toLocaleString("ko-KO",{timeZone: "Asia/Seoul"}).split(":").slice(0, 2).join(":");
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
  created() {
    // this.time = this.initialTime
    // this.date = this.initialDate
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