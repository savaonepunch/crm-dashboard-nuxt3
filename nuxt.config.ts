// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/main.scss"],
  modules: ["nuxt-icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [200, 300, 400, 500, 600, 700],
    },
  },
});
