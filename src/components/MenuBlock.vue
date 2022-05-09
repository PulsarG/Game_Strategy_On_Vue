<template>
    <div class="one">
        <div class="menu">
            <p> <strong>{{ menuText }}</strong></p>
        </div>
        <div class="learn">
            <p>
                Кликните на Золотой рудник, Кузницу или Таверну
                для взаимодействия.
            </p>
            <p>Урон противника переодически растет.</p>
            <p>Улучшайте свои оружие и броню, покупайте услуги
                лекаря, изучайте способности.</p>
        </div>
        <div class="btn">
            <button class="btn" v-bind:class="{deletestart: isStart}" @click="toSetGold">{{ startBtn }}</button>
        </div>
        <div class="langbtn">
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

            isStart: false,
        }
    },

    methods: {
        toSetGold() {
            this.$emit('setGold');
            this.isStart = true;
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
.one {
    width: 400px;
    height: 900px;
  /*   border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu {
    width: 100px;
    height: 100px;
   /*  border: 1px solid red; */
}

.learn {
    height: 300px;
    width: 400px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}

.btn {
    height: 100px;
    width: 200px;
    /* border: 1px solid red; */
}

.langbtn {
    width: 100px;
    height: 40px;
   /*  border: 1px solid red; */
}

.btnl {
    width: 100px;
    height: 40px;
}

p {
    font-size: 20px;
}

.deletestart {
    display: none;
}
</style>