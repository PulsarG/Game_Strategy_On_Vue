<template>
    <div class="main">
        <div class="info">
            <h1>{{goldText}}: {{ goldCount }}</h1>
            <h1>{{hpText}}: {{ heroHp }}</h1>
            <h1>{{damageText}}: {{ heroDmg }}</h1>
            <h1>{{armorText}}: {{ heroArmor }}</h1>
        </div>
        <div v-show="isItemMenu" class="itemmenu">
            <button @click="buyGoldMiner">{{buyMinerText}} {{priceGoldMiner}}</button>
        </div>
        <div v-show="isForgeMenu" class="forgemenu">
            <h1>{{forgeText}}</h1>
            <button @click="buyForge" v-bind:class="{ deletebuy: isForgeBuy }">{{buildForgeText}} {{forgePrice}}</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upDmg">{{upDmgText}} {{ priceDmgUp }}
            </button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upArmor">{{upArmorText}}
                {{ priceArmorUp }}</button>
        </div>
    </div>
</template>

<script>
import { tsImportEqualsDeclaration } from '@babel/types';
import { watch } from '@vue/runtime-core';
export default {
    data() {
        return {
            upDmgCount: 1,
            priceDmgUp: 5,

            upArmorCount: 1,
            priceArmorUp: 10,

            goldText: "Gold",
            hpText: "HP",
            damageText: "Damage",
            armorText: "Armor",
            buyMinerText: "Buy Miner for",
            buildForgeText: "Build Forge for",
            upDmgText: "Up Damage for",
            upArmorText: "Up Armor for",
            forgeText: "Forge",


        }
    },
    name: 'info-block',
    props: {
        goldCount: Number,
        priceGoldMiner: Number,
        heroDmg: Number,
        heroHp: Number,
        heroArmor: Number,
        forgePrice: Number,
        isItemMenu: {
            type: Boolean,
        },
        isForgeMenu: {
            type: Boolean,
        },
        isForgeBuy: {
            type: Boolean,
        },
        isEng: {
            type: Boolean,
        },
    },
    methods: {
        upDmg() {
            if (this.isForgeBuy && this.goldCount >= this.priceDmgUp) {
                this.$emit('upDmg', this.priceDmgUp);
                this.upDmgCount += 1;
                this.priceDmgUp = 5 * this.upDmgCount;
            }
        },
        upArmor() {
            if (this.isForgeBuy && this.goldCount >= this.priceArmorUp) {
                this.$emit('upArmor', this.priceArmorUp);
                this.upArmorCount += 1;
                this.priceArmorUp = 10 * this.upArmorCount;
            }
        },

        buyGoldMiner() {
            if (this.goldCount >= this.priceGoldMiner) {
                this.$emit('afterBuyMiner');
            }
        },
        buyForge() {
            if (this.goldCount >= this.forgePrice) {
                this.$emit('buyForge');
            }
        }
    },
    watch: {
        isEng(newValue) {
            if (!newValue) {
                this.goldText = "Золото";
                this.hpText = "Здоровье";
                this.damageText = "Урон";
                this.armorText ="Броня";
                this.forgeText = "Кузница";
                this.upArmorText ="Улучшить броню за";
                this.upDmgText = "Улучшить урон за";
                this.buildForgeText = "Построить кузницу за";
                this.buyMinerText = "Нанять шахтера за";
            } else {
                this.goldText = "Gold";
                this.hpText = "HP";
                this.damageText = "Damage";
                this.armorText ="Armor";
                this.forgeText = "Forge";
                this.upArmorText ="Up Armor for";
                this.upDmgText = "Up Damage for";
                this.buildForgeText = "Build Forge for";
                this.buyMinerText = "Buy Miner for";
            }
        }
    }
}
</script>

<style scoped>
.main {
    width: 400px;
    height: 900px;
    /* border: 1px solid red; */
    display: flex;
    position: relative;
    justify-content: center;
}

.info {
    justify-self: center;
}

.itemmenu {
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    /* border: 1px solid blue; */
}

.forgemenu {
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    /* border: 1px solid blue; */
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