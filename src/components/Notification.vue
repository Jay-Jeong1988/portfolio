<template>
  <div class="content">
    <div>
      <h4>공지사항</h4>
    <div class="warning">
      <p>안녕하세요 JJ Ride 입니다. 현재는 중형차만 보유하고 있는 관계로 대형 이사짐은 운반이 불가합니다. 양해 부탁드립니다.</p>
<p>차량: Toyota Camry Le/ 4도어 5인석(운전석 포함)/ 트렁크 용량: 대형 캐리어 x 4</p> 
    </div>
    <div class="camry">
      <img src="http://ik.imagekit.io/kitkitkitit/tr:q-100,w-500/camry.jpg"/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
    };
  },
  components: {
  },
  props: [
  ]
};
</script>

<style scoped>
.content {
  height: 80vh;
  padding: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content div {
  text-align: center;
}
.camry img{
  width: 80%;
}
</style>
