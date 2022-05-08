<template>
    <div class="main">
        <div class="menu">
            <h1>{{menuText}}</h1>
        </div>
        <div class="btn">
            <button @click="toSetGold">{{ startBtn }}</button>
        </div>
        <div class="langbtns">
            <button class="btnl" @click="setLang">{{ lang }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu-block',
    props: {
        isEng: {
            type: Boolean
        }
    },
    data() {
        return {
            startBtn: "Start game",
            lang: "RUS",
            menuText: "Menu",

            ruStart: "Начать игру",
            enStart: "Start game",

            enLang: "ENG",
            ruLang: "RUS",

            enMenu: "Menu",
            ruMenu: "Меню",
        }
    },

    methods: {
        toSetGold() {
            this.$emit('setGold');
        },
        setLang() {
            this.$emit('setLang');

            if (!this.isEng) {
                this.startBtn = this.enStart;
                this.menuText = this.enMenu;
                this.lang = this.ruLang;
            } else {
                this.startBtn = this.ruStart;
                this.menuText = this.ruMenu;
                this.lang = this.enLang;
            }

        }
    },
}
</script>

<style scoped>
.main {
    width: 400px;
    height: 900px;
    /* border: 1px solid red; */
    display: flex;
    flex-flow: column;
}

.menu {}

.btn {
    height: 100px;
    width: 100px;

}

.langbtns {
    display: flex;
    align-self: flex-end;
}

.btnl {
    margin: 5px;
}
</style>