import MainPage from "@/pages/Main";
import TestPage from "@/pages/BugReports";
import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter(
    {
        routes: [
            {
                path: "/",
                component: MainPage,
            },
            {
                path: "/bugreports",
                component: TestPage,
            },
           /*  {
                path: "*",
                component: { render: (h) => h("div", ["404! Page Not Found!"]) },
            }, */
        ],
        history: createWebHistory(process.env.BASE_URL),
    }
);

export default router;