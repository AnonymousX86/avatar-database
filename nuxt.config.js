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
      { name: "color-scheme", content: "light dark" },
      { name: "theme-color", content: "#007bff" },
      { name: "robots", content: "index, nofollow" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    htmlAttrs: { lang: "en" },
  },
  css: ["@/assets/css/style.scss"],
  plugins: ["@/plugins/preview.client.js", "@/plugins/contentful.js"],
  components: true,
  buildModules: ["@nuxtjs/color-mode", "@nuxtjs/eslint-module", "@nuxtjs/pwa"],
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/gtm",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  axios: {},
  gtm: {
    id: "GTM-WZQNMMZ",
    enabled: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  pwa: {
    icon: {
      source: "static/icon.png",
      fileName: "icon.png",
    },
    meta: false,
    manifest: {
      name: "Avatar Database",
      short_name: "Avatars",
      start_url: ".",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#007bff",
      description: "Web application with a lot of free to use avatars.",
      dir: "ltr",
      lang: "en-US",
      icons: [
        {
          src: "/static/favicon.ico",
          type: "image/x-icon",
          sizes: "256x256",
        },
        {
          src: "/static/navbar-icon.webp",
          type: "image/webp",
          sizes: "30x30",
        },
        {
          src: "/static/icon.png",
          type: "image/png",
          sizes: "1080x1080",
        },
      ],
    },
    workbox: {
      dev: process.env.NODE_ENV && process.env.NODE_ENV === "development",
    },
  },
  content: {},
  robots: {
    UserAgent: "*",
    Allow: "/",
  },
  build: {},
  bootstrapVue: {
    icons: false,
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ENVIRONMENT_ID: process.env.CTF_ENVIRONMENT_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
  server: {
    port: process.env.PORT,
    host: "0.0.0.0",
  },
}
