<template>
<div style="display: flex; flex-direction: column; padding: 20px;">
    <input v-model="this.title" type="text" name="title" id="title" placeholder="ЗАГОЛОВОК">
    <input v-model="this.date" type="text" name="date" id="date" placeholder="ДАТА">
    <textarea v-model="body" name="body" id="body" cols="30" rows="10" placeholder="НОВОСТЬ"></textarea>
    <button @click="sendNews">Добавить новость</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: "",
            date: "",
            body: "",
        }
    },
    methods: {
        async sendNews() {
            await axios.post("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/news.json", {
                title: this.title,
                date: this.date,
                body: this.body,
            });
        }
    }
}
</script>

<style scoped>
input {
    height: 50px;
    margin: 10px;
}
</style>