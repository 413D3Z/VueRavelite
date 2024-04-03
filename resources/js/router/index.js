import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"; // Adjust the path based on your project structure

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
});

export default router;
