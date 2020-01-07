<template>
  <div id="login">
    <b-modal
      centered
      v-model="modalShow"
      hide-header
      hide-footer
      dialog-class
      content-class="modalContent shadow-lg border-0"
      body-class="p-0"
    >
      <section class="photoSection">
        <img :src="dynamicPhotoUrl" alt="inside gym" />
      </section>
      <section class="contentsContainer">
        <div class="contentsHeader">
          <button class="closeModalBtn" @click="closeModal">
            <img src="../assets/images/error.svg" alt="close button" />
          </button>
        </div>
        <div class="modalTextContents">
          <h3>{{textTitle}}</h3>
          <p>{{textContent}}</p>
        </div>
        <div class="functions">
          <div class="booknow">
            <button>
              <p>예약하기</p>
            </button>
          </div>
          <div class="buttons">
            <button>
              <img src="../assets/images/phone-call-orange.svg" alt="phone icon"/>
            </button>
            <button>
              <img src="../assets/images/calendar.svg" alt="calendar icon"/>
            </button>
          </div>
        </div>
        <div class="logo">
          <img src="../assets/images/vippp_logo.png" />
        </div>
      </section>
      <template v-slot:modal-backdrop></template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentsTypes: {
        lesson: {
          title: "탁구 레슨",
          contents:
            "귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...귀빈탁구클럽에서는 코치님의 레슨...",
          photoUrl:
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
        },
        question: {
          title: "구장 정보",
          contents:
            "주차장 몇시부터 몇시까지 주소 전화번호 탁구장 영업 시간표 ..주차장 몇시부터 몇시까지 주소 전화번호 탁구장 영업 시간표 ..주차장 몇시부터 몇시까지 주소 전화번호 탁구장 영업 시간표 ..",
          photoUrl:
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/table-tennies.jpg"
        },
        membership: {
          title: "멤버쉽",
          contents:
            "멤버쉽 혜택 월정액제 얼마얼마 ...멤버쉽 혜택 월정액제 얼마얼마 ...멤버쉽 혜택 월정액제 얼마얼마 ...",
          photoUrl:
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/tabletennis.jpg"
        },
        community: {
          title: "친목",
          contents:
            "친목 어쩌고 저쩌고.친목 어쩌고 저쩌고.친목 어쩌고 저쩌고..",
          photoUrl:
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
        },
        newFeed: {
          title: "새소식",
          contents: "새소식...테이블..어쩌고 저쩌고..",
          photoUrl:
            "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
        }
      }
    };
  },
  props: ["modalShow", "modalContent"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  },
  computed: {
    textTitle() {
      return this.contentsTypes[this.modalContent].title;
    },
    textContent() {
      return this.contentsTypes[this.modalContent].contents;
    },
    dynamicPhotoUrl() {
      return this.contentsTypes[this.modalContent].photoUrl;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap');
#login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  margin: 0;
  align-items: start;
}
.modal-content {
  width: 100vw;
  height: 50vw;
  border-radius: 0;
  background-color: #E0E0E0;
}
.modal-body {
  width: 100vw;
  height: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.modal-body section {
  width: 50%;
  height: 100%;
}
.modal-body * {
  font-family: "Do Hyeon", sans-serif;
}
.logo img {
  width: 10em;
}
.photoSection img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contentsContainer {
  padding: 1.5em;
  padding-bottom: 0;
  overflow: scroll;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.contentsHeader {
  align-self: flex-end;
}
.closeModalBtn img {
  width: 3.5em;
}
.modalTextContents {
  overflow-wrap: break-word;
  text-align: center;
  color: rgb(66, 63, 59);
  overflow: scroll;
  margin-bottom: 1.5em;
  padding: 0 1em;
}
.modalTextContents p {
  font-size: .9em;
}
.functions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.functions .booknow {
  margin: 0 .5em;
}
.functions .booknow button {
  padding: 1em; 
  width: 8em; 
  background-color: transparent; 
  border:solid 2px white; 
  color: #D75A4A;
}
.functions .buttons button {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  padding: .5em;
  margin: 0 .3em;
}
.functions .buttons img {
  width: 2.5em;
}
@media only screen and (max-width: 600px) {
  .modal-content {
    height: auto;
  }
  .modal-body {
    flex-direction: column;
    min-height: 100vh;
    height: auto;
  }
  .modal-body .contentsContainer {
    width: 100%;
    min-height: 50vh;
  }
  .modal-body .photoSection {
    width: 100%;
    height: 50vh !important;
  }
}
</style>