<template>
  <div class="wrapper">
    <div class="balls">
      <div>👨‍💻</div>
      <div>👨‍💻</div>
      <div>👨‍💻</div>
    </div>
    <div class="buttons-wrapper">
      <router-link to="/front" class="button">Frontend</router-link>
      <router-link to="/back" class="button">Backend</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main_page"
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.balls {
  width: 20rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 250px;
}

.balls div {
  font-size: 3.5rem;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  margin-top: 10rem;
}

.button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  width: 10rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.125rem;
  text-indent: 0.125rem;
}

.button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

.button:hover {
  cursor: pointer;
  color: #161616;
}

.button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>
