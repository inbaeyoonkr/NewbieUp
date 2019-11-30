<template>
  <div class="wrapper">
    <div class="title">
      <span>프론트엔드</span><br>
      <span>Front-End Developer</span>
    </div>
    <div class="balls">
      <router-link to="/">
        <div>👨‍💻</div>
      </router-link>
    </div>
    <div class="load_map">
      <mindmap :nodes="nodes" :connections="connections" :editable="false" style="height:100%"/>
    </div>
    <!--메뉴-->
    <transition name="slide">
      <div v-if="isShowMenu" id="nav" class="nav">
        <button @click="isShowMenu = false" class="close_btn"></button>
        <div class="nav_content">
          <h1>{{nodeData.title}} 란?</h1>
          <p>{{nodeData.explanation}}</p>
          <div style="margin-top: 24px">
            <h2>책 추천</h2>
            <div v-for="book in nodeData.book" :key="book.index">
              <img v-bind:src="book.link" />
              <div style="margin-top: 14px; margin-bottom: 14px">{{book.title}}</div>
            </div>
          </div>
          <div>
            <h2>코딩 컨벤션</h2>
          </div>
          <!--TODO: vue나 리액트인경우 로드맵 보기 버튼 보이기-->
          <button v-if="true" class="roadmap_btn" @click="goLoadMapPage">로드맵보기</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import data from "../data/frontend.js";
import dictionary from "../data/dictionary.js";

const { nodes, connections } = data;

export default {
  name: "FrontEnd",
  created() {
    let demo = document.createElement("link");
    demo.setAttribute("type", "text/css");
    demo.setAttribute("rel", "stylesheet");
    demo.setAttribute("href", "/static/css/demo.css");

    document.head.appendChild(demo);

    let component = document.createElement("link");
    component.setAttribute("type", "text/css");
    component.setAttribute("rel", "stylesheet");
    component.setAttribute("href", "/static/css/component.css");

    document.head.appendChild(component);

    let modernizr = document.createElement("script");
    modernizr.setAttribute("src", "/static/js/modernizr.custom.js");

    document.head.appendChild(modernizr);
  },
  mounted() {
    let obj = document.getElementsByClassName("mindmap-node");
    //console.log(obj);
    for (let i = 0; i < obj.length; i++) {
      //let key = obj[i].getElementsByTagName("a")[0].innerText;
      //console.log(obj[i].getElementsByTagName("a")[0].innerText);
      const thisObject = this;
      obj[i].addEventListener("click", () => {
        let key = obj[i].getElementsByTagName("a")[0].innerText;

        if (!dictionary[key.trim()]) {
          // TODO : 준비된 정보가 없음
          return;
        }
        thisObject.isShowMenu = true;
        thisObject.nodeData = dictionary[key.trim()];
      });
    }
  },
  data() {
    return {
      nodes,
      connections,
      isShowMenu: false,
      nodeData: null
    };
  },
  methods: {
    goLoadMapPage: function() {
      this.$router.push(this.nodeData.link);
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  background: #48a3da;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header {
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
}

.logo-area {
  display: flex;
  flex-direction: row;
  width: 200px;
}

.logo {
  font-size: 1.125rem;
  font-weight: 800;
  text-decoration: none;
  color: black;
}
.balls {
  position: absolute;
  top: 36px;
  left: 28px;
  width: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  font-size: 2rem;
  width: 0.8em;
  height: 1em;
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

.roadmap_container {
  width: 80%;
  height: 600px;
  margin: 24px auto 0 auto;
  background-color: white;
  border-radius: 15px;
}

.slide-enter-active {
  transition-duration: 0.7s;
}
.slide-enter-to {
  overflow: hidden;
  max-width: 400px;
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

.roadmap_btn {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  width: 100%;
  height: 50px;
}

.roadmap_btn::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

.roadmap_btn:hover {
  cursor: pointer;
}

.roadmap_btn:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.nav {
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  color: #fff;
  background: #000000;
  z-index: 1000;
  opacity: 0.8;
  padding: 24px;
}
.nav_content {
  margin-top: 70px;
}
.title{
  text-align: center;
  margin-top: 24px;
}
.title span:first-child{
  font-weight: 300;
  font-size: 2em;
  font-family: 'NanumSquare', sans-serif;
  text-align: center;
}
.title span:last-child{
  position: relative;
  margin-top: 0.5em;
  padding: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8em;
  font-family: 'NanumSquare', sans-serif;
}
  .load_map{
    background-color: rgb(52, 73, 94);
    margin-top: 24px;
    width: 80%;
    height: 80%;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  h1{
    font-family: "NanumSquareRound", sans-serif;
    font-size: 24px;
  }

  h2{
    font-family: "NanumSquareRound", sans-serif;
    font-size: 18px;
  }

  .nav p {
    font-family: 'NanumSquare', sans-serif;
    font-size: 14px;
  }
</style>
