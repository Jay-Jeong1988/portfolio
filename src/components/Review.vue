<template>
  <div class="Review" :class="{evenIndex: isEvenIndex}">
    <div class="left" v-if="!isEvenIndex">
      <div class="emoji" :class="{
  happy: score == 2,
  soso: score == 1,
  angry: score == 0}"></div>
    </div>
    <div class="right">
      <div class="name">
        <p>{{displayName}}</p>
        <div class="starRating">
          <button
            class="star"
            :class="{checked: data.stars > 0}"
          ></button>
          <button
            class="star"
            :class="{checked: data.stars > 1}"
          ></button>
          <button
            class="star"
            :class="{checked: data.stars > 2}"
          ></button>
          <button
            class="star"
            :class="{checked: data.stars > 3}"
          ></button>
          <button
            class="star"
            :class="{checked: data.stars > 4}"
          ></button>
        </div>
      </div>
      <div class="content" :class="{
  happy: score == 2,
  soso: score == 1,
  angry: score == 0}">
        <p v-if="!isEditingStarted">{{data.content}}</p>
        <textarea v-if="isEditingStarted" v-model="data.content" type="text" />
      </div>
      <div class="createdAt" :class="{floatLeft: isEvenIndex}">
        <small>{{createdAt}}</small>
        <div class="editOptions">
          <button v-if="!isEditingStarted" class="editReviewBtn" @click="openAuth" name="editBtn">
            <p>수정</p>
            <img src="../assets/images/edit.svg" alt="edit icon" />
          </button>
          <button v-if="!isEditingStarted" class="deleteReviewBtn" @click="openAuth" name="delBtn">
            <p>삭제</p>
            <img src="../assets/images/close.svg" alt="close icon" />
          </button>
          <input
            id="authInput"
            class="authInput"
            type="number"
            v-model="password"
            v-if="isVerificationStarted"
            placeholder="전화번호 4자리"
          />
          <button v-if="!isEditingStarted & isVerificationStarted" @click="verifyAuth">
            <p>확인</p>
            <img style="width: 1em" src="../assets/images/check.svg" alt="check icon" />
          </button>
          <button v-if="isEditingStarted" @click="sendEditRequest">
            <p>확인</p>
            <img style="width: 1em" src="../assets/images/check.svg" alt="check icon" />
          </button>
          <button v-if="isEditingStarted" @click="cancelEditing">
            <p>취소</p>
            <img style="width: 1em" src="../assets/images/close.svg" alt="close icon" />
          </button>
        </div>
        <small style="font-size: .5em; color: red;" v-if="verifyResult != 'ok'">{{verifyResult}}</small>
      </div>
    </div>
    <div class="left" v-if="isEvenIndex">
      <div class="emoji" :class="{
  happy: score == 2,
  soso: score == 1,
  angry: score == 0}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      score: 2,
      isEvenIndex: this.index % 2 == 0,
      isVerificationStarted: false,
      password: "",
      verifyResult: "",
      isEditingStarted: false,
      preservedData: {},
      whichBtnClicked: ""
    };
  },
  methods: {
    cancelEditing() {
      this.isEditingStarted = false;
      this.data.content = this.preservedData.content;
    },
    openAuth(e) {
      this.whichBtnClicked = e.currentTarget.name;
      setTimeout(() => (this.isVerificationStarted = true), 0);
    },
    verifyAuth() {
      let self = this;
      const productionRequestUrl =
        "https://survivalstack.herokuapp.com/api/v1/reviews/verifyAuth";
      const devRequestUrl = "http://localhost:8081/api/v1/reviews/verifyAuth";
      const query =
        "?phoneLast4Digits=" +
        self.password +
        "&customerNameWithoutInitials=" +
        self.item.customerName.split("-")[0];
      let myRequestUrl =
        process.env.NODE_ENV === "production"
          ? productionRequestUrl
          : devRequestUrl;
      fetch(myRequestUrl + query)
        .then(response => {
          self.verifyResult =
            response.status == 200 ? "ok" : "전화번호가 다릅니다";
          if (self.verifyResult == "ok") {
            if (self.whichBtnClicked == "editBtn") self.isEditingStarted = true;
            else if (self.whichBtnClicked == "delBtn") this.removeReview();
          }
        })
        .catch(error => alert(error));
    },
    removeReview() {
      const productionUrl =
        "https://survivalstack.herokuapp.com/api/v1/reviews/remove";
      const devUrl = "http://localhost:8081/api/v1/reviews/remove";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;
      fetch(`${myUrl}?reviewId=${this.data._id}`)
        .then(() => {
          this.$emit("reviewRemoved");
        })
        .catch(error => {
          alert(error);
        });
    },
    sendEditRequest() {
      let self = this;
      const productionRequestUrl =
        "https://survivalstack.herokuapp.com/api/v1/reviews/update";
      const devRequestUrl = "http://localhost:8081/api/v1/reviews/update";
      const query = "?reviewId=" + self.item._id;
      let myRequestUrl =
        process.env.NODE_ENV === "production"
          ? productionRequestUrl
          : devRequestUrl;
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(this.data)
      };
      fetch(myRequestUrl + query, options)
        .then(response => response.json())
        .then(review => {
          this.editingData = review;
          this.item._id += 1; //changing item's key makes it able to update the component in real time
          this.isEditingStarted = false;
          setTimeout(() => (this.item._id = this.item._id.slice(0, -1)), 0); //must change the key back to as it was, otherwise fetch fails due to unmatching _id
        })
        .catch(error => alert(error));
    }
  },
  props: ["item", "index"],
  computed: {
    displayName() {
      return this.item.showAsInitials
        ? this.item.customerName.split("-")[1]
        : this.item.customerName.split("-")[0];
    },
    createdAt() {
      var date = this.item.createdAt.split("T")[0];
      var hr = this.item.createdAt
        .split("T")[1]
        .split(".")[0]
        .split(":")[0];
      var min = this.item.createdAt
        .split("T")[1]
        .split(".")[0]
        .split(":")[1];
      return date + " " + hr + ":" + min;
    }
  },
  created() {
    this.data = this.item;
    this.preservedData.content = this.item.content;
    if (this.item.stars > 3) this.score = 2;
    else if (this.item.stars == 3) this.score = 1;
    else if (this.item.stars < 3) this.score = 0;
  },
  mounted() {
    var self = this;
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", function(e) {
      if (self.isVerificationStarted) {
        e.preventDefault();
        var authInput = document.getElementById("authInput");
        if (e.target != authInput) {
          self.isVerificationStarted = false;
          self.password = "";
        }
      } else {
        self.verifyResult = "";
      }
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Black+And+White+Picture|Sunflower:300|Gamja+Flower&display=swap");
.Review {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.Review.evenIndex {
  justify-content: flex-end;
}
.Review.evenIndex .name {
  text-align: end;
}
.left {
  margin: 0 1.5em;
}
.Review p {
  margin: 0;
}
.content.happy {
  font-family: "Gamja Flower", sans-serif;
  background-color: rgb(237, 255, 232);
}
.content.soso {
  font-family: "Sunflower", sans-serif;
  background-color: rgb(248, 249, 215);
}
.content.angry {
  font-family: "Black And White Picture", sans-serif;
  background-color: rgb(249, 217, 217);
}
.content {
  border: solid 1px black;
  border-radius: 10px;
  padding: 1em;
  width: fit-content;
  display: inline-block;
  margin: 0 0.5em;
}
.name p {
  font-weight: bold;
}
.emoji {
  width: 3em;
  height: 3em;
  background-size: cover;
}
.emoji.happy {
  background-image: url("../assets/images/happy.svg");
}
.emoji.soso {
  background-image: url("../assets/images/soso.svg");
}
.emoji.angry {
  background-image: url("../assets/images/angry.svg");
}
.createdAt {
  display: inline-block;
  vertical-align: bottom;
}
.editOptions {
  display: flex;
  justify-content: flex-start;
  font-size: 0.7em;
}
.editOptions button {
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
}
.editOptions img {
  width: 0.8em;
}
@media only screen and (max-width: 600px) {
  .createdAt {
    display: inline-block;
    vertical-align: top;
  }
  .left {
    margin: 0 0.5em;
  }
}
.floatLeft {
  float: left;
}
.authInput {
  width: 5.5rem;
}
.star {
  width: 1em;
  height: 1em;
  background-image: url("../assets/images/emptyStar.svg");
  background-size: cover;
  border: none;
  background-color: transparent;
}
.star.checked {
  background-image: url("../assets/images/star.svg");
}
</style>