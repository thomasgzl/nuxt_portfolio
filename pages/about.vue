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
      <p>/2023&copy;</p>
    </nav>
    <div class="content">
      <div class="about-me-title">
        <h1>About</h1>
      </div>

      <div class="about-me-content">
        <h2><i>Hey !</i> I'm Romain. A web application developer.</h2>
        <div class="about-me-columns">
          <div class="left">
            <p>
              I like to create. Getting into web development changed a lot of
              things for me, and since then, I try to push my work to new
              horizons. Luckily, the horizon is vast.
            </p>
            <p>
              What excites me the most about web developement is being able to
              bring an idea or a need to fruition. Creation is not only visual
              but involves logic, a pragmatic analysis of needs, and the
              resources available to do it.
            </p>
          </div>
          <div class="right">
            <img src="~/assets/images/img.png" alt="picture romain navoret" />
          </div>
        </div>
        <p>
          Since 2022, I have been dedicating 24/7 to developing my skills in
          this field. Mentored by
          <a href="https://coder-pour-changer-de-vie.com/" target="_blank"
            ><i>Nicolas Georgemel</i></a
          >, backed by 20 years of technic and manage projects experience, I
          have developed my skills to have a comprehensive view of the developer
          profession, project implementation, and allow me to stand on my own
          two feet.
        </p>

        <div class="skills">
          <h3>skills</h3>

          <div class="main-skills">
            <i class="devicon-vuejs-plain"></i>
            <i class="devicon-nuxtjs-plain"></i>
            <i class="devicon-django-plain colored"></i>
            <i class="devicon-postgresql-plain"></i>
          </div>
          <div class="secondary-skills">
            <h4>FRAMEWORKS CSS</h4>
            <p>SCSS / Bulma / Tailwind / Bootstrap</p>
            <h4>KNOWLEDGES</h4>
            <p>POO / Design Patterns / Virtual Box / Agile</p>
            <h4>DEVOPS</h4>
            <p>Docker Compose / Kubernetes</p>
            <h4>TOOLS</h4>
            <p>
              Pycharm / VsCode / Git / PgAdmin / PgModeler / Visual Paradigm /
              Docker Desktop / Postman
            </p>
          </div>
        </div>

        <div class="link-index">
          <div class="button-wrapper">
            <NuxtLink to="/" class="menu-item">
              <div>
                <span style="--index: 0">m</span>
                <span style="--index: 1">y</span>
                <span style="--index: 2">&nbsp;</span>
                <span style="--index: 3">w</span>
                <span style="--index: 4">o</span>
                <span style="--index: 5">r</span>
                <span style="--index: 6">k</span>
              </div>
              <div class="hover-clone">
                <span style="--index: 0">m</span>
                <span style="--index: 1">y</span>
                <span style="--index: 2">&nbsp;</span>
                <span style="--index: 3">w</span>
                <span style="--index: 4">o</span>
                <span style="--index: 5">r</span>
                <span style="--index: 6">k</span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <p>
          I usually work with Vue.js for the front and Django for the back. And
          most important: I like to learn. This curiosity drives me to explore
          in-depth my current skills and the next one's, gradually broadening my
          horizon.
        </p>

        <p></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".content h1", { transform: "translateY(250px)" });

  const tl = gsap.timeline();

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  }).to(".content h1", {
    y: 0,
    duration: 1,
    ease: "power4.out",
  });
});
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--secondary);
  color: var(--primary);
  overflow: scroll;
}

a,
a span,
link {
  color: var(--primary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 10;
}

.content {
  display: flex;
  width: min-content;
  flex-direction: column;
  padding: 10% 0 10% 10%;
}

.about-me-title-wrapper {
  display: flex;
  position: relative;
}

.about-me-title {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
}

.content h1 {
  font-size: clamp(13em, 15vw, 20em);
  font-family: "kionaregular";
  position: relative;
  z-index: 1;
  line-height: 1;
  width: max-content;
}

.about-me-content {
  display: flex;
  flex-direction: column;
  gap: 3em;
  width: 90%;
  padding-bottom: 4vw;
  z-index: 1;
}

.about-me-content h2 {
  font-size: clamp(4em, 3vw, 6em);
  font-weight: lighter;
  z-index: 1;
  margin-bottom: 30px;
}

.about-me-columns {
  display: flex;
}

.about-me-columns .left {
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
}
.about-me-columns .right {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: clamp(50px, 100%, 350px);
  object-fit: cover;
}

.about-me-content p,
.skills p {
  font-size: 1.9em;
  line-height: 30px;
}

.link-index {
  display: flex;
  justify-content: center;
}

.skills h3 {
  font-size: 2.3em;
  font-weight: 100;
  text-transform: uppercase;
  position: relative;
  width: min-content;
}

.skills h3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--primary);
  left: 0;
  bottom: 0;
}

.skills .main-skills {
  display: flex;
  gap: 3em;
  justify-content: center;
  margin: 6em 0;
}
.skills .main-skills i {
  color: var(--primary);
  font-size: 8em;
}

.secondary-skills {
  display: flex;
  flex-direction: column;
}

.skills h4 {
  font-size: 1.9em;
  margin-top: 2em;
  font-weight: 500;
}

.button-wrapper {
  width: min-content;
  padding: 15px 25px;
  background-color: var(--primary);
  margin: 5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-wrapper a span {
  color: var(--secondary);
  font-size: 2em;
  font-weight: lighter;
  margin-right: 0.3em;
}

@media screen and (max-width: 1025px) {
  .about-me-columns {
    flex-direction: column;
    gap: 3em;
  }
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .about-me-content {
    padding-right: 0;
  }

  .about-me-content h2 {
    width: 80%;
  }

  .content {
    padding: 10em 2em;
  }

  .content h1 {
    font-size: clamp(4em, 19vw, 15em);
    padding: 30px 0;
  }

  .about-me-content h2 {
    font-size: 5.9vw;
    font-size: clamp(2.3em, 5.9vw, 5em);
  }

  .about-me-content p,
  .skills p {
    font-size: 1.8em;
  }
}

@media screen and (max-width: 530px) {
  .about-me-content p,
  .skills p {
    font-size: 1.7em;
    line-height: 25px;
    width: 100%;
  }

  .content {
    width: 100%;
  }

  .about-me-content {
    width: 100%;
  }

  .skills .main-skills i {
    font-size: 6em;
    gap: 2em;
  }
}

@media screen and (max-width: 430px) {
  .skills .main-skills i {
    font-size: 5.5em;
  }

  .about-me-content h2 {
    width: 100%;
  }

  .skills h3 {
    font-size: 1.9em;
  }
}
</style>
