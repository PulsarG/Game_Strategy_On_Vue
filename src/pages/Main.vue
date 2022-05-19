<template>
  <div class="mainpage">

    <info-block :isItemMenu="isItemMenu" :isForgeMenu="isForgeMenu" @afterBuyMiner="afterBuyMiner" @buyForge="buyForge"
      @upDmg="upDmg" :isForgeBuy="isForgeBuy" @upSpeed="upSpeed" @upShield="upShield"
      :isHeroSpellsOpen="isHeroSpellsOpen" @healUp="healUp" :isEng="isEng" @upArmor="upArmor" @buyTavern="buyTavern"
      :isTavernOpen="isTavernOpen" :shieldTimeSec="shieldTimeSec" :isTavernBuy="isTavernBuy" @buyBomb="buyBomb"
      @useBomb="useBomb" @setUseShield="setUseShield" @upCrit="upCrit" @useTurret="useTurret"
      :countBufMiners="countBufMiners" :countAutoheal="countAutoheal" @testPlusSkill="testPlusSkill"
      @testMinusEnemyDmg="testMinusEnemyDmg" @testPlusHeroHp="testPlusHeroHp" @upTurret="upTurret"
      @testPlusGold="testPlusGold" @useKill="useKill" class="infoblock" ref="infoblock" :Hero="Hero" :Enemy="Enemy"
      :Buy="Buy" :Turret="Turret" :Credits="Credits" />


    <div v-show="isFail" class="fail">
      <h1>----------</h1>
      <h1>YOU DIED</h1>
      <h2>Score: {{ scorePoints }}</h2>
      <h1>----------</h1>
      <h3> {{ killCountText }}: {{ Hero.KillCount }}</h3>
      <h3> {{ levelText }}: {{ Hero.Lvl }} </h3>
      <h3> {{ totalGoldText }}: {{ totalGoldCount }}</h3>
      <h3> {{ critChanceText }}: {{ Hero.ChanceCrit }}%</h3>
      <h3>{{ fastkillChanceText }}: {{ Hero.FastKillChance }}%</h3>
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
          {{ killCountText }}: {{ Hero.KillCount }}
        </h1>
        <div v-bind:class="{ activechest: isChest, nochest: !isChest }">
          <button class="chestbtn" @click="useChest"> <img class="chestimg"
              src="http://drive.google.com/uc?export=view&id=1XfQ8U6e6dVIzbXKgQnZo35bEOGZ-TBBm" alt="">
            <p>Кликните, чтобы продолжить</p>
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

          <h2 v-show="isSpellPoints">+ {{ Hero.SpellPoints }} {{ chestSpellText }}</h2>
          <button @click="setOpenHeroSpells" class="herobtn" style="display: flex; flex-direction: row;">
            <img class="imghero" src="http://drive.google.com/uc?export=view&id=11Iqj7exWGFh5uBlWIElPPrGhpWpHvOCB" alt="">
            <img class="imgshield" v-show="isShield" src="http://drive.google.com/uc?export=view&id=1IYIeFLapRwb7Ptek-wEEkVcok2amBm8M" alt="">
          </button>
          <h1>{{ levelText }} {{ Hero.Lvl }}</h1>
        </div>

        <h1 class="crit" v-show="Enemy.ChanceCritAfterShield" style="color: red;">Enemy CRIT</h1>
        <h1 class="crit" v-show="isCrit">{{ critText }}</h1>
        <h1 class="crit" v-show="isFastKill">{{ fastKillActiveText }}</h1>
        <div style="display: flex; flex-direction: column;">
          <h1 class="crit" v-show="isTurretUse">{{ Turret.Hp }} </h1>
          <img class="turret" v-show="isTurretUse" src="http://drive.google.com/uc?export=view&id=1HR03pGuy5dMhT_CCjpFkuxohq6kKoCAq" alt="">
        </div>

        <div v-show="Enemy.IsLife" class="Enemy">
          <div>
            <h1>{{ Enemy.Hp }}</h1>
          </div>
          <img class="imgEnemy" src="http://drive.google.com/uc?export=view&id=1AWCkr9BUTb6IrACiU8IRgYpJsnd-YyRD" alt="">
          <h1>{{ Enemy.Name }} {{ Enemy.Lvl }}</h1>
        </div>

      </div>

      <hero-base @setShowMinersMenu="setShowMinersMenu" @setOpenTavern="setOpenTavern" :isTavernBuy="isTavernBuy"
        @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" ref="herobase"
        :bufMiners="bufMiners" :Credits="Credits" />

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
      totalSpellPoints: 0,
      totalGoldCount: 0,
      countUseBomb: 0,
      countTurrets: 0,

      Hero: {
        Hp: 1800,
        Dmg: 50,
        Armor: 0,
        AtackSpeed: 2000,
        KillCount: 0,
        Lvl: 1,
        ChanceCrit: 5,
        SpellPoints: 0,
        CountBomb: 0,
        FastKillChance: 1,
        Exp: 0,
        HealingPoints: 500,
      },

      Enemy: {
        Hp: 200,
        DefaultHp: 200,
        Dmg: 10,
        Name: "Level",
        Lvl: 1,
        IsLife: true,
        ChanceCritAfterShield: false,
        RollChanceCritAfterShield: 0,
      },

      Credits: {
        GoldCount: 0,
        GoldPlus: 1,
        PriceGoldMiner: 10,
        MinerAddGold: 1,
        CountMiners: 1,
      },

      Turret: {
        Hp: 100,
        Dmg: 50,
        DefaultHp: 100,
        Price: 100,
      },

      Buy: {
        ForgePrice: 5,
        PriceTavern: 5,
        HealingPrice: 500,
        SpeedPrice: 20,
        UpShieldPrice: 50,
        UseShieldPrice: 100,
        BombPrice: 3000,
        PriceDmgUp: 5,
        PriceArmorUp: 10,
      },

      upDmgCount: 1,

      shieldTime: 5000,
      shieldTimeSec: 5,

      isSpellPoints: false,
      isCrit: false,
      isFastKill: false,
      isShield: false,

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
      bufMiners: false,

      isPause: false,
      isAutoGame: false,

      user: "",
      users: [],

      isSend: false,

      urlimg: "http://drive.google.com/uc?export=view&id=",
    }
  },

  methods: {

    async findRecords() {
      try {
        await axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json")
          .then((response) => {
            let array = [];
            for (var i in response.data)
              array.push([i, response.data[i]]);
            let j = array.length;

            for (let i = 0; i < j; i++) {
              this.users.push(array[i][1]);
            }
          });
      } catch (e) {
        alert("Произошла ошибка проверки рекорда");
        console.log(e);
      }

      let k = 0;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].score < this.scorePoints) {
          k++;
          if (k >= this.users.length)
            alert("Вы установили мировой рекорд! / World Record!");
        }
      }
    },


    async sendToApi() {
      if (this.user == "") {
        alert("Поле с ником пустое");
      } else {
        try {
          await axios.post("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json", {
            nick: this.user,
            score: this.scorePoints,
            level: this.Hero.Lvl,
            kills: this.Hero.KillCount,
          });
        } catch (e) {
          alert("Error:");
          alert(e);
        };
        this.user = "";
        alert("Отправлено");
        this.deleteSendButton();
      }
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
          this.Credits.GoldCount += this.Credits.GoldPlus;
          this.totalGoldCount += this.Credits.GoldPlus;
        }
      }, 1000);
    },

    startDmgHeroToEnemy() {

      if (!this.isFail && !this.isPause) {

        this.rollFastKill();

        let rollChanceCrit = Math.floor(Math.random() * 99);
        if (rollChanceCrit <= this.Hero.ChanceCrit) {
          this.showCritInfo();
          this.Enemy.Hp -= this.Hero.Dmg * 2;
        } else {
          this.Enemy.Hp -= this.Hero.Dmg;
        };
      }

      setTimeout(() => {
        this.startDmgHeroToEnemy();
      }, this.Hero.AtackSpeed);

    },

    startDmgEnemyToHero() {
      setInterval(() => {
        if (!this.isFail && !this.isPause && !this.isShield && !this.isTurretUse) {
          if (this.Hero.Armor <= this.Enemy.Dmg) {
            if (this.Enemy.ChanceCritAfterShield) {
              this.Hero.Hp -= (this.Enemy.Dmg - this.Hero.Armor);
            }

            this.Hero.Hp -= (this.Enemy.Dmg - this.Hero.Armor);
          } else {
            this.Hero.Armor -= 1;
          };
        }
      }, 2000);
    },

    startDmgEnemyToTurret() {
      setInterval(() => { if (!this.isFail && !this.isPause && this.isTurretUse) { this.Turret.Hp -= this.Enemy.Dmg; } }, 2000);
    },

    upEnemyDmg() {
      setInterval(() => { if (!this.isFail && !this.isPause) { this.Enemy.Dmg += 5 } }, 10000);
    },

    rollFastKill() {
      let rollChanceFastKill = Math.floor(Math.random() * 99);
      if (this.Hero.FastKillChance >= rollChanceFastKill) {
        this.fastKill();
      }
    },

    showCritInfo() {
      this.isCrit = true;
      setTimeout(() => { this.isCrit = false }, 500);
    },

    upCrit() {
      this.Hero.ChanceCrit += 3;
      this.Hero.SpellPoints -= 1;
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
      this.Credits.CountMiners++;
      this.Credits.GoldCount -= this.Credits.PriceGoldMiner;
      /* this.goldPlus += this.minerAddGold; */
      this.Credits.GoldPlus = this.Credits.CountMiners * this.countBufMiners;
      this.Credits.PriceGoldMiner += 5;
    },

    buyForge() {
      this.isForgeBuy = true;
      this.Credits.GoldCount -= 5;
    },
    buyTavern() {
      this.isTavernBuy = true;
      this.Credits.GoldCount -= this.Buy.PriceTavern;
    },
    upDmg() {
      this.Credits.GoldCount -= this.Buy.PriceDmgUp;
      this.Hero.Dmg += 50;
      this.upDmgCount++;
      this.Buy.PriceDmgUp *= this.upDmgCount;
    },
    upArmor() {
      this.Credits.GoldCount -= this.Buy.PriceArmorUp;
      this.Hero.Armor += 5;
      this.Buy.PriceArmorUp += 5;
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

      this.Buy.UseShieldPrice += 100;
    },

    setEnemyCritAfterShield() {
      this.Enemy.RollChanceCritAfterShield = Math.floor(Math.random() * 2);
      setTimeout(() => {
        if (this.Enemy.RollChanceCritAfterShield == 1) {
          this.Enemy.ChanceCritAfterShield = true;
          setTimeout(() => { this.Enemy.ChanceCritAfterShield = false; this.Enemy.RollChanceCritAfterShield = 0; }, 2000);
        }
      }, this.shieldTime);
    },

    upShield() {
      this.Buy.UpShieldPrice += 50;
      this.shieldTime += 5000;
      this.shieldTimeSec += 5;

    },

    healUp() {
      this.Credits.GoldCount -= this.Buy.HealingPrice;
      this.Hero.Hp += this.Hero.HealingPoints;
      this.Buy.HealingPrice += 10;
    },
    upSpeed() {
      this.Credits.GoldCount -= this.Buy.SpeedPrice;
      this.Buy.SpeedPrice += 20;
      this.Hero.AtackSpeed -= 200;
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

    chestDrop() {
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
        this.Credits.GoldCount += this.chestGold;
        this.totalGoldCount += this.chestGold;
        this.isGold = true;

      } else if (this.inChance > 70 && this.inChance <= 90) {
        this.Hero.SpellPoints++;
        this.totalSpellPoints++;
        this.isPoint = true;

      } else if (this.inChance > 90 && this.inChance < 98) {
        this.countBomb++;
        this.isBomb = true;

      } else if (this.inChance == 98) {
        this.isBufMiners = true;
        this.bufMiners = true;
        this.countBufMiners++;
        this.Credits.GoldPlus = this.Credits.CountMiners * this.countBufMiners;

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
        setInterval(() => { this.Hero.Hp += 100; }, 10000);
      }
    },

    useChest() {
      if (this.isChest) {
        this.isChest = false;
        this.isPause = false;
        this.Enemy.IsLife = true;
        this.isGold = false;
        this.isPoint = false;
        this.isBomb = false;
        this.isBufMiners = false;
        this.isAutoHeal = false;
      }
    },

    buyBomb() {
      this.Credits.GoldCount -= this.Buy.BombPrice;
      this.Hero.CountBomb += 1;
      this.Buy.BombPrice += 500;
    },
    useBomb() {
      this.Enemy.Hp = 0;
      this.Enemy.DefaultHp = 100;
      this.Enemy.Dmg = 10;
      this.Enemy.Lvl = 0;
      this.Hero.KillCount += 1;
      this.Hero.CountBomb -= 1;
      this.countUseBomb++;
    },
    useKill() {
      this.Hero.FastKillChance += 1;
      this.Hero.SpellPoints -= 1;
    },
    fastKill() {
      this.Enemy.Hp = 0;
      this.isFastKill = true;
      setTimeout(() => { this.isFastKill = false; }, 1000);
    },

    useTurret() {
      this.isTurretUse = true;
      this.Turret.Hp = this.Turret.DefaultHp;
      this.countTurrets++;
      this.Credits.GoldCount -= this.Turret.Price;
      this.Turret.Price += 100;

      let turretDamage = setInterval(() => {

        if (this.isTurretUse && !this.isPause) {
          this.Enemy.Hp -= this.Turret.Dmg;
          console.log("turret");

          if (this.Turret.Hp <= 0) {
            this.isTurretUse = false;
            clearInterval(turretDamage);
          }
        }
      }, 1000);
    },

    upScore() {
      this.scorePoints += this.Hero.KillCount + this.Enemy.Lvl;
    },
    upHeroExp() {
      this.Hero.Exp += this.Enemy.Lvl + 2;
    },

    upTurret() {
      this.Turret.DefaultHp += 100;
      this.Hero.SpellPoints -= 1;
    },

    deleteSendButton() {
      this.isSend = true;
    },

    testPlusGold() {
      this.Credits.GoldCount += 1000;
    },
    testPlusSkill() {
      this.Hero.SpellPoints += 1;
    },
    testMinusEnemyDmg() {
      this.Enemy.Dmg -= 10;
    },
    testPlusHeroHp() {
      this.Hero.Hp += 100;
    },

  },

  watch: {

    'Hero.Hp': function (v) {
      if (v <= 0) {
        this.isFail = true;
        this.findRecords();
      }
    },

    'Enemy.Hp': function (v) {
      if (v <= 0) {
        this.upScore();
        this.Hero.KillCount += 1;
        this.upHeroExp();
        // this.heroExp += 1;
        this.Enemy.DefaultHp += 100;
        this.Enemy.Hp = this.Enemy.DefaultHp;
        this.Enemy.Lvl += 1;

        this.chestDrop();

        this.isPause = true;
        this.Enemy.IsLife = false;

        setTimeout(() => {
          if (!this.isChest) {
            this.isPause = false; this.Enemy.IsLife = true
          }
        }, 1000);
      }
    },

    'Hero.Lvl': function (a, b) {
      if (a > b) {
        this.Hero.SpellPoints++;
        this.totalSpellPoints++;
      }
    },

    'Hero.SpellPoints': function (v) {
      if (v != 0) {
        this.isSpellPoints = true;
      } else {
        this.isSpellPoints = false;
      }
    },

    'Hero.Exp': function (newValue) {
      if (newValue >= 3 && newValue < 9) {
        this.Hero.Lvl = 2;
      } else if ((newValue >= 9 && newValue < 27)) {
        this.Hero.Lvl = 3;
      } else if ((newValue >= 27 && newValue < 65)) {
        this.Hero.Lvl = 4;
      } else if ((newValue >= 65 && newValue < 140)) {
        this.Hero.Lvl = 5;
      } else if ((newValue >= 140 && newValue < 230)) {
        this.Hero.Lvl = 6;
      } else if ((newValue >= 230 && newValue < 340)) {
        this.Hero.Lvl = 7;
      } else if ((newValue >= 340 && newValue < 480)) {
        this.Hero.Lvl = 8;
      } else if ((newValue >= 480 && newValue < 640)) {
        this.Hero.Lvl = 9;
      } else if ((newValue >= 640 && newValue < 850)) {
        this.Hero.Lvl = 10;
      } else if ((newValue >= 850 && newValue < 1000)) {
        this.Hero.Lvl = 11;
      } else if ((newValue >= 1000 && newValue < 1200)) {
        this.Hero.Lvl = 12;
      } else if ((newValue >= 1200 && newValue < 1400)) {
        this.Hero.Lvl = 13;
      } else if ((newValue >= 1400 && newValue < 1650)) {
        this.Hero.Lvl = 14;
      } else if ((newValue >= 1650 && newValue < 1950)) {
        this.Hero.Lvl = 15;
      } else if ((newValue >= 1950 && newValue < 2250)) {
        this.Hero.Lvl = 16;
      } else if ((newValue >= 2250 && newValue < 2650)) {
        this.Hero.Lvl = 17;
      } else if ((newValue >= 2650 && newValue < 3050)) {
        this.Hero.Lvl = 18;
      } else if ((newValue >= 3050 && newValue < 3550)) {
        this.Hero.Lvl = 19;
      } else if (newValue <= 3550) {
        this.Hero.Lvl = 20;
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
        this.fEnemyName = "Level";
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

.Enemy {
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

.imgEnemy {
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