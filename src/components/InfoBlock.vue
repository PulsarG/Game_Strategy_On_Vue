<template>
    <div class="main">
        <div class="info">
            <h1>Gold: {{ goldCount }}</h1>
        </div>
        <div v-show="isItemMenu" class="itemmenu">
            <button @click="buyGoldMiner">BUY GOLDMINER</button>
        </div>
        <div v-show="isForgeMenu" class="forgemenu">
            <h1>Forge</h1>
            <button @click="buyForge" v-bind:class="{ deletebuy: isForgeBuy }">BUILD FORGE PER 100 GOLD</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }">UP ARMOR</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }">UP WEAPON</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isForgeBuy: false,
        }
    },
    name: 'info-block',
    props: {
        goldCount: Number,
        priceGoldMiner: Number,
        isItemMenu: {
            type: Boolean,
        },
        isForgeMenu: {
            type: Boolean,
        },
        isForgeBuy: {
            type: Boolean,
        },
    },
    methods: {
        buyGoldMiner() {
            if (this.goldCount >= this.priceGoldMiner) {
                this.$emit('afterBuyMiner');
            }
        },
        buyForge() {
            if (this.goldCount >= 5) {
                this.$emit('buyForge');
            }
        }
    }
}
</script>

<style scoped>
.main {
    width: 400px;
    height: 900px;
    border: 1px solid red;
    display: flex;
    position: relative;
}

.itemmenu {
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    border: 1px solid blue;
}

.forgemenu {
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
}

.fbtn {
    height: 50px;
    width: auto;
    opacity: 0.5;
}

.active {
    height: 50px;
    width: auto;
    opacity: 1;
}

.deletebuy {
    opacity: 0;
}
</style>