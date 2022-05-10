<template>
  <div class="mainpage">

    <info-block :isItemMenu="isItemMenu" :isForgeMenu="isForgeMenu" @afterBuyMiner="afterBuyMiner" @buyForge="buyForge"
      @upDmg="upDmg" :isForgeBuy="isForgeBuy" :priceGoldMiner="priceGoldMiner" @upSpeed="upSpeed"
      :shieldPrice="shieldPrice" @healUp="healUp" :goldCount="goldCount" :heroDmg="heroDmg" :forgePrice="forgePrice"
      :isEng="isEng" @upArmor="upArmor" :speedPrice="speedPrice" :priceTavern="priceTavern" @buyTavern="buyTavern"
      :isTavernOpen="isTavernOpen" :heroHp="heroHp" :healingPrice="healingPrice" :isTavernBuy="isTavernBuy"
      :enemyDmg="enemyDmg" :heroArmor="heroArmor" class="infoblock" />

    <div v-show="isFail" class="fail">
      <h1>YOU DIED</h1>
      <h1> {{ killCountText }}: {{ killCount }}</h1>
      <h1> {{ levelText }}: {{ heroLvl }} </h1>
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
          <h1>{{ chestGold }} gold!</h1>
        </div>
      </div>


      <div class="gamezone" id="gamezone">

        <div class="hero">
          <h1>{{ levelText }}: {{ heroLvl }}</h1>
          <img src="@/assets/59503_1_b.jpg" alt="">
        </div>

        <h1 class="crit" v-show="isCrit">CRIT</h1>

        <div v-show="isEnemyLife" class="enemy">
          <h1>{{ fEnemyName }} {{ fEnemyLvl }}</h1>
          <img src="@/assets/images.jpg" alt="">
          <div>
            <h1>{{ enemyHp }}</h1>
          </div>
        </div>

      </div>

      <hero-base :isVisibleGoldMiner1="isVisibleGoldMiner1" :isVisibleGoldMiner3="isVisibleGoldMiner3"
        :isVisibleGoldMiner4="isVisibleGoldMiner4" :isVisibleGoldMiner5="isVisibleGoldMiner5"
        :isVisibleGoldMiner6="isVisibleGoldMiner6" :isVisibleGoldMiner7="isVisibleGoldMiner7"
        :isVisibleGoldMiner8="isVisibleGoldMiner8" @setShowItemMenu="setShowItemMenu" @setOpenTavern="setOpenTavern"
        :isTavernBuy="isTavernBuy" @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" />

    </div>
    <menu-block @setGold="setGold" class="menublock" :isEng="isEng" @setLang="setLang" @setPause="setPause" />
  </div>
</template>

<script>
import HeroBase from "@/components/HeroBase.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import MenuBlock from "@/components/MenuBlock.vue";

export default {
  components: {
    HeroBase, InfoBlock, MenuBlock,
  },

  data() {
    return {
      goldCount: 99999990,
      goldPlus: 1,
      priceGoldMiner: 10,
      minerAddGold: 1,
      forgePrice: 5,
      priceTavern: 5,
      healingPrice: 50,
      speedPrice: 20,
      shieldPrice: 50,

      heroHp: 1800,
      heroDmg: 100,
      heroArmor: 0,
      atackSpeed: 2000,
      killCount: 0,
      heroLvl: 1,
      critChance: 0,
      chanceCrit: 0,

      isCrit: false,

      heroExp: 0,
      expMult: 1,

      healingPoints: 500,

      enemyHp: 200,
      defaultEnemyHP: 200,
      enemyDmg: 10,
      fEnemyName: "Enemy lvl",
      fEnemyLvl: 1,
      isEnemyLife: true,

      killCountText: "Enemy kills",
      levelText: "Hero's level",

      isItemMenu: false,
      isForgeMenu: false,
      isForgeBuy: false,
      isTavernOpen: false,
      isTavernBuy: false,

      isEng: true,

      isFail: false,

      isChest: false,
      chestChance: 0,
      inChest: 0,
      chestGold: 0,

      isPause: false,

      isVisibleGoldMiner1: false,
      isVisibleGoldMiner3: false,
      isVisibleGoldMiner4: false,
      isVisibleGoldMiner5: false,
      isVisibleGoldMiner6: false,
      isVisibleGoldMiner7: false,
      isVisibleGoldMiner8: false,

    }
  },

  methods: {
    setGold() {
      setInterval(() => {
        if (!this.isFail && !this.isPause) {
          this.goldCount += this.goldPlus;
        }
      }, 1000);

      setInterval(() => {
        if (this.atackSpeed == 2000 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, this.atackSpeed);

      setInterval(() => {
        if (this.atackSpeed == 1800 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, 1800);

      setInterval(() => {
        if (this.atackSpeed == 1600 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, 1600);

      setInterval(() => {
        if (this.atackSpeed == 1400 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, 1400);

      setInterval(() => {
        if (this.atackSpeed == 1200 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, 1200);

      setInterval(() => {
        if (this.atackSpeed == 1000 && !this.isFail && !this.isPause) {
          this.critChance = Math.floor(Math.random() * 9);
          if (this.critChance <= this.chanceCrit) {
            this.setCrit();
            this.enemyHp -= this.heroDmg * 2;
          } else {
            this.enemyHp -= this.heroDmg;
          }
        }
      }, 1000);

      setInterval(() => { if (!this.isFail && !this.isPause) { this.heroHp -= (this.enemyDmg - this.heroArmor); } }, 2000);

      setInterval(() => { if (!this.isFail && !this.isPause) { this.enemyDmg += 5 } }, 10000);

    },

    setCrit() {
      this.isCrit = true;
      setTimeout(() => { this.isCrit = false }, 1000);
    },

    setShowItemMenu() {
      if (this.isItemMenu == true) {
        this.isItemMenu = false;
      }
      else {
        this.isItemMenu = true;
        this.isForgeMenu = false;
        this.isTavernOpen = false;
      }
    },

    setShowForgeMenu() {
      if (this.isForgeMenu == true) {
        this.isForgeMenu = false;
      } else {
        this.isForgeMenu = true;
        this.isItemMenu = false;
        this.isTavernOpen = false;
      }
    },


    afterBuyMiner() {
      if (this.isVisibleGoldMiner8 == false) {
        this.goldCount -= this.priceGoldMiner;
        this.goldPlus += this.minerAddGold;
        this.priceGoldMiner += 5;

        if (this.isVisibleGoldMiner1 == false) {
          this.isVisibleGoldMiner1 = true;
        } else if (this.isVisibleGoldMiner1 == true && this.isVisibleGoldMiner3 == false) {
          this.isVisibleGoldMiner3 = true;
        } else if (this.isVisibleGoldMiner3 == true && this.isVisibleGoldMiner4 == false) {
          this.isVisibleGoldMiner4 = true;
        } else if (this.isVisibleGoldMiner4 == true && this.isVisibleGoldMiner5 == false) {
          this.isVisibleGoldMiner5 = true;
        } else if (this.isVisibleGoldMiner5 == true && this.isVisibleGoldMiner6 == false) {
          this.isVisibleGoldMiner6 = true;
        } else if (this.isVisibleGoldMiner6 == true && this.isVisibleGoldMiner7 == false) {
          this.isVisibleGoldMiner7 = true;
        } else if (this.isVisibleGoldMiner7 == true && this.isVisibleGoldMiner8 == false) {
          this.isVisibleGoldMiner8 = true;
        }
      }
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
      }
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
      this.chestChance = Math.floor(Math.random() * 3);  // 25% chance 0-3
      if (this.chestChance == 1) {
        this.isChest = true;
        this.isPause = true;
        this.inChance = Math.floor(Math.random() * 9);  // chance 0-9 
        if (this.inChance <= 5) {
          console.log("GOLD");
          this.chestGold = Math.floor((Math.random() * 99) + 1);
          this.goldCount += this.chestGold;
        } else if (this.inChance > 5 && this.inChance < 9) {
          console.log("UP");
        } else if (this.inChance == 9) {
          console.log("ITEM");
        };
      };
    },
    useChest() {
      if (this.isChest) {
        this.isChest = false;
        this.isPause = false;
        this.isEnemyLife = true;
      }
    }
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
        this.levelText = "Уровень героя";
      } else {
        this.fEnemyName = "Enemy lvl";
        this.killCountText = "Enemy kills";
        this.levelText = "Hero's level";
      }
    }
  },
}
</script>

<style scoped>
.mainpage {
  display: flex;
  flex-direction: row;
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
  height: 150px;
  width: 150px;
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
}

img {
  height: 300px;
  width: 200px;
}

.fail {
  height: 900px;
  width: 900px;
  /* border: 2px solid red; */
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  left: 25%;
  right: 25%;
  flex-direction: column;
}

.field {
  height: 900px;
  width: 900px;
  /* border: 2px solid red; */
  justify-self: center;
  align-self: center;
  position: relative;
  left: 25%;
  right: 25%;
  display: flex;
  flex-direction: column;
}

.herobase {

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
  align-self: flex-end;
}
</style>