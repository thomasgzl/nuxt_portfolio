import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "dataStore",

  state: () => ({
    projects: [
      {
        id: 1,
        title: "opale",
        technologies: ["vue", "html", "scss", "ts", "js", "symfony", "postgresql", "docker"],
        subtitle:
          "Opale is a tool designed to follow up on all aspects of an aid application: administrative, technical, legal and budgetary, while respecting internal procedures and the various regulations.",
        skills: {
          front: ["Vue.js", "Typescript", "HTML5", "SCSS", "Tailwind"],
          back: ["PHP", "Symfony"],
          server: ["PostgreSQL"],
          software: [],
        },
        description: [
          "The French Environment and Energy Management Agency (ADEME) participates in the implementation of public policies in the fields of environment, energy and sustainable development.",
          "It provides its expertise and advice to companies, local authorities, public authorities and the general public, to enable them to progress in their environmental approach.",
        ],
        image_bg: "/opale/img-bg.png",
        image_1: "/opale/img-1.png",
        image_2: "/opale/img-2.png",
        image_3: "/opale/img-3.png",
      },
      {
        id: 2,
        title: "nodePay",
        technologies: [
          "React Native",
          "Bootstrap",
          "MongoDB",
          "Express",
          "Node.js"
        ],
        subtitle:
          "Crypto-currency payment app for iOS and Android.",
        skills: {
          front: ["React Native", "Bootstrap"],
          back: ["Node.js", "Express"],
          server: ["MongoDB"],
          software: [],
        },
        description: [
          "Made a crypto-currency payment app for iOS and Android.",
          "Used React Native, mobx store system, material design for icons and global components like buttons, animations..."
        ],

        image_bg: "/nodepay/img-bg.png",
        image_1: "/nodepay/img-1.png",
        image_2: "/nodepay/img-2.png",
        image_3: "/nodepay/img-3.png",
        video: "/nodepay/video.mp4",
      },
      {
        id: 3,
        title: "esports",
        technologies: [
          "Adobe Photoshop",
          "Adobe Illustrator"
        ],
        subtitle:
          "Free-time logos/banners for Esports teams & twitch banners/identity",
        skills: {
          front: [],
          back: [],
          server: [],
          software: ["Illustrator", "Photoshop", "Midjourney"],
        },
        description: [
          "Various logos for Esports teams & twitch streamers",
          "Differents banners for discord's servers & twitch streamer's identity",
        ],
        image_bg: "/esports/img-bg.jpg",
        image_1: "/esports/img-1.png",
        image_2: "/esports/img-2.png",
        image_3: "/esports/img-3.png",
      },
    ],
  }),

  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
  },
});
