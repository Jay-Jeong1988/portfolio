<template>
  <div class="Payment">
    <h3>Payment Options</h3>
    <div class="paymentOptions">
      <span>
        <p>Cash</p>
        <img src="../assets/images/cash.svg" alt="cash icon" />
      </span>
      <span>
        <p>Paypal</p>
        <img src="../assets/images/paypal.svg" alt="paypal icon" />
        <div>
          <p><b>https://paypal.me/jjride&nbsp;&nbsp;</b></p>
          <small>예약하시고 난 후에 결제 해 주세요.</small>
        </div>
      </span>
      <span>
        <p>Email Transfer</p>
        <img src="@/assets/images/email.svg" alt="email icon" />
        <div>
          <p><b>heybros32@gmail.com&nbsp;&nbsp;</b></p>
          <small>예약하시고 난 후에 결제 해 주세요.</small>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {};
  },
  components: {},
  props: []
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poor+Story|Raleway&display=swap");
.Payment {
  height: 80vh;
  padding: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poor Story", sans-serif;
}
.paymentOptions img {
  width: 3em;
}
.paymentOptions span:last-child img {
  width: 2.5em;
}
.paymentOptions span {
  display: flex;
  justify-content: space-evenly;
  margin: 2em 0;
  align-items: center;
}
.paymentOptions span p, small {
  margin: 0 1em;
}
</style>
