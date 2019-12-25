<template>
  <div class="About">
    <h3>
      One thing
      <b>JJ RIDE</b> guarantees.. is
      <b>better pricing!</b>
    </h3>
    <div class="container">
      <div class="pContainer">
        <p class="korean">
          한국 다녀올 때마다 매번 20분씩 줄 서서 택시 타고,
          그마저도 혹시나 빙 돌아가지 않을까 걱정하면서 가고,
          도착하고 나서도 요금이 비싸게 나와 지불하기 아까웠던 적이
          있으셨나요? 택시를 급하게 이용해야 하는데 업체가 전화를 받지 않아서 애탄 적이 있으셨나요?
          이사는 해야 되지만 짐이 너무 적어서 굳이 이사전문업체에 연락하기 애매하시다면,
          그 외에 물건을 급하게 전달해야 하는데 시간이 없어서.. 등등 여러 이유로 자차가 없으셔서 불편을
          겪고 계신다면 JJ RIDE에 연락주세요. 기존 지출보다 훨씬 저렴한 비용에 해결해 드립니다.
          궁금한 게 있으시면 문의만 하셔도 좋으니 카톡/전화/이메일 상관없이 편하게 연락해주세요.
          <small>*상시로 예약/운행 상황을 업데이트 하니 웹사이트를 확인 해주세요.</small>
        </p>
      </div>
      <div class="imageContainer">
        <img
          src="http://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-5-5,w-600/buckleup.png"
          alt="car image"
        />
      </div>
    </div>
    <h3>
      ..and
      <b>convenience!</b>
    </h3>
    <div class="container">
      <div class="imageContainer">
        <img
          src="http://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-5-5,w-600/safety1.png"
          alt="safety image"
        />
      </div>
      <div class="pContainer">
        <p class="english">
          If you've ever felt frustrated by the high costs and unresponsive
          operators from taxis, JJ RIDE is your cheaper, safer, and friendlier option.
          Just call to book, and we'll help handle everything with your transportation at a
          very reasonable price. Whether you need to move a few things across town, need a 
          quick ride to/from the airport, or just looking to save some money getting to your
           destination, we have you covered.
          Feel free to call to ask any questions or to get an estimate for your trip.
          <small>
            *Please check the driving status on the website so you don't have
            to feel nervous everytime about if your driver is coming or not.
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  components: {},
  props: []
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poor+Story|Raleway&display=swap");
.About {
  margin-top: 5em;
  padding: 1.7em;
  margin-bottom: 3em;
}
.container {
  width: 100%;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pContainer {
  width: 60%;
  padding: 2em 4em;
}
.imageContainer {
  width: 40%;
  margin-bottom: 1em;
  margin-top: 0;
  padding: 3%;
}
img {
  width: 100%;
  border-radius: 8%;
}
.korean {
  font-family: "Poor Story", sans-serif;
}
h3 {
  font-family: "Raleway", sans-serif;
  text-align: center;
}
.english {
  font-family: "Raleway", sans-serif;
}
@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
  .container:last-child {
    flex-direction: column-reverse;
  }
  .pContainer {
    width: 100%;
    padding: 0;
  }
  .imageContainer {
    width: 100%;
  }
}
</style>
