const data = {
  nodes: [
    { text: "프론트 엔드" },
    { text: "테스트", url: "#" },
    { text: "Vue", url: "#" },
    { text: "React", url: "#" },
    { text: "Bootstrap", url: "#" },
    { text: "Angular", url: "#" },
    { text: "기본", url: "#" }
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
