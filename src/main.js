import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from '@/App.vue'
/* import router from './router'
import store from './store' */

createApp(App).mount('#app')
const firebaseConfig = {
    apiKey: "AIzaSyBK8mylfZRwLqQLPXgC3FXXy6XI16bcBqI",
    authDomain: "testgame-59bd1.firebaseapp.com",
    projectId: "testgame-59bd1",
    storageBucket: "testgame-59bd1.appspot.com",
    messagingSenderId: "655433217473",
    appId: "1:655433217473:web:fb080e25f976154ae4eb40"
};
const app = initializeApp(firebaseConfig);