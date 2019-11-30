const data = {
  nodes: [
    {
      "text": "시작"
    },
    { "text": "웹 기초" },
    {
      "text": "HTML",
      "nodes": [
        { "text": "시맨틱 HTML" },
        { "text": "페이지 섹션 나누기, DOM 구조 이해하기" },
      ]
    },
    {
      "text": "CSS",
      "nodes": [
        { "text": "CSS 기초" },
        { "text": "Grid, Flexbox" },
        { "text": "반응형 웹 디자인,미디어 쿼리" },
      ]
    },
    {
      "text": "JS 기초",
      "nodes": [
        { "text": "문법 및 기초 연산" },
        { "text": "DOM 제어" },
        { "text": "호이스팅,이벤트 버블링,프로토타입" },
        { "text": "AJAX(XHR)" },
        { "text": "ECMA Script 6+,새로운 기능 배우기" },
        { "text": "jQuery(선택)" },
      ]
    },
    { "text": "범용 개발 스킬" },
    // { "text": "Git" },
    // { "text": "HTTP / HTTPS" },
    // { "text": "문제 해결을 위한 검색 방법 배우기" },
    // { "text": "터미널 사용법" },
    // { "text": "데이터 구조, 알고리즘" },
    // { "text": "디자인 패턴" },
    // { "text": "리액트" },
    // { "text": "빌드 도구" },
    // { "text": "패키지 매니저" },
    // { "text": "npm" },
    // { "text": "yarn" },
    // { "text": "pnpm" },
    // { "text": "태스크 러너" },
    // { "text": "npm 스크립트" },
    // { "text": "gulp" },
    // { "text": "스타일링" },
    // { "text": "CSS 전처리" },
    // { "text": "Sass / SCSS" },
    // { "text": "PostCSS" },
    // { "text": "Less" },
    // { "text": "Stylus" },
    // { "text": "CSS 프레임워크" },
    // { "text": "Bootstrap" },
    // { "text": "Materialize, Material UI, Material Design UI" },
    // { "text": "Bulma" },
    // { "text": "Semantic UI" },
    // { "text": "Tailwind" },
    // { "text": "상태 관리" },
    // { "text": "Component State/Context" },
    // { "text": "MobX" },
    // { "text": "Redux" },
    // { "text": "API 클라이언트" },
    // { "text": "REST" },
    // { "text": "fetch (네이티브)" },
    // { "text": "SuperAgent" },
    // { "text": "axios" },
    // { "text": "GraphQL" },
    // { "text": "Apollo" },
    // { "text": "Relay" },
    // { "text": "urql" },
    // { "text": "데스크탑 앱 만들기" },
    // { "text": "Proton Native" },
    // { "text": "Electron" },
    // { "text": "React Native Window" },
    // { "text": "빌드 도구" },
    // { "text": "Webpack" },
    // { "text": "Styling" },
    // { "text": "CSS in JS" },
    // { "text": "Single File Components" },
    // { "text": "State Management" },
    // { "text": "Vuex" },
    // { "text": "Vuex-loading" },
    // { "text": "Vuex-shared-mutations" },
    // { "text": "Data 영속화" },
    // { "text": "vuex-persist" },
    // { "text": "vuex-persistedstate" },
    // { "text": "타입 검사기" },
    // { "text": "Prop Types" },
    // { "text": "TypeScript" },
    // { "text": "Routing" },
    // { "text": "vue-router" },
    // { "text": "유틸리티 라이브러리" },
    // { "text": "Lodash" },
    // { "text": "Moment" },
    // { "text": "테스트" },
    // { "text": "Jest" },
    // { "text": "Vue Test Utils" },
    // { "text": "Karma" },
    // { "text": "E2E 테스트" },
    // { "text": "Selenium" },
    // { "text": "Cypress" },
    // { "text": "Puppeteer" },
    // { "text": "Cucumber.js" },
    // { "text": "i18n" },
    // { "text": "Vue-i18n" },
    // { "text": "Server Side Rendering" },
    // { "text": "Nuxt.js" }
  ],
  connections: [
    {
      "source": "시작",
      "target": "웹 기초"
    },
    {
      "source": "웹 기초",
      "target": "CSS"
    },
    {
      "source": "웹 기초",
      "target": "HTML"
    },
    {
      "source": "웹 기초",
      "target": "JS 기초"
    },
    {
      "source": "웹 기초",
      "target": "범용 개발 스킬"
    }
  ],
};

export default data;
