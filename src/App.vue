<template>
  <div class="main">

    <info-block v-show="!isFail" :isItemMenu="isItemMenu" :isForgeMenu="isForgeMenu" @afterBuyMiner="afterBuyMiner" @buyForge="buyForge"
      @upDmg="upDmg" :isForgeBuy="isForgeBuy" :priceGoldMiner="priceGoldMiner" :goldCount="goldCount" :heroDmg="heroDmg"
      :forgePrice="forgePrice" :isEng="isEng" @upArmor="upArmor" :heroHp="heroHp" :heroArmor="heroArmor"
      class="infoblock" />

    <div v-show="isFail" class="fail">
      <h1>FAIL</h1>
    </div>

    <div v-show="!isFail" class="field">

      <div class="gamezone" id="gamezone">
        <div class="hero"> <img src="@/assets/png-clipart-silhouette-graphy-archer-angle-photography.png" alt=""></div>

        <div class="enemy">
          <h1>{{ enemyHp }}</h1>
        </div>
      </div>

      <hero-base :isVisibleGoldMiner1="isVisibleGoldMiner1" :isVisibleGoldMiner3="isVisibleGoldMiner3"
        :isVisibleGoldMiner4="isVisibleGoldMiner4" :isVisibleGoldMiner5="isVisibleGoldMiner5"
        :isVisibleGoldMiner6="isVisibleGoldMiner6" :isVisibleGoldMiner7="isVisibleGoldMiner7"
        :isVisibleGoldMiner8="isVisibleGoldMiner8" @setShowItemMenu="setShowItemMenu"
        @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" />

    </div>
    <menu-block v-show="!isFail" @setGold="setGold" class="menublock" :isEng="isEng" @setLang="setLang" />
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
      goldCount: 0,
      goldPlus: 1,
      priceGoldMiner: 10,
      minerAddGold: 1,
      forgePrice: 5,

      heroHp: 200,
      heroDmg: 1,
      heroArmor: 1,

      enemyHp: 200,
      enemyDmg: 10,

      isItemMenu: false,
      isForgeMenu: false,
      isForgeBuy: false,

      isEng: true,

      isFail: false,

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
      setInterval(() => { this.goldCount += this.goldPlus }, 1000);

      setInterval(() => { this.enemyHp -= this.heroDmg }, 1000);

      setInterval(() => { this.heroHp -= (this.enemyDmg - this.heroArmor) }, 1000);

      setInterval(() => { this.enemyDmg += 5 }, 5000);

    },

    setShowItemMenu() {
      if (this.isItemMenu == true) {
        this.isItemMenu = false;
      }
      else {
        this.isItemMenu = true;
        this.isForgeMenu = false;
      }
    },

    setShowForgeMenu() {
      if (this.isForgeMenu == true) {
        this.isForgeMenu = false;
      } else {
        this.isForgeMenu = true;
        this.isItemMenu = false;
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
    upDmg(priceDmgUp) {
      this.goldCount -= priceDmgUp;
      this.heroDmg += 1;
    },
    upArmor(priceArmorUp) {
      this.goldCount -= priceArmorUp;
      this.heroArmor += 1;
    },
    setLang() {
      if (this.isEng) {
        this.isEng = false;
      } else {
        this.isEng = true;
      }
    }
  },
  watch: {
    heroHp(newValue) {
      if (newValue < 0) {
        this.isFail = true;
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

.gamezone {
  height: 750px;
  width: 750px;
  /* border: 2px solid blue; */
  display: flex;
  background-color: green;
  margin: auto;
}

.hero {
  height: 64px;
  width: 64px;
  border: 2px solid black;
  align-self: center;
  margin-left: 5px;
}

.enemy {
  height: 64px;
  width: 64px;
  border: 2px solid black;
  align-self: center;
  margin-left: 5px;
  margin-right: 0;
  margin-left: auto;
  margin-right: 5px;
}

img {
  height: 64px;
  width: 64px;
}

.fail {
  margin-left: 15px;
  height: 900px;
  width: 50%;
  /*  border: 2px solid red; */
  justify-self: center;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
}

.field {
  margin-left: 15px;
  height: 900px;
  width: 50%;
  /*  border: 2px solid red; */
  justify-self: center;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
}

.herobase {
  position: absolute;
  bottom: 0;
}

.infoblock {
  margin-left: 15px;
  align-self: flex-start;
}

.menublock {
  margin-left: 15px;
  align-self: flex-end;
}
</style>