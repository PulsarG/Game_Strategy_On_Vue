import { createApp } from 'vue';
import router from '@/router/router';
import App from '@/App.vue';
import { initializeApp } from "firebase/app";
import LoadScript from 'vue-plugin-load-script';

const aps = createApp(App)

aps.use(router).use(LoadScript);
aps.mount('#app');

const firebaseConfig = {
    apiKey: "AIzaSyBQIPxtfHfpLW4Rup58t31wt-SmsXXoFbs",
    authDomain: "test2-1e70d.firebaseapp.com",
    projectId: "test2-1e70d",
    storageBucket: "test2-1e70d.appspot.com",
    messagingSenderId: "708542517274",
    appId: "1:708542517274:web:9a996cbe7083da743641a3"
};


const app = initializeApp(firebaseConfig);