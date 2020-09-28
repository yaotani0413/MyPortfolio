const path = require("path")

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Yaotani's Portfolio",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
      },
      {
        hid: "description",
        name: "description",
        content: `ポートフォリオサイトです。自己紹介や使用スキル、成果物などを記載しています。`,
      },
      {
        url: "og:https://yao3s.netlify.app/",
        content: "ページのURL",
      },
      {
        type: "website",
        content: "ページの種類",
      },
      {
        site_name: "ポートフォリオ",
        content: "サイト名",
      },
      {
        image: `https://res.cloudinary.com/djrmmyb4i/image/upload/v1596437382/thumbnail_noozn8.png`,
        content: "サムネイル画像のURL",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [
    "~/node_modules/animate.css/animate.css",
    "~/node_modules/animate.css/animate.compat.css",
    "~/node_modules/animate.css/animate.min.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/vue-observe-visibility",
    "~/plugins/vee-validate",
    "~/plugins/modal.js",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },

  resolve: {
    extensions: [".js", ".json", ".vue", ".ts"],
    root: path.resolve(__dirname),
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname),
    },
  },
  proxy: {
    "/api": {
      target: "https://hooks.slack.com",
      pathRewrite: {
        "^/api": "/",
      },
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
}
