<template>
    <div class="infomain">
        <div class="info">
            <h1>{{ goldText }}: {{ goldCount }}</h1>
            <h1>{{ hpText }}: {{ heroHp }}</h1>
            <h1>{{ damageText }}: {{ heroDmg }}</h1>
            <h1>{{ armorText }}: {{ heroArmor }}</h1>

            <h2>{{ enemyText }}: {{ enemyDmg }}</h2>
        </div>

        <div v-show="isItemMenu" class="itemmenu">
            <div class="htext">
                <h1 class="hitemmenu">{{ goldrushText }}</h1>
            </div>
            <button class="bmbtn" @click="buyGoldMiner">{{ buyMinerText }} {{ priceGoldMiner }}</button>
        </div>

        <div v-show="isForgeMenu" class="forgemenu">
            <div class="htext">
                <h1>{{ forgeText }}</h1>
            </div>

            <button @click="buyForge" class="btnfd" v-bind:class="{ deletebuy: isForgeBuy }">{{ buildForgeText }}
                {{ forgePrice }}</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upDmg">{{ upDmgText }} {{ priceDmgUp }}
            </button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upArmor">{{ upArmorText }}
                {{ priceArmorUp }}</button>
        </div>

        <div v-show="isTavernOpen" class="tavern">
            <div class="htext">
                <h1>{{ tavernText }}</h1>
            </div>
            <button @click="buyTavern" v-bind:class="{ deletebuy: isTavernBuy }" class="btnfd">{{ buyTavernText }}
                {{ priceTavern }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }" @click="healUp">{{ healingText }}
                {{ healingPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy, deletebuy: isSpeedMax }" @click="upSpeed">{{
                    speedText
            }}
                {{ speedPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }" @click="upShield">{{ shieldText }} {{
                    shieldPrice
            }}</button>
        </div>

        <div v-show="isHeroSpellsOpen" class="herospells">
            <div class="htext">
                <h1>{{ spellsText }}</h1>
            </div>
            <!-- <button @click="setShield" class="btnfd">{{ useShieldText }} {{ shieldTimeSec }} sec for {{ useShieldPrice }} gold</button> -->
            <div class="spellbtn">
                <button @click="setShield" class="spell">{{ useShieldText }} {{ shieldTimeSec }} sec for {{
                        useShieldPrice
                }} gold</button>
                <button @click="upCrit" class="spell">Up crit-chance for 1 point</button>
                <button class="spell"></button>
            </div>
            <h2>Spell points: {{ spellPoints }}</h2>
            <h1>Items: </h1>
            <div class="spellbtn">
                <button class="spell"></button>
                <button class="spell"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            upDmgCount: 1,
            priceDmgUp: 5,

            upArmorCount: 1,
            priceArmorUp: 10,

            countUpSpeed: 0,
            isSpeedMax: false,

            shieldTime: 5,

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
            shieldText: "Upgrade shield for",
            buyTavernText: "Build tavern for",
            spellsText: "Hero's spells",
            useShieldText: "Use shield",


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
        useShieldPrice: Number,
        shieldTimeSec: Number,
        spellPoints: Number,
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
        isHeroSpellsOpen: {
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

        setShield() {
            if (this.goldCount >= this.useShieldPrice) {
                this.$emit('setUseShield');
            }
        },
        upShield() {
            if (this.goldCount >= this.shieldPrice) {
                this.$emit('upShield');
            }
        },

        upCrit() {
            if (this.spellPoints >= 1) {
                this.$emit('upCrit');
            }
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
                this.shieldText = "Улучшить щит за";
                this.buyTavernText = "Построить таверну за";
                this.spellsText = "Способности героя";
                this.useShieldText = "Использовать щит";
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
                this.shieldText = "Upgrade shield for";
                this.buyTavernText = "Build tavern for";
                this.spellsText = "Hero's spells";
                this.useShieldText = "Use shield";
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
    flex-direction: column;
}

.info {
    border: 10px double black;
    height: 300px;
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

h1 {
    height: 10px;
    margin-top: 5px;
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
    border: 10px double black;
    /* border: 1px solid blue; */
}

.tavern {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    border: 10px double black;
}

.herospells {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    border: 10px double black;
}

.htext {
    justify-self: flex-start;
   /*  position: absolute;
    top: 0;
    margin-top: 10px; */
    margin-bottom: 10px;
}

.tbtn {
    height: 50px;
    width: 200px;
    opacity: 0.5;
}

.bmbtn {
    height: 50px;
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
    border: 10px double black;
}

.fbtn {
    height: 50px;
    width: 200px;
    opacity: 0.5;
}

.active {
    height: 50px;
    width: 200px;
    opacity: 1;
}

.btnfd {
    height: 50px;
    width: 200px;
}

.deletebuy {
    display: none;
}

.spellbtn {
    display: flex;
    flex-direction: row;
}

.spell {
    width: 100px;
    height: 100px;
}
</style>