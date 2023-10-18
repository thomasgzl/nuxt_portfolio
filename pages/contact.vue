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
      <div class="title-wrapper"><h1>Hello.</h1></div>
      <h2 id="title">want to discuss?</h2>
      <div class="form-wrapper">
        <div class="button-wrapper">
          <a :href="'mailto:' + eMail" class="menu-item">
            <div>
              <span style="--index: 0">s</span>
              <span style="--index: 1">e</span>
              <span style="--index: 2">n</span>
              <span style="--index: 3">d</span>
              <span style="--index: 4">&nbsp;</span>
              <span style="--index: 5">m</span>
              <span style="--index: 6">e</span>
              <span style="--index: 7">&nbsp;</span>
              <span style="--index: 8">a</span>
              <span style="--index: 9">n</span>
              <span style="--index: 10">&nbsp;</span>
              <span style="--index: 11">e</span>
              <span style="--index: 12">-</span>
              <span style="--index: 13">m</span>
              <span style="--index: 14">a</span>
              <span style="--index: 15">i</span>
              <span style="--index: 16">l</span>
            </div>
            <div class="hover-clone">
              <span style="--index: 0">s</span>
              <span style="--index: 1">e</span>
              <span style="--index: 2">n</span>
              <span style="--index: 3">d</span>
              <span style="--index: 4">&nbsp;</span>
              <span style="--index: 5">m</span>
              <span style="--index: 6">e</span>
              <span style="--index: 7">&nbsp;</span>
              <span style="--index: 8">a</span>
              <span style="--index: 9">n</span>
              <span style="--index: 10">&nbsp;</span>
              <span style="--index: 11">e</span>
              <span style="--index: 12">-</span>
              <span style="--index: 13">m</span>
              <span style="--index: 14">a</span>
              <span style="--index: 15">i</span>
              <span style="--index: 16">l</span>
            </div>
          </a>
        </div>

        <p class="contact-end">
          Interested in my profile, my work or else?<br />
          Leave me a message, i'll write you back asap.<br />
          <a
            href="https://www.linkedin.com/in/thomasgzl/"
            target="_blank"
          >
            Or join me on <i class="devicon-linkedin-plain"></i
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import SplitType from "split-type";
import { computed, onMounted, ref } from "vue";

const name = ref("thomasgonzalez.pro");
const domain = ref("gmail.com");

const eMail = computed(() => `${name.value}@${domain.value}`);

onMounted(() => {
  const title = new SplitType("#title");
  gsap.set(".content h1", { transform: "translateY(250px)" });

  const contact = gsap.timeline();

  contact
    .to(".wrapper", {
      delay: 0.2,
      height: 0,
      duration: 0.5,
      ease: "Power2.easeIn",
    })

    .to(".content h1", {
      duration: 1,
      ease: "Power4.easeOut",
      y: 0,
    })
    .fromTo(
      ".content h2 .word .char",
      { y: -100 },
      { y: 0, delay: 0.5, stagger: 0.05 },
      "-=1"
    );
});
</script>

<style scoped>
@import "~/assets/css/main.css";

body,
html {
  overflow: hidden;
}

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
  z-index: 5;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  padding: 100px;
  flex-grow: 0;
}

.title-wrapper {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
}

.content h1 {
  font-size: clamp(50px, 14vw, 22em);
  line-height: 1;
  font-family: "russo-one";
}
.content h2 {
  font-size: clamp(37px, 3.9vw, 6.3em);
  line-height: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--primary);
}

.content h2,
.content h1 {
  position: relative;

  font-weight: lighter;
}

/*  form wrapper  */

.form-wrapper {
  position: relative;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  gap: 2vw;
  z-index: 1;
}

.form-wrapper .contact-end {
  line-height: 1.5;
  font-size: 1.8em;
}

.contact-end a {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.button-wrapper {
  padding: 10px 15px;
  background-color: var(--secondary);
  margin: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-wrapper a span {
  color: var(--primary);
  font-size: 1.9em;
  font-weight: lighter;
  margin-right: 0.3em;
}

@media screen and (max-width: 768px) {
  .content {
    justify-content: center;
    padding: 5vw;
    flex-grow: 1;
  }
  .content h1 {
    font-size: 23vw;
  }
  .content h2 {
    font-size: 7vw;
  }
}
@media screen and (max-width: 460px) {
  .button-wrapper a span {
    font-size: 1.8em;
  }
  .form-wrapper .contact-end {
    line-height: 1.5;
    font-size: 16px;
  }
}

@media only screen and (orientation: landscape) {
  .content {
    overflow-y: scroll;
  }
}

@media screen and (max-width: 900px) and (orientation: landscape) {
  .container {
    overflow-y: scroll;
    height: auto;
    padding: 8em 0;
  }
}
</style>
