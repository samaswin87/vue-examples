import Vue from "vue"; 
import Router from "vue-router";

Vue.use(Router);

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/records",
            name: "records",
            component: () => import("./components/List")
        },
        {
            path: "/show/:id",
            name: "show",
            component: () => import("./components/Show")
        },
        {
            path: "/add",
            name: "/add",
            component: () => import("./components/Add")
        }
    ]
});