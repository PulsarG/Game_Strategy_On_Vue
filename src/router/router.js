import MainPage from "@/pages/Main";
import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter(
    {
        routes: [
            {
                path: "/",
                component: MainPage,
            },
            {
                path: "/q",
                component: MainPage,
            },
        ],
        history: createWebHistory(process.env.BASE_URL),
    }
);

export default router;