import { createRouter, createWebHistory } from 'vue-router';
import GamePage from "@/pages/GamePage.vue";

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes: [
            {
                path: '/',
                component: GamePage,
            },
        ]
    }
);

export default router;