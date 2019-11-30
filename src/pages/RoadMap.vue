<template>
  <div>
    <mindmap :nodes="nodes" :connections="connections" :editable="false" />
  </div>
</template>

<script>

  import data from '../data/integrated_data.js';

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
        return {
        };
      }
    }

</script>

<style scoped>
</style>
