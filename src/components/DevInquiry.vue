<template>
  <div class="devInquiry">
    <div style="margin: 4em 0;">
      <h1>웹사이트/모바일 앱</h1>
      <img
        class="computerIcon"
        src="http://ik.imagekit.io/kitkitkitit/tr:q-100,w-1000/webDevelopment.png"
        alt="computer icon"
      />
      <div class="intro">
        <h4>
          저희 웹사이트 같은 스타일의 웹사이트 개설에 관심 있으신 분께서는
          JJRIDE 연락처로 연락 주시기 바랍니다.
        </h4>
        <h4>원하시는 스타일이나 기능이 있으시면 커스터마이징 또한 가능하니 우선 문의 주세요! 🙂</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevInquiry",
  data() {
    return {};
  },
  components: {},
  props: []
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poor+Story|Raleway&display=swap");
.devInquiry {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poor Story", sans-serif;
}
.devInquiry .intro {
  padding: 1.5em;
}
.computerIcon {
  margin: 1.5em 0;
  width: 100%;
}
h1 {
  padding: .5em;
}
</style>
