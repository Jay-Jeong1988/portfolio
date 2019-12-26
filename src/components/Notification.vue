<template>
  <div class="content">
    <div>
      <h4>공지사항</h4>
      <ul class="lists">
        <li class="firstListItem">
          <div class="warning">
            <div>
              <p>안녕하세요 JJ Ride 입니다. 현재 저희는 중형차만 보유하고 있는 관계로 대형 이사짐은 운반이 불가합니다. 양해 부탁드립니다.</p>
              <p>차량: Toyota Camry Le/ 4도어/ 운전자 제외 4인 탑승가능/ 트렁크 용량: 대형 캐리어 x 4</p>
              <p>
                Please aware that we are currently running JJ RIDE with a midsize car, thus we are unable to
                load huge furnitures.
              </p>
              <p>Car Info: Toyota Camry Le/ 4 Doors 4 ppl Capcity(excluding driver)/ Trunk Capcity: 4 Big Size Luggages</p>
            </div>
            <div class="camry">
              <img
                src="http://ik.imagekit.io/kitkitkitit/tr:q-100,w-500/camry.jpg"
                alt="white camry"
              />
            </div>
          </div>
        </li>
        <li>
          <div class="warning">
            <p>
              공항 픽업은 Arrival Terminal(Level 2)이 아닌 Departure Terminal(Level 3) 스타벅스 앞 입구에 도착 후 연락드립니다.
              도로가 혼잡할때는 정차를 금지시키는 관계로 연락을 잘 받아주셔야 합니다.
            </p>
            <p>
              Airport pickup location is not at Arrival Terminal (Level 2), but Departure Terminal(Level 3).
              Because stopping in airport longer than 5 minutes is strictly prohibited,
              we ask clients to wait at close to Starbucks(near Food Court) and be aware of phone calls.
            </p>
          </div>
        </li>
        <li>
          <div class="warning">
            <p>
              JJ RIDE 운행요금은 대략 밴쿠버 택시의 70% 정도 입니다 (당연히 팁도 받지 않으니 얼마나 저렴한지 아시겠죠?).
              자세한 밴쿠버 택시 운행요금은
              <a
                target="_blank"
                href="https://www.numbeo.com/taxi-fare/in/Vancouver"
              >여기</a>에서
              확인 하실 수 있습니다.
            </p>
            <p>
              JJ RIDE's Driving cost is roughly 30% less than regular taxis (We don't ask for tips either).
              You can check more information about Vancouver's taxi rate <a href="https://www.numbeo.com/taxi-fare/in/Vancouver" target="_blank">here</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {};
  },
  components: {},
  props: []
};
</script>

<style scoped>
.content {
  margin: 7em 0;
  padding: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poor Story", sans-serif;
}
.content div {
  text-align: center;
}
.camry img {
  width: 100%;
}
ul {
  padding-left: 1em;
}
li {
  margin-top: 1em;
}
@media only screen and (min-width: 700px) {
  .content {
    margin: 8em;
  }
  .camry img {
    width: 100%;
  }
  .firstListItem .warning {
    display: flex;
    justify-content: space-between;
  }
  .firstListItem .warning div {
    width: 48%;
  }
}
</style>
