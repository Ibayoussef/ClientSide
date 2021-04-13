export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "conso-frontend",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css"
      }
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src: "https://use.fontawesome.com/8bce983f1b.js",
        type: "text/javascript"
      }
    ]
  },
  router: {
    middleware: ["clearValidationErrors"]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/sass/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/mixins/user.js",
    "@/plugins/axios.js",
    "@/plugins/mixins/validation.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseUrl: "http://backend-consomation.herokuapp.com/api"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "meta.token" },
          logout: { url: "/logout", method: "post" },
          user: { url: "/user", method: "get", propertyName: "data" }
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
