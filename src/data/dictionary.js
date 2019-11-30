const dictionary = {
  html: {
    explanation:
      "HTML은 하이퍼텍스트 마크업 언어(HyperText Markup Language). 웹 페이지를 위한 지배적인 마크업 언어다. HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다.",
    book: [
      {
        title: "생활코딩! HTML + CSS + 자바스크립트",
        link: "/static/images/html_01.jpg"
      },
      {
        title: "HTML 5 웹 프로그래밍 입문",
        link: "/static/images/html_02.jpg"
      }
    ],
    convention: [
      {
        title: "NHN html/css 코딩 컨벤션",
        link: "https://nuli.navercorp.com/sharing/fe/coding"
      }
    ]
  },
  css: {
    explanation:
      "CSS는 Cascading Style Sheets의 약자이다. CSS는 HTML 요소들이 각종 미디어에서 어떻게 보이는가를 정의하는 데 사용되는 스타일 시트 언어이다.",
    book: [
      {
        title: "생활코딩! HTML + CSS + 자바스크립트",
        link: "/static/images/html_01.jpg"
      },
      {
        title: "Do it! HTML5 + CSS3 웹 표준의 정석",
        link: "/static/images/css_02.jpg"
      }
    ],
    convention: [
      {
        title: "NHN html/css 코딩 컨벤션",
        link: "https://nuli.navercorp.com/sharing/fe/coding"
      },
      {
        title: "다음 코딩 컨벤션",
        link: "http://darum.daum.net/convention/css/css_convention"
      }
    ]
  },
  javascript: {
    explanation:
      "객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.",
    book: [
      {
        title: "초보자를 위한 JavaScript 200제",
        link: "/static/images/javascript_01.jpg"
      },
      {
        title: "모던 웹을 위한 JavaScript + jQuery 입문",
        link: "/static/images/javascript_02.jpg"
      }
    ],
    convention: [
      {
        title: "자바스크립트 컨벤션",
        link:
          "https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR"
      }
    ]
  },
  preprocessor: {
    explanation:
      "모듈별로 특별한 Syntax를 가지고 있고 여기에 믹스인(mixin), 중첩 셀렉터(nesting selector), 상속 셀렉터(inheritance selector) 등 Programmatically 한 요소를 접목해 방대해지는 CSS 문서의 양을 효율적으로 처리하고 관리해 주는 통합적인 단어를 말한다. 이 CSS 전처리기(CSS Preprocessor) 자체만으로는 웹 서버가 인지하지 못하기 때문에 각 CSS 전처리기에 맞는 Compiler를 사용해야 하고 컴파일을 하게 되면 실제로 우리가 사용하는 CSS 문서로 변환이 된다. CSS 전처리기(CSS Preprocessor)에는 다양한 모듈이 존재하고 가장 많이 사용되는 전처리기에는 Sass, Less, Stylus가 있으며, 서로의 특징에 맞게 약간의 Syntax만 다를 뿐 개념 자체는 동일하기 때문에 Learning curve가 낮은 편이다.",
    book: [
      {
        title: "웹디자이너를 위한 SASS",
        link: "/static/images/preprocessor_01.jpg"
      },
      {
        title: "CSS 수퍼파워 Sass로 디자인하라",
        link: "/static/images/preprocessor_02.jpg"
      }
    ],
    convention: [
      {
        title: "CSS 전처리기 컨벤션",
        link: "https://webclub.tistory.com/518"
      }
    ]
  },
  css_framework: {
    explanation:
      "CSS 언어를 더 간단히 쓸 수 있게 해준다. 레이아웃, 타이포그래피, 폼 디자인, 버튼 등 웹 디자인 요소를 간단히 지정 가능하다. CSS 프레임워크로는 Bootstrap, Materialize CSS, Bulma, Semontic UI 등이 있다.",
    book: [
      {
        title: "Bootstrap",
        link: "/static/images/css_framework.jpg"
      }
    ],
    convention: [
      {
        title: null,
        link: null
      }
    ]
  },
  build: {
    explanation:
      "빌드도구에는 린스와 프리티어가 있는데 프리티어(Prettier)는 코드 스타일을 정리해주는 도구이다. ESLint와 함께 사용하면 좀 더 개인 취향에 맞는 코드 스타일로 전체 코드를 정리할 수 있다. VSCode(Visual Studio Code), Atom, Sublime 등 대중적인 텍스트 편집기에서 이미 플러그인 형태로 지원하고 있으며 VSCode에서는 아래와 같이 확장 플러그인으로 설치할 수 있다. 린트(ESLint)는 잘못된 코드 스타일로 인해 에러가 나지 않게 코드 문법을 잡아주는 문법 검사기이다. 문장 뒤에 자동으로 세미콜론, 콤마를 붙여주기도 하고 의미 없는 변수, API 사용에 대해 경고해주는 등 여러 문법 오류에 대해서 미리 알려준다. 가급적 덜 에러가 나는 코드를 작성하면 자연스럽게 버그도 줄어들기 때문에 서비스 품질을 높이는데도 도움이 된다.",
    book: [
      {
        title: null,
        link: null
      }
    ],
    convention: [
      {
        title: null,
        link: null
      }
    ]
  },
  React: {
    title: "React",
    explanation:
      "사용자 인터페이스를 만들기 위한 Facebook이 만든 JavaScript 라이브러리 선언형이며 컴포넌트 기반이다.",
    book: [
      {
        title: "리액트 교과서",
        link: "/static/images/react_01.jpg"
      },
      {
        title: "리액트를 다루는 기술",
        link: "/static/images/react_02.jpg"
      }
    ],
    convention: [
      {
        title: "Airbnb가 리액트를 다루는 예시",
        link: "https://github.com/airbnb/javascript/tree/master/react"
      }
    ]
  },
  Angular: {
    title: "Angular",
    explanation:
      "Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹 애플리케이션은 물론 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경을 제공한다.",
    book: [
      {
        title: "앵귤러 첫걸음",
        link: "/static/images/angular_01.jpg"
      },
      {
        title: "따라 하며 배우는 앵귤러 마스터북",
        link: "/static/images/angular_02.jpg"
      }
    ],
    convention: [
      {
        title: null,
        link: null
      }
    ]
  },
  Vue: {
    title: "Vue",
    explanation:
      "사용자 인터페이스를 만들기 위한 프로그레시브 프레임워크 입니다.",
    book: [
      {
        title: "Do it! Vue.js 입문",
        link: "../../static/images/vue_01.jpg"
      },
      {
        title: "빠르게 배워서 바르게 적용하는 Vue.js 퀵 스타트",
        link: "/static/images/vue_02.jpg"
      }
    ],
    convention: [
      {
        title: null,
        link: null
      }
    ]
  }
};

export default dictionary;
