<template>
  <div>
    <div class="test">로드맵을 보여줄 페이지 입니다!!</div>
    <mindmap :nodes="nodes" :connections="connections" :editable="false" />
  </div>
</template>

<script>
import data from "../data/react.js";

const { nodes, connections } = data;
console.log(data);
export default {
  name: "roadmap_page",
  data() {
    return {
      nodes,
      connections
    };
  }
};
</script>

<style scoped>
</style>
