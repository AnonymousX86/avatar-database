// noinspection JSUnusedGlobalSymbols

export default {
  target: "server",
  head: {
    title: "Avatar Database",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Jakub Suchenek" },
      {
        hid: "description",
        name: "description",
        content: "Web application with a lot of free to use avatars.",
      },
      { name: "generator", content: "nuxtjs" },
      {
        name: "keyword",
        content:
          "avatar, avatars, database, list, free, download, github, open source, project",
      },
      { name: "creator", content: "Jakub Suchenek" },
      { name: "publisher", content: "Jakub Suchenek" },
      { name: "color-scheme", content: "dark" },
      { name: "theme-color", content: "" },
      { name: "robots", content: "index, nofollow" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    htmlAttrs: { lang: "en", class: "bg-dark" },
  },
  css: ["@/assets/css/style.scss"],
  plugins: ["@/plugins/preview.client.js", "@/plugins/contentful.js"],
  components: true,
  buildModules: ["@nuxtjs/eslint-module"],
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  content: {},
  robots: {
    UserAgent: "*",
    Allow: "/",
  },
  build: {},
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ENVIRONMENT_ID: process.env.CTF_ENVIRONMENT_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
}
