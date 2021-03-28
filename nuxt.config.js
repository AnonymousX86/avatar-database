export default {
  target: "static",
  head: {
    title: "avatar-database",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    htmlAttrs: { lang: "en", class: "bg-dark" },
  },
  css: ["@/assets/css/style.scss"],
  plugins: ["@/plugins/preview.client.js"],
  components: true,
  buildModules: ["@nuxtjs/eslint-module"],
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxt/content",
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  content: {},
  build: {},
}
