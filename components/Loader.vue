<template>
  <div class="container">
    <div class="loader">
      <p class="text-loader">loading...</p>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--primary);
  display: flex;
  justify-content: right;
  align-items: flex-end;
}

.loader {
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10em;
}

.text-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 2em;
  color: var(--secondary);
  text-transform: uppercase;
}

span {
  position: absolute;
  top: 0;
  left: 0;
  border: solid 1px var(--secondary);
  width: 100%;
  height: 100%;
  animation: animate 5s linear infinite;
}

span:nth-child(1) {
  border-radius: 42% 58% 70% 30% / 79% 64% 36% 21%;
}

span:nth-child(2) {
  animation-direction: reverse;
  border-radius: 58% 42% 70% 30% / 30% 64% 36% 70%;
}
span:nth-child(3) {
  animation-duration: 3s;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
span:nth-child(4) {
  animation-direction: reverse;
  animation-duration: 4s;
  border-radius: 77% 23% 55% 45% / 44% 83% 17% 56%;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
