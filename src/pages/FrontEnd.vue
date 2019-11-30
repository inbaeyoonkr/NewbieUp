<template>
    <div class="wrapper">
        <h1>뉴비업</h1>
        <button @click="clickNode">javascript</button>

        <!--메뉴-->
        <transition name="slide">
          <div v-if="isShowMenu" class="menu">
            <button @click="isShowMenu = false">닫기</button>
            <div>
              자바스크립트란?
              <p>자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. <br>이 언어는 웹 브라우저 내에서 주로 사용하며, <br>다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.</p>
            </div>
            <div>책 추천</div>
            <div>코딩 컨벤션</div>
          </div>
        </transition>
    </div>
</template>

<script>
    export default {
      name: "FrontEnd",
      data() {
          return {
            isShowMenu: false,
          }
      },
      methods: {
        clickNode:function(){
          this.isShowMenu = true;
        }
      }

    }
</script>

<style scoped>
  .wrapper{
    position: absolute;
    top:0;
    left:0;
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;
  }
  .menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: black;
    color: #fff;
  }
  .load_map{

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

</style>
