// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Thomas 'athmōs' González",
      meta: [{ name: "description", content: "My Portfolio" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },

        {
          rel: "icon",
          href: "favicon.ico",
          type: "image/x-icon",
        },
      ],
    },
  },

  modules: [
    // ...
    "@pinia/nuxt",
  ],
});
