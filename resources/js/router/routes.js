import abilities from "@/stub/abilities";
import { default as PageNotFound } from "@/views/pages/shared/404/Main.vue";

const routes = [
    {
        name: "home",
        path: "/",
        meta: { requiresAuth: false, isPublicAuthPage: false },
    },

    {
        path: "/:catchAll(.*)",
        name: "notFound",
        meta: { requiresAuth: false },
        component: PageNotFound,
    },
];

export default routes;
