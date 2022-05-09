<template>
    <div class="infomain">
        <div class="info">
            <h1>{{ goldText }}: {{ goldCount }}</h1>
            <h1>{{ hpText }}: {{ heroHp }}</h1>
            <h1>{{ damageText }}: {{ heroDmg }}</h1>
            <h1>{{ armorText }}: {{ heroArmor }}</h1>
            <p></p>
            <h1>{{ enemyText }}: {{ enemyDmg }}</h1>
        </div>

        <div v-show="isItemMenu" class="itemmenu">
            <h1>{{ goldrushText }}</h1>
            <button class="bmbtn" @click="buyGoldMiner">{{ buyMinerText }} {{ priceGoldMiner }}</button>
        </div>

        <div v-show="isForgeMenu" class="forgemenu">
            <h1>{{ forgeText }}</h1>
            <button @click="buyForge" class="btnfd" v-bind:class="{ deletebuy: isForgeBuy }">{{ buildForgeText }}
                {{ forgePrice }}</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upDmg">{{ upDmgText }} {{ priceDmgUp }}
            </button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upArmor">{{ upArmorText }}
                {{ priceArmorUp }}</button>
        </div>

        <div v-show="isTavernOpen" class="tavern">
            <h1>{{ tavernText }}</h1>
            <button @click="buyTavern" v-bind:class="{ deletebuy: isTavernBuy }" class="btnfd">{{ buyTavernText }} {{
                    priceTavern
            }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }" @click="healUp">{{ healingText }}
                {{ healingPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy, deletebuy: isSpeedMax }" @click="upSpeed">{{ speedText }}
                {{ speedPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }">{{ shieldText }} {{ shieldPrice }}</button>
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

            countUpSpeed: 0,
            isSpeedMax: false,

            goldText: "Gold",
            hpText: "HP",
            damageText: "Damage",
            armorText: "Armor",
            buyMinerText: "Buy Miner for",
            buildForgeText: "Build Forge for",
            upDmgText: "Up Damage for",
            upArmorText: "Up Armor for",
            forgeText: "Forge",
            goldrushText: "Gold Rush",
            enemyText: "Enemy Dmg",
            tavernText: "Tavern",
            healingText: "Healing for",
            speedText: "Up atackSpeed for",
            shieldText: "Use shield 10 sec for",
            buyTavernText: "Build tavern for",


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
        priceTavern: Number,
        enemyDmg: Number,
        healingPrice: Number,
        speedPrice: Number,
        shieldPrice: Number,
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
        isTavernOpen: {
            type: Boolean,
        },
        isTavernBuy: {
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
        },
        buyTavern() {
            if (this.goldCount >= this.priceTavern) {
                this.$emit('buyTavern');
            }
        },

        healUp() {
            if (this.goldCount >= this.healingPrice) {
                this.$emit('healUp');
            }
        },
        upSpeed() {
            if (this.goldCount >= this.speedPrice && this.countUpSpeed < 5) {
                this.$emit('upSpeed');
            }
            this.countUpSpeed += 1;
        },
    },
    watch: {
        countUpSpeed(newValue) {
            if (newValue == 5) {
                this.isSpeedMax = true;
            }
        },
        isEng(newValue) {
            if (!newValue) {
                this.goldText = "Золото";
                this.hpText = "Здоровье";
                this.damageText = "Урон";
                this.armorText = "Броня";
                this.forgeText = "Кузница";
                this.upArmorText = "Улучшить броню за";
                this.upDmgText = "Улучшить урон за";
                this.buildForgeText = "Построить кузницу за";
                this.buyMinerText = "Нанять шахтера за";
                this.goldrushText = "Золотой рудник";
                this.enemyText = "Урон противника";
                this.tavernText = "Таверна";
                this.healingText = "Восстановить здоровье за";
                this.speedText = "Повысить скорость атаки за";
                this.shieldText = "Поднять щит на 10 сек за";
                this.buyTavernText = "Построить таверну за";
            } else {
                this.goldText = "Gold";
                this.hpText = "HP";
                this.damageText = "Damage";
                this.armorText = "Armor";
                this.forgeText = "Forge";
                this.upArmorText = "Up Armor for";
                this.upDmgText = "Up Damage for";
                this.buildForgeText = "Build Forge for";
                this.buyMinerText = "Buy Miner for";
                this.goldrushText = "Gold Rush";
                this.enemyText = "Enemy Dmg";
                this.tavernText = "Tavern";
                this.healingText = "Healing for";
                this.speedText = "Up atackSpeed for";
                this.shieldText = "Use shield 10 sec for";
                this.buyTavernText = "Build tavern for";
            }
        }
    },
}
</script>

<style scoped>
.infomain {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    /* border: 1px solid blue; */
}

.tavern {
    height: 400px;
    width: 400px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;

}

.tbtn {
    height: 100px;
    width: 200px;
    opacity: 0.5;
}

.bmbtn {
    height: 100px;
    width: 200px;
}

.forgemenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
}

.fbtn {
    height: 100px;
    width: 200px;
    opacity: 0.5;
}

.active {
    height: 100px;
    width: 200px;
    opacity: 1;
}

.btnfd {
    height: 100px;
    width: 200px;
}

.deletebuy {
    display: none;
}
</style>