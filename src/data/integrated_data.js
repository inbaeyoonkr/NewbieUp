const vue = {
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

const react = {
  nodes: [
    { text: "리액트", url: "#" },
    // to: 리액트
    {
      text: "빌드 도구",
      url: "#"
    },
    // to: 빌드 도구
    {
      text: "패키지 매니저",
      url: "#"
    },
    // to: 빌드 도구
    {
      text: "테스크 러너",
      url: "#"
    },
    // to: 빌드 도구
    {
      text: "webpack",
      url: "#"
    },

    // to: 빌드 도구
    {
      text: "Parcel",
      url: "#"
    },
    // to: 패키지 매니저
    {
      text: "npm",
      url: "#"
    },
    // to: 패키지 매니저
    {
      text: "Yarn",
      url: "#"
    },

    // to: 테스크 러너
    {
      text: "npm scripts",
      url: "#"
    },
    // to: 테스크 러너
    {
      text: "gulp",
      url: "#"
    },
    // to: 리액트
    {
      text: "스타일링",
      url: "#"
    },
    // to: 스타일링
    {
      text: "CSS 전처리",
      url: "#"
    },
    // to: 스타일링
    {
      text: "CSS 프레임워크",
      url: "#"
    },
    // to: 스타일링
    {
      text: "CSS 아키텍쳐",
      url: "#"
    },
    // to: 스타일링
    {
      text: "CSS in JS",
      url: "#"
    },
    // to: CSS 전처리
    {
      text: "Sass/SCSS",
      url: "#"
    },
    // to: CSS 전처리
    {
      text: "PostCSS",
      url: "#"
    },
    // to: CSS 전처리
    {
      text: "Less",
      url: "#"
    },
    // to: CSS 전처리
    {
      text: "Stylus",
      url: "#"
    },
    // to: CSS 프레임워크
    {
      text: "Bootstrap",
      url: "#"
    },
    // to: CSS 프레임워크
    {
      text: "Materialize, Material UI, Material Design UI",
      url: "#"
    },
    // to: CSS 프레임워크
    {
      text: "Bulma",
      url: "#"
    },
    // to: CSS 프레임워크
    {
      text: "Semantic UI",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "BEM",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "CSS 모듈",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "Atomic",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "OOCSS",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "SMACSS",
      url: "#"
    },
    // to: CSS 아키텍쳐
    {
      text: "SUITCSS",
      url: "#",
      category: ""
    },
    // to: CSS in JS
    {
      text: "Styled Components",
      url: "#"
    },

    // to: 리액트
    {
      text: "상태 관리",
      url: "#"
    },
    // to: 상태 관리
    {
      text: "Component State / Context",
      url: "#"
    },
    // to: 상태 관리
    {
      text: "MobX",
      url: "#"
    },
    // to: 상태 관리
    {
      text: "Redux",
      url: "#"
    },
    // to: Redux
    {
      text: "데이터 영속화",
      url: "#"
    },
    // to: Redux
    {
      text: "헬퍼",
      url: "#"
    },
    // to: Redux
    {
      text: "비동기 액션 처리",
      url: "#"
    },
    // to: 데이터 영속화
    {
      text: "Redux Persist",
      url: "#"
    },
    // to: 데이터 영속화
    {
      text: "Redux Phoenix",
      url: "#"
    },
    // to: 헬퍼
    {
      text: "rematch",
      url: "#"
    },
    // to: 헬퍼
    {
      text: "reselect",
      url: "#"
    },
    // to: 비동기 액션 처리
    {
      text: "Redux Saga",
      url: "#"
    },
    // to: 비동기 액션 처리
    {
      text: "Redux Thunk",
      url: "#"
    },
    // to: 비동기 액션 처리
    {
      text: "Redux Better Promise",
      url: "#"
    },
    // to: 비동기 액션 처리
    {
      text: "Redux Observable",
      url: "#"
    },
    // to: 리액트
    {
      text: "타입 체커",
      url: "#"
    },
    // to: 타입 체커
    {
      text: "PropTypes",
      url: "#"
    },
    // to: 타입 체커
    {
      text: "TypeScript",
      url: "#"
    },
    // to: 타입 체커
    {
      text: "Flow",
      url: "#"
    },
    // to: 리액트
    {
      text: "폼 헬퍼",
      url: "#"
    },
    // to: 폼 헬퍼
    {
      text: "Redux Form",
      url: "#"
    },
    // to: 폼 헬퍼
    {
      text: "Formik",
      url: "#"
    },
    // to: 폼 헬퍼
    {
      text: "Formsy",
      url: "#"
    },
    // to: 폼 헬퍼
    {
      text: "Final Form",
      url: "#"
    },
    // to: 리액트
    {
      text: "라우팅",
      url: "#"
    },
    // to: 라우팅
    {
      text: "React-Router",
      url: "#"
    },
    // to: 라우팅
    {
      text: "Router5",
      url: "#"
    },
    // to: 라우팅
    {
      text: "Redux-First Router",
      url: "#"
    },
    // to: 라우팅
    {
      text: "Reach Router",
      url: "#"
    },
    // to: 리액트
    {
      text: "API 클라이언트",
      url: "#"
    },
    // to: API 클라이언트
    {
      text: "REST",
      url: "#"
    },
    // to: API 클라이언트
    {
      text: "GraphQL",
      url: "#"
    },
    // to: REST
    {
      text: "fetch (네이티브)",
      url: "#"
    },
    // to: REST
    {
      text: "SuperAgent",
      url: "#"
    },
    // to: REST
    {
      text: "axios",
      url: "#"
    },
    // to: GraphQL
    {
      text: "Apollo",
      url: "#"
    },

    // to: 리액트
    {
      text: "테스트",
      url: "#"
    },
    // to: 테스트
    {
      text: "유닛 테스트",
      url: "#"
    },
    // to: 테스트
    {
      text: "E2E 테스트",
      url: "#"
    },
    // to: 테스트
    {
      text: "통합 테스트",
      url: "#"
    },
    // to: 유닛 테스트
    {
      text: "Jest",
      url: "#"
    },
    // to: 유닛 테스트
    {
      text: "Enzyme",
      url: "#"
    },
    // to: 유닛 테스트
    {
      text: "Sinon",
      url: "#"
    },
    // to: 유닛 테스트
    {
      text: "Mocha",
      url: "#"
    },
    // to: 유닛 테스트
    {
      text: "Chai",
      url: "#"
    },
    // to: 통합 테스트
    {
      text: "Karma",
      url: "#"
    },
    // to: E2E 테스트
    {
      text: "Selenium",
      url: "#"
    },
    // to: E2E 테스트
    {
      text: "Cypress",
      url: "#"
    },
    // to: E2E 테스트
    {
      text: "Puppeteer",
      url: "#"
    },
    // to: E2E 테스트
    {
      text: "Cucumber.js",
      url: "#"
    },
    // to: E2E 테스트
    {
      text: "Nightwatch.js",
      url: "#"
    },
    // to: 리액트
    {
      text: "국제화 (i18n)",
      url: "#"
    },
    // to: 국제화 (i18n)
    {
      text: "React Intl",
      url: "#"
    },
    // to: 국제화 (i18n)
    {
      text: "React i18next",
      url: "#"
    },
    // to: 리액트
    {
      text: "서버 사이드 렌더링",
      url: "#"
    },
    // to:서버 사이드 렌더링
    {
      text: "Next.js",
      url: "#"
    },
    // to: 서버 사이드 렌더링
    {
      text: "After.js",
      url: "#"
    },
    // to: 서버 사이드 렌더링
    {
      text: "Rouge",
      url: "#"
    },
    // to: 리액트
    {
      text: "정적 사이트 생성기",
      url: "#"
    },
    // to: 정적 사이트 생성기
    {
      text: "Gatsby",
      url: "#"
    },
    // to: 리액트
    {
      text: "백엔드 통합",
      url: "#"
    },
    // to: 백엔드 통합
    {
      text: "React on Rails",
      url: "#"
    },
    // to: 리액트
    {
      text: "모바일 앱",
      url: "#"
    },
    // to: 모바일 앱
    {
      text: "React Native",
      url: "#"
    },
    // to: 모바일 앱
    {
      text: "Cordova/Phonegap",
      url: "#"
    },
    // to: 리액트
    {
      text: "VR",
      url: "#"
    },
    // to: VR
    {
      text: "React 360",
      url: "#"
    },
    // to: 리액트
    {
      text: "데스크탑 앱",
      url: "#"
    },
    // to: 데스크탑 앱
    {
      text: "Proton Native",
      url: "#"
    },
    // to: 데스크탑 앱
    {
      text: "Electron",
      url: "#"
    },
    // to: 데스크탑 앱
    {
      text: "React Native Windows",
      url: "#"
    }
  ],
  connections: [
    { target: "빌드 도구", source: "리액트" },
    { target: "스타일링", source: "리액트" },
    { target: "상태 관리", source: "리액트" },
    { target: "타입 체커", source: "리액트" },
    { target: "폼 헬퍼", source: "리액트" },
    { target: "라우팅", source: "리액트" },
    { target: "API 클라이언트", source: "리액트" },
    { target: "테스트", source: "리액트" },
    { target: "국제화 (i18n)", source: "리액트" },
    { target: "서버 사이드 렌더링", source: "리액트" },
    { target: "정적 사이트 생성기", source: "리액트" },
    { target: "백엔드 통합", source: "리액트" },
    { target: "모바일 앱", source: "리액트" },
    { target: "VR", source: "리액트" },
    { target: "데스크탑 앱", source: "리액트" },
    { target: "패키지 매니저", source: "빌드 도구" },
    { target: "테스크 러너", source: "빌드 도구" },
    { target: "webpack", source: "빌드 도구" },
    { target: "Parcel", source: "빌드 도구" },
    { target: "npm", source: "패키지 매니저" },
    { target: "Yarn", source: "패키지 매니저" },
    { target: "npm scripts", source: "테스크 러너" },
    { target: "gulp", source: "테스크 러너" },
    { target: "CSS 전처리", source: "스타일링" },
    { target: "CSS 프레임워크", source: "스타일링" },
    { target: "CSS in JS", source: "스타일링" },
    { target: "Sass/SCSS", source: "CSS 전처리" },
    { target: "PostCSS", source: "CSS 전처리" },
    { target: "Less", source: "CSS 전처리" },
    { target: "Stylus", source: "CSS 전처리" },
    { target: "Bootstrap", source: "CSS 프레임워크" },
    {
      target: "Materialize, Material UI, Material Design UI",
      source: "CSS 프레임워크"
    },
    { target: "Bulma", source: "CSS 프레임워크" },
    { target: "Semantic UI", source: "CSS 프레임워크" },
    { target: "CSS 아키텍쳐", source: "스타일링" },
    { target: "BEM", source: "CSS 아키텍쳐" },
    { target: "CSS 모듈", source: "CSS 아키텍쳐" },
    { target: "Atomic", source: "CSS 아키텍쳐" },
    { target: "OOCSS", source: "CSS 아키텍쳐" },
    { target: "SMACSS", source: "CSS 아키텍쳐" },
    { target: "SUITCSS", source: "CSS 아키텍쳐" },
    { target: "Styled Components", source: "CSS in JS" },
    { target: "Component State / Context", source: "상태 관리" },
    { target: "MobX", source: "상태 관리" },
    { target: "Redux", source: "상태 관리" },
    { target: "데이터 영속화", source: "Redux" },
    { target: "Redux Persist", source: "Redux" },
    { target: "Redux Phoenix", source: "Redux" },
    { target: "Redux Persist", source: "데이터 영속화" },
    { target: "Redux Phoenix", source: "데이터 영속화" },
    { target: "헬퍼", source: "Redux" },
    { target: "rematch", source: "헬퍼" },
    { target: "reselect", source: "헬퍼" },
    { target: "비동기 액션 처리", source: "Redux" },
    { target: "Redux Saga", source: "비동기 액션 처리" },
    { target: "Redux Thunk", source: "비동기 액션 처리" },
    { target: "Redux Better Promise", source: "비동기 액션 처리" },
    { target: "Redux Observable", source: "비동기 액션 처리" },
    { target: "PropTypes", source: "타입 체커" },
    { target: "TypeScript", source: "타입 체커" },
    { target: "Flow", source: "타입 체커" },
    { target: "Redux Form", source: "폼 헬퍼" },
    { target: "Formik", source: "폼 헬퍼" },
    { target: "Formsy", source: "폼 헬퍼" },
    { target: "Final Form", source: "폼 헬퍼" },
    { target: "React-Router", source: "라우팅" },
    { target: "Router5", source: "라우팅" },
    { target: "Redux-First Router", source: "라우팅" },
    { target: "Reach Router", source: "라우팅" },
    { target: "GraphQL", source: "API 클라이언트" },
    { target: "axios", source: "API 클라이언트" },
    { target: "fetch (네이티브)", source: "REST" },
    { target: "SuperAgent", source: "REST" },
    { target: "axios", source: "REST" },
    { target: "Apollo", source: "GraphQL" },
    { target: "유닛 테스트", source: "테스트" },
    { target: "E2E 테스트", source: "테스트" },
    { target: "통합 테스트", source: "테스트" },
    { target: "Jest", source: "유닛 테스트" },
    { target: "Enzyme", source: "유닛 테스트" },
    { target: "Sinon", source: "유닛 테스트" },
    { target: "Mocha", source: "유닛 테스트" },
    { target: "Chai", source: "유닛 테스트" },
    { target: "Karma", source: "통합 테스트" },
    { target: "Selenium", source: "E2E 테스트" },
    { target: "Cypress", source: "E2E 테스트" },
    { target: "Puppeteer", source: "E2E 테스트" },
    { target: "Cucumber.js", source: "E2E 테스트" },
    { target: "Nightwatch.js", source: "E2E 테스트" },
    { target: "React Intl", source: "국제화 (i18n)" },
    { target: "React i18next", source: "국제화 (i18n)" },
    { target: "Next.js", source: "서버 사이드 렌더링" },
    { target: "After.js", source: "서버 사이드 렌더링" },
    { target: "Rouge", source: "서버 사이드 렌더링" },
    { target: "Gatsby", source: "정적 사이트 생성기" },
    { target: "React on Rails", source: "백엔드 통합" },
    { target: "React Native", source: "모바일 앱" },
    { target: "Cordova/Phonegap", source: "모바일 앱" },
    { target: "React 360", source: "VR" },
    { target: "Proton Native", source: "데스크탑 앱" },
    { target: "Electron", source: "데스크탑 앱" },
    { target: "React Native Windows", source: "데스크탑 앱" }
  ]
};

const data = {
  vue,
  react
};

export default data;
