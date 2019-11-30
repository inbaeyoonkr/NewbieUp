const data = {
  nodes: [
    { "text": "백 엔드" },
    { "text": "Python" },
    { "text": "Ruby and Rails" },
    { "text": "웹 서버" },
    { "text": "Spring" },
    { "text": "Plask" },
    { "text": "Django" }
  ],
  connections: [
    {
      "source": "백 엔드",
      "target": "Python"
    },
    {
      "source": "백 엔드",
      "target": "Ruby and Rails"
    },
    {
      "source": "백 엔드",
      "target": "웹 서버"
    },
    {
      "source": "백 엔드",
      "target": "Spring"
    },
    {
      "source": "Python",
      "target": "Plask"
    },
    {
      "source": "Python",
      "target": "Django"
    },
  ]
};

export default data;
