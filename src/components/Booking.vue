<template>
  <div class="Booking">
    <div class="createCardForm">
      <h1 style="margin-bottom: 1em;">탁구 테이블 예약</h1>
      <div class="errors" v-if="responseErrors.length > 0">
        <small v-for="(e, i) in responseErrors" :key="i" style="color: red;">
          {{ e.split(":")[1].includes("Cast to Date") ? (i+1)+ "." + "날짜를 다시 한번 확인 해주세요." : (i+1)+ "." + e.split(":")[1] }}
          <br />
        </small>
      </div>
      <div>
        <label>예약 하시는 분 성함이?</label>
        <input class="form-control" v-model="data.customerName" type="text" placeholder="예) 홍길동" />
      </div>
      <div>
        <label>예약 일자</label>
        <input class="form-control date" v-model="date" type="date" />
        <input type="hidden" id="timezone" name="timezone" value="+09:00">
      </div>
      <div>
        <label>예약 시간</label>
        <input class="form-control time" v-model="time" type="time" />
      </div>
      <div>
        <label>몇분이 함께 오시나요?</label>
        <input class="form-control" v-model="data.numberOfPeople" type="number" placeholder="예) 4" />
      </div>
      <div>
        <label>얼마나 오래 이용 하실건가요?</label>
        <input class="form-control" v-model="data.duration" type="text" placeholder="예) 2시간" />
      </div>
      <div>
        <label>연락처 하나만 남겨주세요~</label>
        <input class="form-control" v-model="data.phone" type="number" placeholder="예) 01012349876" />
      </div>
      <div>
        <label>따로 남기실 말씀이 있으신가요?</label>
        <textarea class="form-control" v-model="data.note" type="text" />
      </div>
      <button class="btn btn-block btn-lg btn-success done" @click="makeReservation">예약하기</button>
    </div>
    <b-modal
      centered
      v-model="succeeded"
      hide-header
      hide-footer
      dialog-class=""
      content-class="border-0 bg-transparent succeeded align-items-center"
      body-class="bookingPage succeeded"
    >
      <b-button size="sm" variant @click="closeAllModal()" style="background-color: transparent; border: none; margin-left: auto;">
        <img class="successIcon" src="../assets/images/checked.svg" alt="success icon"/>
        <h2>예약 되었습니다</h2>
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Booking",
  data() {
    return {
      data: {
        customerName: "",
        dateAndTime: "",
        duration: "",
        phone: "",
        numberOfPeople: "",
        note: ""
      },
      date: "",
      time: "",
      responseErrors: [],
      succeeded: false,
    };
  },
  computed: {
    convertToDateTimeFormat(){
      const dateArray = this.date.split("-")
      const timeArray = this.time.split(":")
      const y = dateArray[0]
      const m = dateArray[1] - 1
      const d = dateArray[2]
      const hr = timeArray[0]
      const min = timeArray[1]
      return new Date(y, m, d, hr, min)
    }
  },
  methods: {
    closeAllModal() {
      this.$emit("closeAllModal");
    },
    makeReservation() {
      this.responseErrors = [];
      const productionUrl =
        "http://vippingpong.com:8081/api/v1/reservations/create";
      const devUrl = "http://localhost:8081/api/v1/reservations/create";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;
      this.data.dateAndTime = String(this.convertToDateTimeFormat);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(this.data)
      };

      fetch(myUrl, options)
        .then(response => response.json())
        .then(data => {
          let errors = [];
          if (data.error) {
            errors = data.error.split(",");
            for (let error of errors) {
              this.responseErrors.push(error);
            }
          }
          if(data.ok) this.succeeded = true
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    var localeDateToday = new Date();
    var y = localeDateToday.getFullYear();
    var m = String(localeDateToday.getMonth() + 1).padStart(2, '0');
    var d = String(localeDateToday.getDate()).padStart(2, '0');
    var todayInISO = `${y}-${m}-${d}`;
    document.getElementsByClassName("date")[0].setAttribute("min", todayInISO);
  },
  components: {},
  props: []
};
</script>

<style scoped>
.Booking {
  padding: 1.7em;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Booking div {
  text-align: center;
}
.createCardForm > div {
  margin-bottom: 0.5em;
}
.createCardForm input,
.createCardForm label {
  display: inline;
}
.done {
  margin-top: 1em;
}
.successIcon {
  width: 17em;
}
@media only screen and (max-width: 600px) {
  .successIcon {
    width: 12em;
  }
}
</style>
