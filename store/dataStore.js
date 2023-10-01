import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "dataStore",

  state: () => ({
    projects: [
      {
        id: 1,
        title: "my garden",
        technologies: ["html", "css", "js", "python", "django", "postgresql"],
        subtitle:
          "Django application allowing to manage one's garden based on one's location.",
        skills: {
          front: [" HTML5", "Bulma", "CSS3", "JavaScript"],
          back: ["Python", "Django"],
          server: ["PostgreSQL"],
        },
        description: [
          "35% of French people garden, thus in this project, I wanted to create a tool for these enthusiasts, lovers of gardening. The role of this application is both informational and also aids in management.",
          "This application allows for adapting gardening according to the climate. Depending on the location, the department, the planting, or harvesting dates are different.",
          "This project primarily relies on the Django framework, thereby benefiting from its administration interface and its security but obliging me to make adjustments to perform requests to a Django view without needing to reload the page (asynchronous request) and improve the user experience.",
        ],
        image_bg: "/my_garden/img-bg.png",
        image_1: "/my_garden/img-1.png",
        image_2: "/my_garden/img-2.png",
        image_3: "/my_garden/img-3.png",
        video: "/my_garden/video.mp4",
      },
      {
        id: 2,
        title: "facture",
        technologies: [
          "html",
          "tailwind css",
          "vue.js",
          "nuxt",
          "django rest",
          "sqlite",
        ],
        subtitle:
          "Web application built with Nuxt and Django Rest Framework to create and manage invoices easily.",
        skills: {
          front: ["HTML5", "Tailwind CSS", "jsPDF", "Vue.js", "Nuxt"],
          back: ["Python", "Django REST"],
          server: ["SQLite"],
        },
        description: [
          "This web application allows for the quick and easy creation of an invoice as independant.",
          "To do this, all that is needed is to register, create a user account, create a business and complete the form. The total and the layout are automatic. The document can be downloaded in PDF format using the jsPDF library.",
          "Technically, the application is built on a Django REST backend for creating APIs with an SQLite database. The frontend is in Vue.js, by extension, Nuxt and Tailwind CSS framework.",
        ],

        image_bg: "/facture/img-bg.png",
        image_1: "/facture/img-1.png",
        image_2: "/facture/img-2.png",
        image_3: "/facture/img-3.png",
        video: "/facture/video.mp4",
      },
      {
        id: 3,
        title: "to do",
        technologies: [
          "  html ",
          "css",
          "js",
          "python",
          "django",
          "postgresql",
        ],
        subtitle:
          "To-do list created with Django allowing to define one's tasks and priorities in order to efficiently organize one's time.",
        skills: {
          front: ["HTML5", "CSS3", "JavaScript"],
          back: ["Python", "Django"],
          server: ["PostgreSQL"],
        },
        description: [
          "A classic in programming: the to-do list. ",
          "This one was developed with the Django framework. It was thought out in advance to take full advantage of all the benefits of this framework. ",
          "It is possible to create an account, create, read, edit, and delete tasks in a PostgreSQL database in a way that is quick and intuitive for the user. This data can be filtered by creation date, category, and priority",
        ],
        image_bg: "/todo/img-bg.png",
        image_1: "/todo/img-1.png",
        image_2: "/todo/img-2.png",
        image_3: "/todo/img-3.png",
        video: "/todo/video.mp4",
      },
      {
        id: 4,
        title: "artwork",
        technologies: ["html", "scss", "vue.js", "nuxt ", "gsap"],
        subtitle:
          "Web page created with Nuxt and GSAP to pay tribute to the artistic work of Yoji Shinkawa.",
        skills: {
          front: ["HTML5", "CSS3", "JavaScript", "Nuxt", "GSAP"],
          back: [],
          server: [],
        },
        description: [
          "As a full stack developer, I wanted to focus my work on creativity with this web page.",
          " I wanted to honor the work of a designer I adore, recognized in the world of games and the magnificent Metal Gear Solid series: Yoji Shinkawa.",
          "For this, I did some preparatory work for content research but also for inspiration, especially by observing what is best through the Awwwards platform.",
          "To do this, I mainly used paper support for wireframing and GSAP for the creation of animations and transitions.",
        ],

        image_bg: "/artwork/img-bg.png",
        image_1: "/artwork/img-1.png",
        image_2: "/artwork/img-2.png",
        image_3: "/artwork/img-3.png",
        video: "/artwork/video.mp4",
      },
      {
        id: 5,
        title: "sfc",
        technologies: ["html", "vue.js", "vuetify", "json server"],
        subtitle:
          "Single file component for weather, contact, planning, created with Vue.js.",
        skills: {
          front: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Vuetify",
            "Vue.js",
            "OpenWeatherMap",
            "Chart.js",
            "jsCalendar",
          ],
          back: [],
          server: ["JSON-server"],
        },
        description: [
          "This application, inspired by Google's weather, contact, and planning tools, was developed with Vue.js with the purpose of exploring and comparing both API: Options and Composition.",
          "The weather component relies on the ChartJs library for graphic display, and the Mapbox Geocoding and OpenWeatherMap APIs. For the planning, I used the Calendar.js library. Finally, the contact component was used to manipulate CRUD operations on data stored in JSON server.",
          "At last, Vuetify component library was used for the wireframe, forms, cards...",
        ],

        image_bg: "/sfc/img-bg.png",
        image_1: "/sfc/img-1.png",
        image_2: "/sfc/img-2.png",
        image_3: "/sfc/img-3.png",
        video: "/sfc/video.mp4",
      },

      {
        id: 6,
        title: "shooter",
        technologies: ["python", "pygame"],
        subtitle:
          "A classic 2D video game made with Python and Pygame library.",
        skills: {
          front: ["Pygame", "Python"],
          back: [],
          server: [],
        },
        description: [
          "This project holds a special place for me. It’s not the biggest, nor the most beautiful. It's the first one.",
          "I created it while learning object-oriented programming. Wishing to go deeper into the concept and also to apply it, I created with python's library this little  2D shooter, a classic video game that marked my childhood.",
          "A few icons, some movement, projections, explosions, randomness, interactions and magic happens: the desire to continue.",
        ],

        image_bg: "/shooter/img-bg.png",
        image_1: "/shooter/img-1.png",
        image_2: "/shooter/img-2.png",
        image_3: "/shooter/img-3.png",
        video: "/shooter/video.mp4",
      },
    ],
  }),

  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
  },
});
