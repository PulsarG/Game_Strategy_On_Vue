<template>
  <div class="mainpage">

    <info-block :isItemMenu="isItemMenu" :isForgeMenu="isForgeMenu" @afterBuyMiner="afterBuyMiner" @buyForge="buyForge"
      @upDmg="upDmg" :isForgeBuy="isForgeBuy" :priceGoldMiner="priceGoldMiner" @upSpeed="upSpeed" @upShield="upShield"
      :isHeroSpellsOpen="isHeroSpellsOpen" :shieldPrice="shieldPrice" @healUp="healUp" :goldCount="goldCount"
      :heroDmg="heroDmg" :forgePrice="forgePrice" :isEng="isEng" @upArmor="upArmor" :speedPrice="speedPrice"
      :spellPoints="spellPoints" :priceTavern="priceTavern" @buyTavern="buyTavern" :isTavernOpen="isTavernOpen"
      :heroHp="heroHp" :shieldTimeSec="shieldTimeSec" :healingPrice="healingPrice" :isTavernBuy="isTavernBuy"
      :bombPrice="bombPrice" @buyBomb="buyBomb" :enemyDmg="enemyDmg" :heroArmor="heroArmor" @useBomb="useBomb"
      :countBomb="countBomb" :useShieldPrice="useShieldPrice" @setUseShield="setUseShield" @upCrit="upCrit"
      :turretPrice="turretPrice" @useTurret="useTurret" :countBufMiners="countBufMiners" :countAutoheal="countAutoheal"
      @useKill="useKill" class="infoblock" ref="infoblock" />


    <div v-show="isFail" class="fail">
      <h1>----------</h1>
      <h1>YOU DIED</h1>
      <h1>----------</h1>
      <h3> {{ killCountText }}: {{ killCount }}</h3>
      <h3> {{ levelText }}: {{ heroLvl }} </h3>
      <h3> {{ totalGoldText }}: {{ totalGoldCount }}</h3>
      <h3> {{ critChanceText }}: {{ chanceCrit }}%</h3>
      <h3>{{ fastkillChanceText }}: {{ fastKillChance }}%</h3>
      <h3>{{ totalSpellPoints }} {{ totalSpellPointsText }}</h3>
      <h3 v-if="countTurrets > 0">Use turret {{ countTurrets }}</h3>
      <h3 v-if="countUseBomb > 0"> {{ countUseBomb }} {{ useBombText }}</h3>
      <h3 v-if="countAutoheal > 0">x{{ countAutoheal }} mod autoheal</h3>
      <h3 v-if="countBufMiners > 1">x{{ countBufMiners - 1 }} mod miners</h3>
    </div>

    <div v-show="!isFail" class="field">
      <div class="level">
        <h1>
          {{ killCountText }}: {{ killCount }}
        </h1>
        <div v-bind:class="{ activechest: isChest, nochest: !isChest }">
          <button class="chestbtn" @click="useChest"> <img class="chestimg"
              src="@/assets/Loot_Bag_without_background.webp" alt="">
          </button>
          <h1 v-show="isGold">{{ chestGold }} {{ chestGoldText }}</h1>
          <h1 v-show="isPoint">+1 {{ chestSpellText }}</h1>
          <h1 v-show="isBomb">{{ chestBombText }}</h1>
          <h3 v-show="isBufMiners" style="color: #FF4500;">{{ chestBufMinersText }}</h3>
          <h3 v-show="isAutoHeal" style="color: #FF4500;">{{ chestAutohealText }}</h3>
        </div>
      </div>


      <div class="gamezone" id="gamezone">

        <div class="hero">
          <h1 v-show="isShield">{{ shieldUsedText }}</h1>
          <h2 v-show="isSpellPoints">+ {{ spellPoints }} {{ chestSpellText }}</h2>
          <button @click="setOpenHeroSpells" class="herobtn">
            <img class="imghero" src="@/assets/fca20ca686df78242e7f5faf65ef4041.jpg" alt="">
          </button>
          <h1>{{ levelText }} {{ heroLvl }}</h1>
        </div>

        <h1 class="crit" v-show="chanceCritAfterShield" style="color: red;">ENEMY CRIT</h1>
        <h1 class="crit" v-show="isCrit">{{ critText }}</h1>
        <h1 class="crit" v-show="isFastKill">{{ fastKillActiveText }}</h1>
        <h1 class="crit" v-show="isTurretUse">TURRET <br> {{ turretHp }}</h1>

        <div v-show="isEnemyLife" class="enemy">
          <div>
            <h1>{{ enemyHp }}</h1>
          </div>
          <img class="imgenemy" src="@/assets/borg-star-trek-the-next-generation-statula-.jpg" alt="">
          <h1>{{ fEnemyName }} {{ fEnemyLvl }}</h1>
        </div>

      </div>

      <hero-base @setShowItemMenu="setShowItemMenu" @setOpenTavern="setOpenTavern" :isTavernBuy="isTavernBuy"
        @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" ref="herobase"
        :countMiners="countMiners" />

    </div>
    <menu-block @toStartGame="toStartGame" class="menublock" :isEng="isEng" @setLang="setLang" @setPause="setPause" />
  </div>
</template>

<script>
import HeroBase from "@/components/HeroBase.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import MenuBlock from "@/components/MenuBlock.vue";
import { switchCase } from "@babel/types";
//import { ref } from "vue";

export default {
  components: {
    HeroBase, InfoBlock, MenuBlock,
  },

  data() {
    return {
      goldCount: 99999,
      totalGoldCount: 0,
      goldPlus: 1,
      priceGoldMiner: 10,
      minerAddGold: 1,
      countMiners: 1,

      forgePrice: 5,
      priceTavern: 5,
      healingPrice: 500,
      speedPrice: 20,
      shieldPrice: 50,
      useShieldPrice: 100,
      shieldTime: 5000,
      shieldTimeSec: 5,
      bombPrice: 5000,
      countUseBomb: 0,
      turretPrice: 500,

      heroHp: 1800,
      heroDmg: 100,
      heroArmor: 0,
      atackSpeed: 2000,
      killCount: 0,
      heroLvl: 1,
      critChance: 0,
      chanceCrit: 10,
      spellPoints: 0,
      totalSpellPoints: 0,
      countBomb: 0,
      fastKillChance: 1,
      rollChanceFastKill: 0,

      turretHp: 300,
      turretDmg: 100,
      defaultTurretHp: 300,

      isSpellPoints: false,

      isCrit: false,
      isFastKill: false,

      isShield: false,

      heroExp: 0,
      expMult: 1,

      healingPoints: 500,

      enemyHp: 200,
      defaultEnemyHP: 200,
      enemyDmg: 10,
      fEnemyName: "Enemy level",
      fEnemyLvl: 1,
      isEnemyLife: true,
      chanceCritAfterShield: false,
      rollChanceCritAfterShield: 0,

      killCountText: "Enemy kills",
      levelText: "Level",
      critText: "CRIT",
      totalGoldText: "Total credits",
      critChanceText: "Crit chance",
      fastkillChanceText: "Fast kill chance",
      totalSpellPointsText: "spell points",
      useBombText: "bomb used",
      chestGoldText: "gold!",
      chestSpellText: "spell point!",
      chestBombText: "+1 psy-bomb!",
      chestBufMinersText: "Unique technology: accelerator for Miners (+100% to earnings)",
      chestAutohealText: "Unique technology: auto-regeneration system (periodic recovery of health)",
      shieldUsedText: "SHIELD",
      fastKillActiveText: "FAST KILL",

      isItemMenu: false,
      isForgeMenu: false,
      isForgeBuy: false,
      isTavernOpen: false,
      isTavernBuy: false,
      isHeroSpellsOpen: false,

      isEng: true,

      isFail: false,

      isChest: false,
      chestChance: 0,
      inChest: 0,
      chestGold: 0,
      isGold: false,
      isPoint: false,
      inChance: 0,
      isBomb: false,
      isBufMiners: false,
      isAutoHeal: false,
      countAutoheal: 0,
      showAutoheal: false,
      countBufMiners: 1,
      showBufMiners: false,
      isTurretUse: false,
      countTurrets: 0,

      isPause: false,
    }
  },

  methods: {
    toStartGame() {
      setInterval(() => {
        if (!this.isFail && !this.isPause) {
          this.goldCount += this.goldPlus;
          this.totalGoldCount += this.goldPlus;
        }
      }, 1000);

      setInterval(() => {
        if (this.atackSpeed == 2000 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          this.rollChanceFastKill = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, this.atackSpeed);

      setInterval(() => {
        if (this.atackSpeed == 1800 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, 1800);

      setInterval(() => {
        if (this.atackSpeed == 1600 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, 1600);

      setInterval(() => {
        if (this.atackSpeed == 1400 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, 1400);

      setInterval(() => {
        if (this.atackSpeed == 1200 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, 1200);

      setInterval(() => {
        if (this.atackSpeed == 1000 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 99);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          };
          if (this.fastKillChance >= this.rollChanceFastKill) {
            this.fastKill();
          }
        }
      }, 1000);

      setInterval(() => {
        if (!this.isFail && !this.isPause && !this.isShield && !this.isTurretUse) {
          if (this.chanceCritAfterShield) {
            this.heroHp -= (this.enemyDmg - this.heroArmor);
            console.log("CRIIIIIT");
          }
          this.heroHp -= (this.enemyDmg - this.heroArmor);
        }
      }, 2000);

      setInterval(() => { if (!this.isFail && !this.isPause && this.isTurretUse) { this.turretHp -= this.enemyDmg; } }, 2000);

      setInterval(() => { if (!this.isFail && !this.isPause) { this.enemyDmg += 5 } }, 10000);

    },

    setCrit() {
      this.isCrit = true;
      setTimeout(() => { this.isCrit = false }, 500);
    },

    upCrit() {
      this.chanceCrit += 5;
      this.spellPoints -= 1;
    },

    setShowItemMenu() {
      if (this.isItemMenu == true) {
        this.isItemMenu = false;
      }
      else {
        this.isItemMenu = true;
        this.isForgeMenu = false;
        this.isTavernOpen = false;
        this.isHeroSpellsOpen = false;
      }
    },

    setShowForgeMenu() {
      if (this.isForgeMenu == true) {
        this.isForgeMenu = false;
      } else {
        this.isForgeMenu = true;
        this.isItemMenu = false;
        this.isTavernOpen = false;
        this.isHeroSpellsOpen = false;
      }
    },


    afterBuyMiner() {
      this.countMiners++;
      this.goldCount -= this.priceGoldMiner;
      /* this.goldPlus += this.minerAddGold; */
      this.goldPlus = this.countMiners * this.countBufMiners;
      this.priceGoldMiner += 5;
    },

    buyForge() {
      this.isForgeBuy = true;
      this.goldCount -= 5;
    },
    buyTavern() {
      this.isTavernBuy = true;
      this.goldCount -= this.priceTavern;
    },
    upDmg(priceDmgUp) {
      this.goldCount -= priceDmgUp;
      this.heroDmg += 1;
    },
    upArmor(priceArmorUp) {
      this.goldCount -= priceArmorUp;
      this.heroArmor += 10;
    },
    setLang() {
      if (this.isEng) {
        this.isEng = false;
      } else {
        this.isEng = true;
      }
    },
    setOpenTavern() {
      if (this.isTavernOpen) {
        this.isTavernOpen = false;
      } else {
        this.isTavernOpen = true;
        this.isItemMenu = false;
        this.isForgeMenu = false;
        this.isHeroSpellsOpen = false;
      }
    },
    setOpenHeroSpells() {
      if (this.isHeroSpellsOpen) {
        this.isHeroSpellsOpen = false;
      } else {
        this.isHeroSpellsOpen = true;
        this.isItemMenu = false;
        this.isForgeMenu = false;
        this.isTavernOpen = false;
      }
    },

    setUseShield() {
      this.isShield = true;
      this.rollChanceCritAfterShield = Math.floor(Math.random() * 2);
      setTimeout(() => { this.isShield = false; }, this.shieldTime);

      setTimeout(() => {
        if (this.rollChanceCritAfterShield == 1) {
          this.chanceCritAfterShield = true;
          setTimeout(() => { this.chanceCritAfterShield = false; this.rollChanceCritAfterShield = 0;}, 2000);
        }
      }, this.shieldTime);
      this.useShieldPrice += 100;
    },
    upShield() {
      this.shieldPrice += 50;
      this.shieldTime += 5000;
      this.shieldTimeSec += 5;

    },

    healUp() {
      this.goldCount -= this.healingPrice;
      this.heroHp += this.healingPoints;
      this.healingPrice += 10;
    },
    upSpeed() {
      this.goldCount -= this.speedPrice;
      this.speedPrice += 20;
      this.atackSpeed -= 200;
    },

    setPause() {
      if (!this.isPause) {
        this.isPause = true;
      } else {
        this.isPause = false;
      }
    },

    setChest() {
      this.chestChance = Math.floor(Math.random() * 2);  // 25% chance 0-3
      if (this.chestChance == 1) {
        this.isChest = true;
        this.isPause = true;
        this.inChance = Math.floor(Math.random() * 1000);
        // chance 0-99 
        if (this.inChance <= 70) {
          this.chestGold = Math.floor((Math.random() * 99) + 1);
          this.goldCount += this.chestGold;
          this.totalGoldCount += this.chestGold;
          this.isGold = true;

        } else if (this.inChance > 70 && this.inChance <= 90) {
          this.spellPoints++;
          this.totalSpellPoints++;
          this.isPoint = true;

        } else if (this.inChance > 90 && this.inChance < 98) {
          this.countBomb++;
          this.isBomb = true;

        } else if (this.inChance > 98 && this.inChance < 999) {
          this.isBufMiners = true;
          this.countBufMiners++;
          /* this.goldPlus *= 2; */
          this.goldPlus = this.countMiners * this.countBufMiners;

        } else if (this.inChance == 99) {
          this.isAutoHeal = true;
          this.countAutoheal++;
          this.startAutoheal();
        };
      };
    },

    startAutoheal() {
      if (!this.isPause) {
        setInterval(() => { this.heroHp += 10; }, 10000);
      }
    },

    useChest() {
      if (this.isChest) {
        this.isChest = false;
        this.isPause = false;
        this.isEnemyLife = true;
        this.isGold = false;
        this.isPoint = false;
        this.isBomb = false;
        this.isBufMiners = false;
        this.isAutoHeal = false;
      }
    },

    buyBomb() {
      this.goldCount -= 5000;
      this.countBomb += 1;
    },
    useBomb() {
      this.enemyHp = 0;
      this.defaultEnemyHP = 100;
      this.enemyDmg = 10;
      this.fEnemyLvl = 0;
      this.killCount += 1;
      this.countBomb -= 1;
      this.countUseBomb++;
    },
    useKill() {
      this.fastKillChance += 1;
      this.spellPoints -= 1;
    },
    fastKill() {
      this.enemyHp = 0;
      this.isFastKill = true;
      setTimeout(() => { this.isFastKill = false; }, 1000);
    },

    useTurret() {
      this.isTurretUse = true;
      this.turretHp = this.defaultTurretHp;
      this.countTurrets++;
      let turretDamage = setInterval(() => {

        if (this.isTurretUse && !this.isPause) {
          this.enemyHp -= this.turretDmg;
          console.log("turret");

          if (this.turretHp <= 0) {
            this.isTurretUse = false;
            clearInterval(turretDamage);
          }
        }
      }, 1000);
    },

  },
  watch: {
    enemyHp(newValue) {
      if (newValue <= 0) {
        this.killCount += 1;
        this.heroExp += 1;
        this.defaultEnemyHP += 100;
        this.enemyHp = this.defaultEnemyHP;
        this.fEnemyLvl += 1;

        this.setChest();

        this.isPause = true;
        this.isEnemyLife = false;
        setTimeout(() => {
          if (!this.isChest) {
            this.isPause = false; this.isEnemyLife = true
          }
        }, 1000);
      }
    },

    heroLvl(newValue) {
      let b = newValue % 2;
      if (b != 0) {
        this.spellPoints++;
        this.totalSpellPoints++;
      };
    },

    heroExp(newValue) {
      if (newValue == this.expMult) {
        this.heroLvl += 1;
        this.expMult *= 2;
        this.heroExp = 0;
      }
    },

    heroHp(newValue) {
      if (newValue <= 0) {
        this.isFail = true;
      }
    },

    isEng(newValue) {
      if (!newValue) {
        this.fEnemyName = "Враг ур.";
        this.killCountText = "Врагов повержено";
        this.levelText = "Уровень";
        this.critText = "КРИТ. УРОН";
        this.totalGoldText = "Всего заработано кредитов";
        this.critChanceText = "Шанс крита";
        this.fastkillChanceText = "Шанс моментального убийства";
        this.totalSpellPointsText = "очков навыка";
        this.useBombtext = "бобм использовано";
        this.chestGoldText = "кредитов!";
        this.chestSpellText = "оч. навыка!";
        this.chestBombText = "+1 пси-бомба!";
        this.chestBufMinersText = "Уникальная технология: ускоритель майнеров (+100% к заработку)";
        this.chestAutohealText = "Уникальная технология: система авто-регенерации (периодическое восстановление здоровья)";
        this.shieldUsedText = "ЩИТ АКТИВЕН";
        this.fastKillActiveText = "МОМЕНТАЛЬНОЕ УБИЙСТВО";
      } else {
        this.fEnemyName = "Enemy level";
        this.killCountText = "Enemy kills";
        this.levelText = "Level";
        this.critText = "CRIT";
        this.totalGoldText = "Total credits";
        this.critChanceText = "Crit chance";
        this.fastkillChanceText = "Fast kill chance";
        this.totalSpellPointsText = "spell points";
        this.useBombtext = "bomb used";
        this.chestGoldText = "credits!";
        this.chestSpellText = "spell point!";
        this.chestBombText = "+1 psy-bomb!";
        this.chestBufMinersText = "Unique technology: Accelerator for Miners (+100% to earnings)";
        this.chestAutohealText = "Unique technology: auto-regeneration system (periodic recovery of health)";
        this.shieldUsedText = "SHIELD";
        this.fastKillActiveText = "FAST KILL";
      }
    },

    spellPoints(newValue) {
      if (this.spellPoints != 0) {
        this.isSpellPoints = true;
      } else {
        this.isSpellPoints = false;
      }
    }
  },
}
</script>

<style scoped>
.mainpage {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

h1 {
  height: auto;
}

.gamezone {
  height: 400px;
  width: 750px;
  /* border: 2px solid blue; */
  display: flex;
  /*  background-color: green; */
  justify-self: center;
  align-self: center;
  margin-bottom: 100px;
  /*  flex-direction: row; */
}

.activechest {
  display: flex;
  justify-self: center;
  align-self: center;
  height: auto;
  width: auto;
  flex-direction: column;
  /* border: 2px solid blue; */
}

.nochest {
  display: none;
}

.chestimg {
  height: 150px;
  width: 150px;
}

.chestbtn {
  border: none;
  background: none;
}

.level {
  display: flex;
  margin: auto;
  flex-direction: column;
  position: relative;
  top: 0%;
  height: 300px;
  /* border: 2px solid blue; */
}

.hero {
  height: 200px;
  width: 200px;
  /* border: 2px solid black; */
  align-self: center;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.herobtn {
  background: none;
  border: none;
}

.crit {
  display: flex;
  justify-self: center;
  /* align-self: center; */
  margin: auto;
}

.enemy {
  height: 200px;
  width: 200px;
  /*  border: 2px solid black; */
  align-self: center;
  margin-left: 5px;
  margin-right: 0;
  margin-left: auto;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}

.imghero {
  height: 300px;
  width: 200px;
}

.imgenemy {
  height: 290px;
  width: 180px;
}

.fail {
  height: auto;
  width: auto;
  border: 10px double red;
  justify-content: center;
  align-items: center;
  display: flex;
  /* position: absolute;
  left: 40%;
  top: 5%; */
  flex-direction: column;
}

.field {
  height: 900px;
  width: 800px;
  /*  border: 2px solid red; */
  justify-self: center;
  align-self: center;
  /*  position: relative;
  left: 30%; */
  /*  right: 25%; */
  display: flex;
  flex-direction: column;
}

.herobase {
  /*  border-top: 10px double black; */
  /*  border: 2px solid red; */
}

.infoblock {
  align-self: flex-start;
  position: absolute;
  left: 0;
  margin-left: 3%;
}

.menublock {
  position: absolute;
  right: 0;
  margin-right: 3%;
  /* align-self: flex-end; */
}
</style>