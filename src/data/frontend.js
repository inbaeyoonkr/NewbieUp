const data = {
  nodes: [
    { text: "프론트 엔드" },
    { text: "테스트" },
    { text: "Vue" },
    { text: "React" },
    { text: "Bootstrap" },
    { text: "Angular" },
    { text: "기본" }
  ],
  connections: [
    {
      source: "프론트 엔드",
      target: "테스트"
    },
    {
      source: "프론트 엔드",
      target: "Vue"
    },
    {
      source: "프론트 엔드",
      target: "React"
    },
    {
      source: "프론트 엔드",
      target: "Bootstrap"
    },
    {
      source: "프론트 엔드",
      target: "Angular"
    },
    {
      source: "프론트 엔드",
      target: "기본"
    }
  ]
};

export default data;
