import MainPage from "@/pages/Main";
import News from "@/pages/News";
import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter(
    {
        routes: [
            {
                path: "/",
                component: MainPage,
            },
            {
                path: "/adminaddnews",
                component: News,
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