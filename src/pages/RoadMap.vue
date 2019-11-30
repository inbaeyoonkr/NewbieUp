<template>
  <div>
    <div class="test">로드맵을 보여줄 페이지 입니다!!</div>
    <mindmap
      :nodes="nodes"
      :connections="connections"
      :editable="false"
    />
  </div>
</template>

<script>

    export default {
        name: "roadmap_page",
        data() {
          return {
            nodes: [
              {
                "text": "hello",
                "url": "https://www.naver.com",
                "category": "react"
              },
              {
                "text": "world",
                "url": "https://www.naver.com",
                "category": "react"
              }
            ],
            connections: [
              {
                "source": "hello",
                "target": "world"
              }
            ],
          };
        }
    }
</script>

<style scoped>

</style>
