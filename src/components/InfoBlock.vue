<template>
    <div class="infomain">
        <div class="info">
            <h1>{{ goldText }}: {{ goldCount }}</h1>
            <h1>{{ hpText }}: {{ heroHp }}</h1>
            <h1>{{ damageText }}: {{ heroDmg }}</h1>
            <h1>{{ armorText }}: {{ heroArmor }}</h1>

            <h2>{{ enemyText }}: {{ enemyDmg }}</h2>
        </div>

        <!--  <div>
            <h2>{{ scorePoints }}</h2>
        </div> -->


        <div class="testskills">
            <div>
                <h3>Навыки тестировщика</h3>
            </div>

            <div style="display: flex; flex-direction: row; margin-bottom: 25px;">
                <button style="height: 50px; width: 100px;" @click="testPlusGold">+1000 кредитов</button>
                <button style="height: 50px; margin-left: 10px; width: 80px;" @click="testPlusSkill">+1 оч.
                    навыка</button>
                <button style="height: 50px; margin-left: 10px; width: 80px;" @click="testMinusEnemyDmg">-10 урона
                    врагу</button>
                <button style="height: 50px; margin-left: 10px; width: 80px;" @click="testPlusHeroHp">+100 здоровья
                    герою</button>
            </div>

        </div>


        <div v-show="isItemMenu" class="itemmenu">
            <div class="htext">
                <h1 class="hitemmenu">{{ goldrushText }}</h1>
            </div>
            <button class="bmbtn" id="btnbuyminer" @click="buyGoldMiner">{{ buyMinerText }} {{ priceGoldMiner
            }}</button>
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
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="useTurret">Поставить туррель за
                {{ turretPrice }}</button>
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
                <button @click="upTurret" class="spell" v-bind:class="{ nospell: isNoSpellPoint }">Up engineer skill for
                    turret for 1 point <br><br> [{{ countUpTurret }}]</button>
                <button @click="upCrit" class="spell" v-bind:class="{ nospell: isNoSpellPoint }">
                    {{ upCritChanceText }} <br> <br>
                    [{{ countUpCrit }}]
                </button>
                <button class="spell" v-bind:class="{ nospell: isNoSpellPoint }" @click="useKill">{{ oneShotKillText
                }} <br> <br> [{{ countUpFastKill }}]</button>
                <button class="spell" v-bind:class="{ cantbuybomb: !isCanBuyBomb }" @click="buyBomb">
                    Buy psy-bomb for 5000
                </button>
            </div>

            <h2>{{ spellPointsText }}: {{ spellPoints }}</h2>

            <h1>Items: </h1>
            <div class="spellbtn">
                <button @click="setShield" class="spell">{{ useShieldText }} {{ shieldTimeSec }} sec for {{
                        useShieldPrice
                }} gold</button>
                <button style="background: none; border: 1px solid black;" class="spell">
                    <h1 v-show="countAutoheal === 0" class="noitm">?</h1>
                    <h4 v-show="countAutoheal > 0">AUTOHEAL <br><br> [{{ countAutoheal }}]</h4>
                </button>
                <button style="background: none; border: 1px solid black;" class="spell">
                    <h1 v-show="countBufMiners === 1" class="noitm">?</h1>
                    <h4 v-show="countBufMiners > 1">UPGRADE MINERS <br><br> [{{ countBufMiners - 1 }}]</h4>
                </button>
                <button class="spell" style="border: 1px solid black;" v-bind:class="{ isnotbomb: isNotBomb }"
                    @click="useBomb">Use Bomb <br><br> Have
                    {{ countBomb }} </button>
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

            countBuyMiners: 0,

            upArmorCount: 1,
            priceArmorUp: 10,

            countUpSpeed: 0,
            isSpeedMax: false,

            countUpCrit: 0,
            countUpFastKill: 0,
            countUpTurret: 0,

            shieldTime: 5,

            isNoSpellPoint: true,
            isCanBuyBomb: false,
            isNotBomb: true,

            goldText: "Credits",
            hpText: "HP",
            damageText: "Damage",
            armorText: "Armor",
            buyMinerText: "Buy Miner-Modul for",
            buildForgeText: "Hire an engineer",
            upDmgText: "Up Damage for",
            upArmorText: "Up Armor for",
            forgeText: "Support Engineer",
            goldrushText: "Mining sistem",
            enemyText: "Enemy Dmg",
            tavernText: "Supply base",
            healingText: "Healing for",
            speedText: "Up atackSpeed for",
            shieldText: "Up shield (+5 sec) for",
            buyTavernText: "Order Express Delivery Ways",

            spellsText: "Hero's spells",
            useShieldText: "Use shield",
            upCritChanceText: "Up crit-chance for 1 point",
            spellPointsText: "Spell points",
            oneShotKillText: "Up chance one shot kill for 1 point",

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
        bombPrice: Number,
        countBomb: Number,
        countAutoheal: Number,
        countBufMiners: Number,
        turretPrice: Number,
        scorePoints: Number,
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
                this.countBuyMiners++;
            };
            if (this.countBuyMiners == 7) {
                document.getElementById('btnbuyminer').setAttribute('disabled', true);
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
                this.countUpCrit++;
            }
        },

        buyBomb() {
            if (this.goldCount >= this.bombPrice) {
                this.$emit('buyBomb');
            }
        },
        useBomb() {
            this.$emit('useBomb');
        },
        useKill() {
            if (this.spellPoints >= 1) {
                this.$emit('useKill');
                this.countUpFastKill++;
            }
        },

        useTurret() {
            if (this.goldCount >= this.turretPrice) {
                this.$emit('useTurret');
            }
        },
        upTurret() {
            if (this.spellPoints >= 1) {
                this.$emit('upTurret');
                this.countUpTurret++;
            }
        },

        testPlusGold() {
            this.$emit('testPlusGold');
        },
        testPlusSkill() {
            this.$emit('testPlusSkill');
        },
        testMinusEnemyDmg() {
            this.$emit('testMinusEnemyDmg');
        },
        testPlusHeroHp() {
            this.$emit('testPlusHeroHp');
        }

    },
    watch: {
        countUpSpeed(newValue) {
            if (newValue == 5) {
                this.isSpeedMax = true;
            }
        },

        spellPoints(newValue) {
            if (newValue != 0) {
                this.isNoSpellPoint = false;
            } else {
                this.isNoSpellPoint = true;
            }
        },

        goldCount(newValue) {
            if (newValue >= 5000) {
                this.isCanBuyBomb = true;
            } else {
                this.isCanBuyBomb = false;
            }
        },

        countBomb(newValue) {
            if (newValue > 0) {
                this.isNotBomb = false;

            } else {
                this.isNotBomb = true;
            }
        },

        isEng(newValue) {
            if (!newValue) {
                this.goldText = "Кредиты";
                this.hpText = "Здоровье";
                this.damageText = "Урон";
                this.armorText = "Броня";
                this.forgeText = "Инженер поддержки";
                this.upArmorText = "Улучшить броню за";
                this.upDmgText = "Улучшить урон за";
                this.buildForgeText = "Нанять инженера за";
                this.buyMinerText = "Купить модуль для майнинга за";
                this.goldrushText = "Система майнинга";
                this.enemyText = "Урон противника";
                this.tavernText = "База снабжения";
                this.healingText = "Восстановить здоровье за";
                this.speedText = "Повысить скорость атаки за";
                this.shieldText = "Заказать улучшенный щит (+5 сек) за";
                this.buyTavernText = "Заказать пути срочной доставки за";
                this.spellsText = "Способности героя";
                this.useShieldText = "Использовать щит";
                this.upCritChanceText = "Увеличить шанс крит.удара за 1 оч. навыка";
                this.spellPointsText = "Очки навыков";
                this.oneShotKillText = "Увеличить шанс моментального убийства за 1 оч. навыка";
            } else {
                this.goldText = "Credits";
                this.hpText = "HP";
                this.damageText = "Damage";
                this.armorText = "Armor";
                this.forgeText = "Support Engineer";
                this.upArmorText = "Up Armor for";
                this.upDmgText = "Up Damage for";
                this.buildForgeText = "Hire an engineer";
                this.buyMinerText = "Buy Miner-Modul for";
                this.goldrushText = "Mining sistem";
                this.enemyText = "Enemy Dmg";
                this.tavernText = "Supply base";
                this.healingText = "Healing for";
                this.speedText = "Up atackSpeed for";
                this.shieldText = "Up shield (+5 sec) for";
                this.buyTavernText = "Order Express Delivery Ways";
                this.spellsText = "Hero's spells";
                this.useShieldText = "Use shield";
                this.upCritChanceText = "Up crit-chance for 1 point";
                this.spellPointsText = "Spell points";
                this.oneShotKillText = "Up chance one shot kill for 1 point";
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
    width: auto;
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
    width: auto;
    display: flex;
    flex-direction: row;
    /* border: 1px solid blue; */
}

.spell {
    opacity: 1;
    width: 100px;
    height: 100px;
}

.nospell {
    opacity: 0.4;
}

.noitm {
    opacity: 0.4;
}

.cantbuybomb {
    opacity: 0.4;
}

.isnotbomb {
    opacity: 0.4;
}

.testskills {
    width: 380px;
    height: 100px;
    border: 5px double black;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>