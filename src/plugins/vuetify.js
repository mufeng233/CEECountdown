/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        // dark:
        // localStorage.getItem("vueuse-color-scheme") === "dark" ? true : false,
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#1867C0",
        secondary: "#5CBBF6",
      },
    },
  },
});
