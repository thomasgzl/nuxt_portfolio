<template>
  <div class="container">
    <div class="wrapper"></div>
    <nav>
      <div class="list-items">
        <div @click="handleClearError" class="menu-item">
          <div>
            <span style="--index: 0">h</span>
            <span style="--index: 1">o</span>
            <span style="--index: 2">m</span>
            <span style="--index: 3">e</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">h</span>
            <span style="--index: 1">o</span>
            <span style="--index: 2">m</span>
            <span style="--index: 3">e</span>
          </div>
        </div>
      </div>
      <p>&copy;/2023</p>
    </nav>
    <div class="content">
      <h1>{{ error.statusCode }}.</h1>
      <div class="message-wrapper">
        <h2 id="title">error</h2>
        <p class="message">*{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import SplitType from "split-type";
import { onMounted, ref } from "vue";

defineProps(["error"]);
const handleClearError = () => clearError({ redirect: "/" });

onMounted(() => {
  const title = new SplitType("#title");
  gsap.set(".content h1", { transform: "translateY(150px)" });

  const contact = gsap.timeline();

  contact
    .to(".wrapper", {
      delay: 0.2,
      height: 0,
      duration: 0.5,
      ease: "power4.in",
    })

    .fromTo(
      ".content h1",
      { y: 200 },
      {
        duration: 1,
        ease: "power4.out",
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      ".content h2 .word .char",
      { y: -100 },
      { y: 0, delay: 0.5, stagger: 0.05 },
      "-=1"
    )
    .to(".message", {
      y: 0,
      duration: 0.5,
      opacity: 1,
      ease: "power4.in",
    });
});
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--primary);
  color: var(--secondary);
}

.menu-item {
  cursor: pointer;
}

a,
a span,
link {
  color: var(--secondary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--secondary);
  z-index: 5;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  padding: 4vw 5vw;
  flex-grow: 0;
}

.content h1 {
  position: relative;
  font-size: 25em;
  opacity: 0;
  font-family: "kionaregular";
}

.message-wrapper {
  display: flex;
  flex-direction: column;

  background: var(--primary);
  z-index: 2;
  height: 40vh;
}
.message-wrapper h2 {
  position: relative;
  font-size: 3em;
  line-height: 3rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  font-weight: 500;
}

.message {
  font-size: 20px;
  transform: translateY(30px);
  opacity: 0;
}
</style>
