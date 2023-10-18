<template>
  <div class="container">
    <div class="wrapper"></div>
    <nav>
      <div class="list-items">
        <NuxtLink to="/" class="menu-item">
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
        </NuxtLink>
      </div>
      <p>///2k23&copy;</p>
    </nav>
    <div class="content">
      <div class="left">
        <h1>////portfolio</h1>
        <p>
          These projects serve various purposes, whether for work, practicing skills,
          implementing technologies, exploring libraries and frameworks.
        </p>
        <p>
          But for each project I pay particular attention to the interaction,
          design and performance in order to give to users pleasant ux.
        </p>
      </div>
      <div class="right">
        <div
          class="projects-list"
          v-for="project in projects"
          :key="project.id"
        >
          <NuxtLink :to="'/works/' + project.id" class="project">
            <h2 class="title">{{ project.title }}</h2>
            <p v-for="technology in project.technologies" class="info" :key="technology">
              {{ technology }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="custom-cursor"></div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import { useDataStore } from "~/store/dataStore";

const store = useDataStore();
const projects = store.projects;

onMounted(() => {
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".left h1", { transform: "translateY(2em)" });
  gsap.set(".projects-list", {
    transform: "translateY(50px)",
    filter: "blur(10px)",
    opacity: 0,
  });

  const tl = gsap.timeline();

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  })
    .to(
      ".projects-list",
      {
        duration: 0.5,
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        ease: "power4.in",
      },
      "-=.4"
    )
    .to(".left h1", {
      y: 0,
      duration: 1,
      ease: "power4.out",
    });

const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

document.addEventListener("mouseout", destroyCursor);
});
</script>

<style scoped>
@import "~/assets/css/main.css";
.container {
  background-color: var(--primary);
  color: var(--secondary);
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
  z-index: 10;
}

.content {
  display: flex;
  gap: 4vw;
  padding-left: 100px;
}
.content .left {
  height: 100%;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  padding-bottom: 4vw;
}

.left h1 {
  font-size: 2.5em;
  transform: translateY(2em);
  text-transform: uppercase;
  font-family: "russo-one";
  letter-spacing: 0.2em;
}
.left p {
  font-size: 1.8em;
  background: var(--primary);
  line-height: 30px;
  z-index: 1;
}

.content .right {
  flex: 1;
  overflow-y: scroll;
}
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: start;
  position: relative;
  text-transform: uppercase;
  font-weight: lighter;
  filter: blur(10px);
  transform: translateY(50px);
  padding: 2vw;
  opacity: 0;
}

.projects-list .project:hover h2 {
  transform: skewX(-10deg) translateX(20px);
}
.projects-list .project:hover p {
  transform: translateX(-10px);
}

.projects-list h2 {
  font-size: clamp(20px, 7vw, 15em);
  transition: all 0.3s ease;

  font-family: "russo-one";
}

.projects-list .info {
  font-family: Montserrat, sans-serif;
  font-size: clamp(13px, 1vw, 4em);
  padding-left: 20px;
  position: relative;
  transition: all 1s ease-in-out;
  display: inline-flex;
}

* {
  cursor: none;
}
.custom-cursor {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--secondary);
  transition-property: transform, scale, opacity;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  scale: 0.3;
  z-index: 10;
}
.custom-cursor--link {
  scale: 1;
}
.custom-cursor--init {
  opacity: 1;
}

@media screen and (max-width: 1025px) {
  .container {
    height: auto;
  }
  .content .left {
    height: auto;
    width: 80%;
  }

  .content {
    flex-direction: column;
    width: 100%;
    padding: 100px 0 0 100px;
    gap: 3vw;
  }

  .content .right {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
  }

  .projects-list h2 {
    font-size: clamp(3em, 12vw, 17em);
  }
}

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    top: 0;
    left: 0;

    height: 60px;
    width: 100%;
  }
  .content {
    padding: 100px 3em;
  }

  .content .left {
    width: 100%;
  }

  .left p {
    font-size: 1.7em;
  }
}
</style>
