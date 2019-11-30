<template>
  <div class="wrapper">
    <div class="title">백엔드 로드맵</div>
    <div class="balls">
      <div>👨‍💻</div>
      <div>👨‍💻</div>
      <div>👨‍💻</div>
    </div>
    <div class="logo">뉴비업</div>
    <div class="lode_map">
      <mindmap :nodes="nodes" :connections="connections" :editable="false" />
    </div>
    <!--메뉴-->
    <transition name="slide">
      <div v-if="isShowMenu" id="nav" class="nav">
        <button @click="isShowMenu = false" class="close_btn"></button>
        <div class="nav_content">
          자바스크립트란?
          <p>
            자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다.
            <br />이 언어는 웹 브라우저 내에서 주로 사용하며,
            <br />다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.
          </p>
          <div>책 추천</div>
          <div>코딩 컨벤션</div>
          <!--TODO: vue나 리액트인경우 로드맵 보기 버튼 보이기-->
          <button v-if="true" class="load_map_btn" @click="goLoadMapPage">로드맵 보기</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import data from "../data/backend.js";
const { nodes, connections } = data;

export default {
  name: "BackEnd",
  data() {
    return {
      nodes,
      connections,
      isShowMenu: false
    };
  },
  methods: {
    clickNode: function() {
      this.isShowMenu = true;
    },
    goLoadMapPage: function() {
      this.$router.push("/vue");
    }
  }
};
</script>

<style scoped>
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);
@import url(https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css);
@import url("https://fonts.googleapis.com/css?family=Gothic+A1&display=swap");

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  color: #fff;
  background: #000000;
  z-index: 1000;
  opacity: 0.8;
}
.nav_content {
  margin-top: 100px;
}

.logo {
  position: absolute;
  top: 65px;
  right: 53px;
  font-family: "Gothic A1", sans-serif;
  font-size: 15px;
  font-weight: 800;
}
.title {
  font-family: "NanumSquareRound", sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}
.balls {
  position: absolute;
  top: 0;
  right: 30px;
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.balls div {
  font-size: 18px;
  width: 0.8em;
  height: 0.5em;
  border-radius: 50%;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}

.lode_map {
  width: 80%;
  margin: 24px auto 0 auto;
  height: 300px;
  background-color: beige;
  border-radius: 15px;
}

.slide-enter-active {
  transition-duration: 0.7s;
}
.slide-enter-to {
  overflow: hidden;
  max-width: 300px;
}
.slide-enter {
  overflow: hidden;
  max-width: 0;
}

.close_btn {
  width: 24px;
  height: 24px;
  background-image: url("../assets/images/icon_close_w.png");
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 24px;
  border: none;
  float: right;
  margin: 30px;
  cursor: pointer;
}
.load_map_btn {
  bottom: 40px;
  left: 10px;
  position: absolute;
}
</style>
