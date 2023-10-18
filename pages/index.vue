<template>
  <div class="container">
    <p class="made-it">*Made with Nuxt</p>
    <div class="wrapper"></div>
    <nav>
      <div class="list-items">
        <a
          class="menu-item"
          href="https://github.com/thomasgzl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span style="--index: 0">g</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">t</span>
            <span style="--index: 3">h</span>
            <span style="--index: 4">u</span>
            <span style="--index: 5">b</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">g</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">t</span>
            <span style="--index: 3">h</span>
            <span style="--index: 4">u</span>
            <span style="--index: 5">b</span>
          </div>
        </a>
        <a
          class="menu-item"
          href="https://www.linkedin.com/in/thomasgzl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span style="--index: 0">l</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">n</span>
            <span style="--index: 3">k</span>
            <span style="--index: 4">e</span>
            <span style="--index: 5">d</span>
            <span style="--index: 6">i</span>
            <span style="--index: 7">n</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">l</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">n</span>
            <span style="--index: 3">k</span>
            <span style="--index: 4">e</span>
            <span style="--index: 5">d</span>
            <span style="--index: 6">i</span>
            <span style="--index: 7">n</span>
          </div>
        </a>
      </div>

      <p>///2k23&copy;</p>
    </nav>
    <div class="content">
      <div class="left">
        <img
            src="~/assets/images/logo_S.png"
            alt="project-picture"
            class="logo"
          />
        <h1>////athmōs</h1>
        <div class="header-mask"></div>

        <div class="content-mask">
          <p>
            Web full stack developer Vue.js. Currently available,
            looking for oportunity.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="index-list">
          <h2><NuxtLink to="/about/">/about</NuxtLink></h2>
          <h2><NuxtLink to="/works/">/works</NuxtLink></h2>
          <h2><NuxtLink to="/contact/">/contact</NuxtLink></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const tl = gsap.timeline();
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".left h1", { transform: "translateY(75px)" });

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  })
    .to(
      ".index-list",
      {
        duration: 0.3,
        y: 0,
        filter: "blur(0px)",
        ease: "Power4.easeOut",
      },
      "-=.2"
    )
    .to(
      ".left h1",
      {
        y: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "-=.1"
    );
});
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--secondary);
  color: var(--primary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 10;
}

a,
a span,
link {
  color: var(--primary);
}

.content {
  display: flex;
  gap: 4vw;
  padding: 100px;
  width: 100%;
  height: 100%;
}
.content .left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.content-mask {
  z-index: 3;
  padding: 3em 0;
}

.left h1 {
  font-size: 2.5em;
  transform: translateY(7.5em);
  text-transform: uppercase;
  font-family: "russo-one";
}
.left p {
  font-size: 1.8em;
  background: var(--secondary);
  line-height: 25px;
  padding: 0 1vw 2em 0;
  z-index: 1;
}

.content .right {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "russo-one";
}

.index-list {
  transform: translateY(50px);
  filter: blur(10px);
}

.index-list h2 {
  margin-bottom: -20px; /* Ajustez cette valeur selon vos besoins */
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 12vw;
}

.index-list h2:hover {
  transform: skewX(-10deg) translateX(20px);
}

.made-it {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 3px;
  font-size: 1.5em;
}
.logo {
  margin-bottom: 3rem;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
}

@media screen and (max-width: 1025px) {
  .content {
    flex-direction: column;

    justify-content: center;
    gap: 0;
    padding: 5em 5em 5em 100px;
  }

  .content-mask {
    width: 70vw;
  }

  .content .right {
    justify-content: flex-start;
    flex: 0;
  }

  .content .left {
    flex: 1;
  }
}

@media screen and (max-width: 768px) {
  .content {
    padding: 5em;
  }
  .left h1 {
    font-size: 2.2em;
    transform: translateY(7em);
  }
  .left p {
    font-size: 1.6em;

    line-height: 22px;
  }
  .content .right {
    justify-content: flex-start;

    flex: 1;
  }

  .index-list h2 {
    margin-bottom: 0;
    font-size: 16vw;
  }
}

@media screen and (max-width: 900px) and (orientation: landscape) {
  .container {
    overflow-y: scroll;
    height: auto;
    padding: 15em 0 8em 0;
  }
}
</style>
