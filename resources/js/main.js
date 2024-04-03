// Import Vue and Pinia libraries
import { createApp } from "vue";
import { createPinia } from "pinia";

// Import your application's router, internationalization plugin, and main App component
import router from "@/router";
import i18n from "@/plugins/i18n";
import App from "@/App.vue";

// Import global styles
import "../css/main.css"; // Adjusted the path for consistency
import "../scss/main.scss"; // Adjusted the path for consistency

// Create the Vue application instance
const app = createApp(App);

// Use Pinia state management
app.use(createPinia());

// Use Vue Router
app.use(router);

// Use the i18n internationalization plugin
app.use(i18n);

// Mount the Vue application
app.mount("#app");
