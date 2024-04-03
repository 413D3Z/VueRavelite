import abilities from "@/stub/abilities";
const routes = [
    {
        path: "/",
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: () => import("@/views/pages/shared/404/Main.vue"),
    },
];

export default routes;
