<template>
    <div class="infomain">
        <div class="info">
            <h1>{{ goldText }}: {{ Credits.GoldCount }}</h1>
            <h1>{{ hpText }}: {{ Hero.Hp }}</h1>
            <h1>{{ damageText }}: {{ Hero.Dmg }}</h1>
            <h1>{{ armorText }}: {{ Hero.Armor }}</h1>

            <h2>{{ enemyText }}: {{ Enemy.Dmg }}</h2>
        </div>

        <!--  <div>
            <h2>{{ scorePoints }}</h2>
        </div> -->


        <div class="testskills">
            <div>
                <h4>Навыки тестировщика (до релиза)</h4>
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
            <button class="bmbtn" id="btnbuyminer" @click="buyGoldMiner">{{ buyMinerText }} {{ Credits.PriceGoldMiner
            }}</button>
        </div>

        <div v-show="isForgeMenu" class="forgemenu">
            <div class="htext">
                <h1>{{ forgeText }}</h1>
            </div>

            <button @click="buyForge" class="btnfd" v-bind:class="{ deletebuy: isForgeBuy }">{{ buildForgeText }}
                {{ Buy.ForgePrice }}</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upDmg">{{ upDmgText }} {{ Buy.PriceDmgUp
            }}
            </button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="upArmor">{{ upArmorText }}
                {{ Buy.PriceArmorUp }}</button>
            <button class="fbtn" v-bind:class="{ active: isForgeBuy }" @click="useTurret">Поставить туррель за
                {{ Turret.Price }}</button>
        </div>

        <div v-show="isTavernOpen" class="tavern">
            <div class="htext">
                <h1>{{ tavernText }}</h1>
            </div>
            <button @click="buyTavern" v-bind:class="{ deletebuy: isTavernBuy }" class="btnfd">{{ buyTavernText }}
                {{ Buy.PriceTavern }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }" @click="healUp">{{ healingText }}
                {{ Buy.HealingPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy, deletebuy: isSpeedMax }" @click="upSpeed">{{
                    speedText
            }}
                {{ Buy.SpeedPrice }}</button>
            <button class="tbtn" v-bind:class="{ active: isTavernBuy }" @click="upShield">{{ shieldText }} {{
                    Buy.UseShieldPrice
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
                    Buy psy-bomb for {{ Buy.BombPrice }}
                </button>
            </div>

            <h2>{{ spellPointsText }}: {{ Hero.SpellPoints }}</h2>

            <h1>Items: </h1>
            <div class="spellbtn">
                <button @click="setShield" class="spell">{{ useShieldText }} {{ shieldTimeSec }} sec for {{
                        Buy.UseShieldPrice
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
                    {{ Hero.CountBomb }} </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        Hero: {
            type: Object,
            required: true,
        },
        Enemy: {
            type: Object,
            required: true,
        },
        Buy: {
            type: Object,
            required: true,
        },
        Credits: {
            type: Object,
            required: true,
        },
        Turret: {
            type: Object,
            required: true,
        },
        shieldTimeSec: Number,
        countAutoheal: Number,
        countBufMiners: Number,
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
    data() {
        return {
            upDmgCount: 1,

            countBuyMiners: 0,

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
            goldrushText: "Credits sistem",
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
    methods: {
        upDmg() {
            if (this.isForgeBuy && this.Credits.GoldCount >= this.Buy.PriceDmgUp) {
                this.$emit('upDmg');
            }
        },
        upArmor() {
            if (this.isForgeBuy && this.Credits.GoldCount >= this.Buy.PriceArmorUp) {
                this.$emit('upArmor');
            }
        },

        buyGoldMiner() {
            if (this.Credits.GoldCount >= this.Credits.PriceGoldMiner) {
                this.$emit('afterBuyMiner');
                this.countBuyMiners++;
            };
            if (this.countBuyMiners == 7) {
                document.getElementById('btnbuyminer').setAttribute('disabled', true);
            }
        },
        buyForge() {
            if (this.Credits.GoldCount >= this.Buy.ForgePrice) {
                this.$emit('buyForge');
            }
        },
        buyTavern() {
            if (this.Credits.GoldCount >= this.Buy.PriceTavern) {
                this.$emit('buyTavern');
            }
        },

        healUp() {
            if (this.Credits.GoldCount >= this.Buy.HealingPrice) {
                this.$emit('healUp');
            }
        },
        upSpeed() {
            if (this.Credits.GoldCount >= this.Buy.SpeedPrice && this.countUpSpeed < 5) {
                this.$emit('upSpeed');
            }
            this.countUpSpeed += 1;
        },

        setShield() {
            if (this.Credits.GoldCount >= this.Buy.UseShieldPrice) {
                this.$emit('setUseShield');
            }
        },
        upShield() {
            if (this.Credits.GoldCount >= this.Buy.UpShieldPrice) {
                this.$emit('upShield');
            }
        },

        upCrit() {
            if (this.Hero.SpellPoints >= 1) {
                this.$emit('upCrit');
                this.countUpCrit++;
            }
        },

        buyBomb() {
            if (this.Credits.GoldCount >= this.Buy.BombPrice) {
                this.$emit('buyBomb');
            }
        },
        useBomb() {
            this.$emit('useBomb');
        },
        useKill() {
            if (this.Hero.SpellPoints >= 1) {
                this.$emit('useKill');
                this.countUpFastKill++;
            }
        },

        useTurret() {
            if (this.Credits.GoldCount >= this.Turret.Price) {
                this.$emit('useTurret');
            }
        },
        upTurret() {
            if (this.Hero.SpellPoints >= 1) {
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

        'Hero.SpellPoints': function (newValue) {
            if (newValue != 0) {
                this.isNoSpellPoint = false;
            } else {
                this.isNoSpellPoint = true;
            }
        },

        'Credits.GoldCount': function (newValue) {
            if (newValue >= 3000) {
                this.isCanBuyBomb = true;
            } else {
                this.isCanBuyBomb = false;
            }
        },

        'Hero.CountBomb': function (newValue) {
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
                this.goldrushText = "Credits sistem";
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