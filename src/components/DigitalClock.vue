<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      time: "",
      date: ""
    };
  },
  methods: {
    updateTime() {
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },

    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  },
  created() {
    setInterval(()=>{
        this.updateTime();
    }, 1000);
  }
};
</script>

<style scoped>  
@import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap');
#clock p {
  margin-bottom: 0;
  padding: 0;
  line-height: initial;
}
#clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  color: #141414;
}
.time {
  letter-spacing: 0.05em;
  padding: 5px 0;
  font-size: 24px;
}
.date {
  letter-spacing: 0.1em;
}
@media only screen and (max-width: 924px) {
    .time {
      font-size: 16px;
    }
    .date {
        font-size: 16px;
    }
}
</style>