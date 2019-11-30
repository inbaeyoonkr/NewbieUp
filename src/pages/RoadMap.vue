<template>
  <div>
    <router-link to="/" class="home">홈</router-link>
    <div>
      <mindmap :nodes="nodes" :connections="connections" :editable="false" />
    </div>
  </div>
</template>

<script>
import data from "../data/integrated_data.js";

export default {
  name: "roadmap_page",

  beforeCreate() {
    const type = this.$route.query.type;

    if (!data[type]) {
      alert("아직 준비중입니다 :)");
      window.history.back();
    }

    const { nodes, connections } = data[type];

    this.nodes = nodes;
    this.connections = connections;
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.home {
  position: absolute;
  font-size: 2rem;
  width: 5rem;
  top: 30px;
  left: 100px;
}
</style>
