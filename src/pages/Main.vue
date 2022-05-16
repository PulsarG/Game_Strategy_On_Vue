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
      @testPlusSkill="testPlusSkill" @testMinusEnemyDmg="testMinusEnemyDmg" @testPlusHeroHp="testPlusHeroHp"
      @upTurret="upTurret" @testPlusGold="testPlusGold" @useKill="useKill" class="infoblock" ref="infoblock"
      :scorePoints="scorePoints" />


    <div v-show="isFail" class="fail">
      <h1>----------</h1>
      <h1>YOU DIED</h1>
      <h2>Score: {{ scorePoints }}</h2>
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

      <input type="text" v-model="user" name="" style="width: 200px; height: 35px;" id="" placeholder="Nickname">
      <button @click="sendToApi" style="height: 35px; width: 200px; margin-top: 3px; background-color: tomato;"
        v-bind:class="{ deletesendbtn: isSend }">Send to
        Ladder?</button>
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

          <!--  <h1 v-show="isShield">{{ shieldUsedText }}</h1> -->

          <h2 v-show="isSpellPoints">+ {{ spellPoints }} {{ chestSpellText }}</h2>
          <button @click="setOpenHeroSpells" class="herobtn" style="display: flex; flex-direction: row;">
            <img class="imghero" src="@/assets/fca20ca686df78242e7f5faf65ef4041.jpg" alt="">
            <img class="imgshield" v-show="isShield" src="@/assets/energy-shield(1).png" alt="">
          </button>
          <h1>{{ levelText }} {{ heroLvl }}</h1>
        </div>

        <h1 class="crit" v-show="chanceCritAfterShield" style="color: red;">ENEMY CRIT</h1>
        <h1 class="crit" v-show="isCrit">{{ critText }}</h1>
        <h1 class="crit" v-show="isFastKill">{{ fastKillActiveText }}</h1>
        <div style="display: flex; flex-direction: column;">
          <h1 class="crit" v-show="isTurretUse">{{ turretHp }} </h1>
          <img class="turret" v-show="isTurretUse" src="@/assets/turel-iz-tf2.jpg" alt="">
        </div>

        <div v-show="isEnemyLife" class="enemy">
          <div>
            <h1>{{ enemyHp }}</h1>
          </div>
          <img class="imgenemy" src="@/assets/borg-star-trek-the-next-generation-statula-.jpg" alt="">
          <h1>{{ fEnemyName }} {{ fEnemyLvl }}</h1>
        </div>

      </div>

      <hero-base @setShowMinersMenu="setShowMinersMenu" @setOpenTavern="setOpenTavern" :isTavernBuy="isTavernBuy"
        @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" ref="herobase"
        :countMiners="countMiners" :bufMiners="bufMiners" />

    </div>
    <menu-block @toStartGame="toStartGame" class="menublock" :isEng="isEng" @setLang="setLang" @setPause="setPause"
      @useAutogame="setAutogame" :isPause="isPause" />
  </div>
</template>

<script>
import HeroBase from "@/components/HeroBase.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import MenuBlock from "@/components/MenuBlock.vue";
//import { ref } from "vue";
import axios from "axios";

export default {
  components: {
    HeroBase, InfoBlock, MenuBlock,
  },

  data() {
    return {
      scorePoints: 0,

      goldCount: 0,
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
      bombPrice: 3000,
      countUseBomb: 0,
      turretPrice: 100,

      heroHp: 1800,
      heroDmg: 10,
      heroArmor: 0,
      atackSpeed: 2000,
      killCount: 0,
      heroLvl: 1,
      rollChanceCrit: 0,
      chanceCrit: 5,
      spellPoints: 0,
      totalSpellPoints: 0,
      countBomb: 0,
      fastKillChance: 1,
      rollChanceFastKill: 0,

      turretHp: 100,
      turretDmg: 50,
      defaultTurretHp: 100,

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
      bufMiners: false,

      isPause: false,
      isAutoGame: false,

      user: "",
      users: [],

      isSend: false,
    }
  },

  methods: {
    async getToApi() {
      /*  axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json")
         .then((response) => {
           let array = [];
           for (var i in response.data)
             array.push([i, response.data[i]]);
           let j = array.length;
 
           for (let i = 0; i < j; i++) {
             this.users.push(array[i][1]);
           }
         }) */
    },

    findRecords() {
      axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json")
        .then((response) => {
          let array = [];
          for (var i in response.data)
            array.push([i, response.data[i]]);
          let j = array.length;

          for (let i = 0; i < j; i++) {
            this.users.push(array[i][1]);
          }
        });

      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].heroHp < this.heroHp) {
          console.log("Вы установили рекорд!");
        }
      }
    },


    async sendToApi() {
      if (this.user == "") {
        alert("Поле с ником пустое");
      } else {
        await axios.post("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json", {
          nick: this.user,
          score: this.scorePoints,
          level: this.heroLvl,
          kills: this.killCount,
        });
        this.user = "";
        alert("Отправлено");
        this.deleteSendButton();
        /* axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json")
          .then((response) => {
            let array = [];
            for (var i in response.data)
              array.push([i, response.data[i]]);
            let j = array.length;
  
            for (let i = 0; i < j; i++) {
              this.users.push(array[i][1]);
            } */
      }

      /* for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].nick == this.user) {
          alert("Такой ник уже есть");
        } else {
          await axios.post("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json", {
            nick: this.user,
            heroHp: this.heroHp,
            heroDmg: this.heroDmg,
          });
          this.user = "";
          alert("Отправлено");
        }
      }
    } */

      /* await axios.post("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json", {
        nick: this.user,
        heroHp: this.heroHp,
        heroDmg: this.heroDmg,
      });
      this.user = "";
      alert("Отправлено"); */
    },


    toStartGame() {
      this.startGold();
      this.startDmgHeroToEnemy();
      this.startDmgEnemyToHero();
      this.upEnemyDmg();
      this.startDmgEnemyToTurret();
    },

    startGold() {
      setInterval(() => {
        if (!this.isFail && !this.isPause) {
          this.goldCount += this.goldPlus;
          this.totalGoldCount += this.goldPlus;
        }
      }, 1000);
    },

    startDmgHeroToEnemy() {

      if (!this.isFail && !this.isPause) {

        this.rollFastKill();

        this.rollChanceCrit = Math.floor(Math.random() * 99);
        if (this.rollChanceCrit <= this.chanceCrit) {
          this.showCritInfo();
          this.enemyHp -= this.heroDmg * 2;
        } else {
          this.enemyHp -= this.heroDmg;
        };
      }

      setTimeout(() => {
        this.startDmgHeroToEnemy();
      }, this.atackSpeed);

    },

    startDmgEnemyToHero() {
      setInterval(() => {
        if (!this.isFail && !this.isPause && !this.isShield && !this.isTurretUse) {
          if (this.heroArmor <= this.enemyDmg) {
            if (this.chanceCritAfterShield) {
              this.heroHp -= (this.enemyDmg - this.heroArmor);
            }

            this.heroHp -= (this.enemyDmg - this.heroArmor);
          } else {
            this.heroArmor -= 1;
          };
        }
      }, 2000);
    },

    startDmgEnemyToTurret() {
      setInterval(() => { if (!this.isFail && !this.isPause && this.isTurretUse) { this.turretHp -= this.enemyDmg; } }, 2000);
    },

    upEnemyDmg() {
      setInterval(() => { if (!this.isFail && !this.isPause) { this.enemyDmg += 5 } }, 10000);
    },

    rollFastKill() {
      this.rollChanceFastKill = Math.floor(Math.random() * 99);
      if (this.fastKillChance >= this.rollChanceFastKill) {
        this.fastKill();
      }
    },

    showCritInfo() {
      this.isCrit = true;
      setTimeout(() => { this.isCrit = false }, 500);
    },

    upCrit() {
      this.chanceCrit += 3;
      this.spellPoints -= 1;
    },

    setHiddenMenus() {
      this.isItemMenu = false;
      this.isForgeMenu = false;
      this.isTavernOpen = false;
      this.isHeroSpellsOpen = false;
    },

    setShowMinersMenu() {
      if (this.isItemMenu) {
        this.isItemMenu = false;
      }
      else {
        this.setHiddenMenus();
        this.isItemMenu = true;
      }
    },

    setShowForgeMenu() {
      if (this.isForgeMenu) {
        this.isForgeMenu = false;
      } else {
        this.setHiddenMenus();
        this.isForgeMenu = true;
      }
    },

    setOpenTavern() {
      if (this.isTavernOpen) {
        this.isTavernOpen = false;
      } else {
        this.setHiddenMenus();
        this.isTavernOpen = true;
      }
    },
    setOpenHeroSpells() {
      if (this.isHeroSpellsOpen) {
        this.isHeroSpellsOpen = false;
      } else {
        this.setHiddenMenus();
        this.isHeroSpellsOpen = true;
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
      this.heroDmg += 5;
    },
    upArmor(priceArmorUp) {
      this.goldCount -= priceArmorUp;
      this.heroArmor += 5;
    },
    setLang() {
      if (this.isEng) {
        this.isEng = false;
      } else {
        this.isEng = true;
      }
    },

    setUseShield() {
      this.isShield = true;

      setTimeout(() => { this.isShield = false; }, this.shieldTime);

      this.setEnemyCritAfterShield();

      this.useShieldPrice += 100;
    },

    setEnemyCritAfterShield() {
      this.rollChanceCritAfterShield = Math.floor(Math.random() * 2);
      setTimeout(() => {
        if (this.rollChanceCritAfterShield == 1) {
          this.chanceCritAfterShield = true;
          setTimeout(() => { this.chanceCritAfterShield = false; this.rollChanceCritAfterShield = 0; }, 2000);
        }
      }, this.shieldTime);
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
        this.useChest();
      }
    },

    setAutogame() {
      if (!this.isAutoGame) {
        this.isAutoGame = true;
      }
      else { this.isAutoGame = false };
    },

    setChest() {
      this.chestChance = Math.floor(Math.random() * 2);  // 25% chance 0-3

      if (this.chestChance == 1) {
        this.isChest = true;

        this.isPause = true;

        this.rollItemsInChest();

        this.autoUseChest();
      };
    },

    rollItemsInChest() {
      this.inChance = Math.floor(Math.random() * 100);
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

      } else if (this.inChance == 98) {
        this.isBufMiners = true;
        this.bufMiners = true;
        this.countBufMiners++;
        this.goldPlus = this.countMiners * this.countBufMiners;

      } else if (this.inChance == 99) {
        this.isAutoHeal = true;
        this.countAutoheal++;
        this.startAutoheal();
      };
    },

    autoUseChest() {
      if (this.isAutoGame)
        setTimeout(() => { this.useChest(); console.log("autoUseChest") }, 1000);
    },

    startAutoheal() {
      if (!this.isPause) {
        setInterval(() => { this.heroHp += 100; }, 10000);
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

    upScore() {
      this.scorePoints += this.killCount + this.fEnemyLvl;
    },
    upHeroExp() {
      this.heroExp += this.fEnemyLvl + 2;
    },

    upTurret() {
      this.defaultTurretHp += 100;
      this.spellPoints -= 1;
    },

    deleteSendButton() {
      this.isSend = true;
    },

    testPlusGold() {
      this.goldCount += 1000;
    },
    testPlusSkill() {
      this.spellPoints += 1;
    },
    testMinusEnemyDmg() {
      this.enemyDmg -= 10;
    },
    testPlusHeroHp() {
      this.heroHp += 100;
    }


  },
  watch: {
    enemyHp(newValue) {
      if (newValue <= 0) {
        this.upScore();
        this.killCount += 1;
        this.upHeroExp();
        // this.heroExp += 1;
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

    heroLvl(newValue, oldValue) {
      if (newValue > oldValue) {
        this.spellPoints++;
        this.totalSpellPoints++;
      };
    },

    heroExp(newValue) {
      if (newValue >= 3 && newValue < 9) {
        this.heroLvl = 2;
        //  this.expMult *= 2;
        //  this.heroExp = 0;
      } else if ((newValue >= 9 && newValue < 27)) {
        this.heroLvl = 3;
      } else if ((newValue >= 27 && newValue < 65)) {
        this.heroLvl = 4;
      } else if ((newValue >= 65 && newValue < 140)) {
        this.heroLvl = 5;
      } else if ((newValue >= 140 && newValue < 230)) {
        this.heroLvl = 6;
      } else if ((newValue >= 230 && newValue < 340)) {
        this.heroLvl = 7;
      } else if ((newValue >= 340 && newValue < 480)) {
        this.heroLvl = 8;
      } else if ((newValue >= 480 && newValue < 640)) {
        this.heroLvl = 9;
      } else if ((newValue >= 640 && newValue < 850)) {
        this.heroLvl = 10;
      } else if ((newValue >= 850 && newValue < 1000)) {
        this.heroLvl = 11;
      } else if ((newValue >= 1000 && newValue < 1200)) {
        this.heroLvl = 12;
      } else if ((newValue >= 1200 && newValue < 1400)) {
        this.heroLvl = 13;
      } else if ((newValue >= 1400 && newValue < 1650)) {
        this.heroLvl = 14;
      } else if ((newValue >= 1650 && newValue < 1950)) {
        this.heroLvl = 15;
      } else if ((newValue >= 1950 && newValue < 2250)) {
        this.heroLvl = 16;
      } else if ((newValue >= 2250 && newValue < 2650)) {
        this.heroLvl = 17;
      } else if ((newValue >= 2650 && newValue < 3050)) {
        this.heroLvl = 18;
      } else if ((newValue >= 3050 && newValue < 3550)) {
        this.heroLvl = 19;
      } else if (newValue <= 3550) {
        this.heroLvl = 20;
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
    },

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

.deletesendbtn {
  display: none;
}

.imgshield {
  width: 50px;
  height: 300px;
  opacity: 0.4;
}

.turret {
  width: 150px;
  height: 150px;
}
</style>