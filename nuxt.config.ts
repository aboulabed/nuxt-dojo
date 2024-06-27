// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/tailwind.css"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Nuxt Dojo" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
