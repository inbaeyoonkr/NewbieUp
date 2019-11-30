<template>
  <div>
    <div class="container">
      <div id="splitlayout" class="splitlayout">
        <div class="intro">
          <div class="side side-left">
            <header class="codropsheader clearfix"></header>
            <div class="intro-content">
              <div class="profile">
                <img src="/static/images/frontend.png" alt="frontend" />
              </div>
              <h1>
                <span>프론트엔드</span>
                <span>Front-End Developer</span>
              </h1>
            </div>
            <div class="overlay"></div>
          </div>
          <div class="side side-right">
            <div class="intro-content">
              <div class="profile">
                <img src="/static/images/backend.png" alt="backend" />
              </div>
              <h1>
                <span>백엔드</span>
                <span>Back-End Developer</span>
              </h1>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="page page-right">
          <div class="page-inner">
            <section>
              <h2>백엔드 개발이란 ?</h2>
              <p>사용자가 요청한 내용을 처리하는 서버를 구현하며, 일반 사용자에게는 보여지지 않습니다.</p>
              <p>서버 구현 외에도 데이터 분석, 관련 인프라 개발도 백엔드 개발로 보는 경우가 있습니다.</p>
            </section>
            <section>
              <h2>백엔드 개발에서 주로 사용되는 기술</h2>
              <p>Java : Spring, Akka, Netty</p>
              <p>JavaScript : Node.js</p>
              <p>Python : Django, Flask</p>
              <p>Ruby : Ruby on Rails</p>
              <p>PHP : Django, Flask</p>
              <p>관계형 데이터베이스 : MySQL, Oracle, PostgreSQL</p>
              <p>NoSQL : MongoDB, Cassandra, CouchDB</p>
            </section>
            <section>
              <h2>덕목</h2>
              <p>서버 기술 외에도 데이터베이스나 캐시, 네트워크 등 배워야 할 영역이 많습니다.</p>
              <p>서버가 빠르게 데이터를 제공할 수 있도록 최적화 할 수 있는 지식이 필요합니다.</p>
            </section>
            <section>
              <a href="/#/back-end">백엔드 개발 학습 로드맵 자세히 보기</a>
            </section>
          </div>
        </div>
        <div class="page page-left">
          <div class="page-inner">
            <section>
              <h2>프론트엔드 개발이란?</h2>
              <p>사용자가 직접 다루는 웹페이지나 애플리케이션을 구현합니다.</p>
              <p></p>
            </section>
            <section>
              <h2>프론트엔드 개발에서 주로 사용되는 기술</h2>
              <p>웹페이지 라이브러리 : Bootstrap, jQuery, Semantic UI, Ant Design</p>
              <p>빌드 도구 : Webpack, Gulp, Grunt</p>
              <p>웹페이지 개발 : React, Vue.js, Angular</p>
            </section>
            <section>
              <h2>덕목</h2>
              <p>다양한 환경 및 조건에서 사용자가 편리하게 사용할 수 있도록 편의성을 고려해야 합니다.</p>
              <p>디자인에 대해 이해하고 감이 있으면 유리합니다.</p>
            </section>
            <section>
              <a href="/#/front-end">프론트엔드 개발 학습 로드맵 자세히 보기</a>
            </section>
          </div>
        </div>
        <a href="#" class="back back-right" title="이전 페이지로 이동">&rarr;</a>
        <a href="#" class="back back-left" title="이전 페이지로 이동">&larr;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main_page",
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
    let classie = document.createElement("script");
    classie.setAttribute("src", "/static/js/classie.js");

    document.head.appendChild(classie);

    let splitLayout = document.createElement("script");
    splitLayout.setAttribute("src", "/static/js/cbpSplitLayout.js");

    document.head.appendChild(splitLayout);
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.balls {
  width: 20rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 250px;
}

.balls div {
  font-size: 3.5rem;
  width: 0.8em;
  height: 0.8em;
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

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  margin-top: 10rem;
}

.button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  width: 10rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.125rem;
  text-indent: 0.125rem;
}

.button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

.button:hover {
  cursor: pointer;
  color: #161616;
}

.button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>
