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
    { "text": "Vue" },
    { "text": "범용 개발 스킬" ,
      "nodes": [ { "text": "Git" },
        { "text": "HTTP / HTTPS" },
        { "text": "문제 해결을 위한 검색 방법 배우기" },
        { "text": "터미널 사용법" },
        { "text": "데이터 구조, 알고리즘" },
        { "text": "디자인 패턴" },
      ]
    },
    { "text": "빌드 도구" },
    { "text": "패키지 매니저",
      "nodes": [
        { "text": "npm" },
        { "text": "yarn" },
        { "text": "pnpm" }
      ]},
    { "text": "태스크 러너" ,
      "nodes": [
        { "text": "npm 스크립트" }
      ]},
    { "text": "스타일링" },
    { "text": "CSS 전처리",
      "nodes": [
        { "text": "Sass / SCSS" },
        { "text": "PostCSS" }
      ]},
    { "text": "CSS 프레임워크",
      "nodes": [
        {"text":"Tailwind"}
      ]},
    { "text": "CSS in JS",
      "nodes": [
        {"text":"Single File Components"}
      ]},
    { "text": "상태 관리" },
    { "text": "Component State" },
    { "text": "Vuex"},
    { "text": "Vuex-loading" },
    { "text": "Vuex-shared-mutations" },
    { "text": "Data 영속화",
      "nodes": [
        { "text": "vuex-persist" },
        { "text": "vuex-persistedstate" },
      ]},
    { "text": "타입 검사기",
      "nodes": [
        { "text": "Prop Types" },
        { "text": "TypeScript" }
      ]},
    { "text": "Routing",
      "nodes": [
        { "text": "vue-router" }
      ]},
    { "text": "API 클라이언트" },
    { "text": "REST",
      "nodes": [
        { "text": "fetch (네이티브)" },
        { "text": "axios" }
      ]},
    { "text": "GraphQL",
      "nodes": [
        { "text": "Apollo" }
      ]},
    { "text": "유틸리티 라이브러리",
      "nodes": [
        { "text": "Lodash" },
        { "text": "Moment" }
      ]},
    { "text": "테스트" },
    { "text": "Jest" },
    { "text": "Vue Test Utils" },
    { "text": "Karma" },
    { "text": "E2E 테스트",
      "nodes": [
        { "text": "Selenium" },
        { "text": "Cypress" },
        { "text": "Puppeteer" },
        { "text": "Cucumber.js" },
      ]},
    { "text": "i18n",
      "nodes": [
        { "text": "Vue-i18n" }
      ]},
    { "text": "Server Side Rendering",
      "nodes": [
        { "text": "Nuxt.js" }
      ]},
    { "text": "데스크탑 앱 만들기",
      "nodes": [
        { "text": "Electron" }
      ]}
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
    },
    {
      "source": "웹 기초",
      "target": "Vue"
    },
    {
      "source": "Vue",
      "target": "빌드 도구"
    },
    {
      "source": "Vue",
      "target": "스타일링"
    },
    {
      "source": "Vue",
      "target": "상태 관리"
    },
    {
      "source": "Vue",
      "target": "타입 검사기"
    },
    {
      "source": "Vue",
      "target": "Routing"
    },
    {
      "source": "Vue",
      "target": "API 클라이언트"
    },
    {
      "source": "Vue",
      "target": "유틸리티 라이브러리"
    },
    {
      "source": "Vue",
      "target": "테스트"
    },
    {
      "source": "Vue",
      "target": "i18n"
    },
    {
      "source": "Vue",
      "target": "데스크탑 앱 만들기"
    },
    {
      "source": "빌드 도구",
      "target": "패키지 매니저"
    },
    {
      "source": "빌드 도구",
      "target": "태스크 러너"
    },
    {
      "source": "스타일링",
      "target": "CSS 전처리"
    },
    {
      "source": "스타일링",
      "target": "CSS 프레임워크"
    },
    {
      "source": "스타일링",
      "target": "CSS in JS"
    },
    {
      "source": "상태 관리",
      "target": "Component State"
    },
    {
      "source": "상태 관리",
      "target": "Vuex"
    },
    {
      "source": "Vuex",
      "target": "Vuex-loading"
    },
    {
      "source": "Vuex",
      "target": "Vuex-shared-mutations"
    },
    {
      "source": "Vuex",
      "target": "Data 영속화"
    },
    {
      "source": "테스트",
      "target": "Jest"
    },
    {
      "source": "테스트",
      "target": "Vue Test Utils"
    },
    {
      "source": "테스트",
      "target": "Karma"
    },
    {
      "source": "테스트",
      "target": "E2E 테스트"
    },
    {
      "source": "API 클라이언트",
      "target": "REST"
    },
    {
      "source": "API 클라이언트",
      "target": "GraphQL"
    },
    {
      "source": "Vue",
      "target": "Server Side Rendering"
    },
  ],
};

export default data;
