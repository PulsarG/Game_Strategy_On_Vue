<template>
  <div class="main">
    <info-block :isItemMenu="isItemMenu" :isForgeMenu="isForgeMenu" @afterBuyMiner="afterBuyMiner" @buyForge="buyForge" :isForgeBuy="isForgeBuy"
      :priceGoldMiner="priceGoldMiner" :goldCount="goldCount" class="infoblock" />
    <div class="field">
      <h1>Hello</h1>
      <hero-base :isVisibleGoldMiner1="isVisibleGoldMiner1" :isVisibleGoldMiner3="isVisibleGoldMiner3"
        :isVisibleGoldMiner4="isVisibleGoldMiner4" :isVisibleGoldMiner5="isVisibleGoldMiner5"
        :isVisibleGoldMiner6="isVisibleGoldMiner6" :isVisibleGoldMiner7="isVisibleGoldMiner7"
        :isVisibleGoldMiner8="isVisibleGoldMiner8" @setShowItemMenu="setShowItemMenu"
        @setShowForgeMenu="setShowForgeMenu" :isForgeBuy="isForgeBuy" class="herobase" />
    </div>
    <menu-block @setGold="setGold" class="menublock" />
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

      isItemMenu: false,
      isForgeMenu: false,
      isForgeBuy: false,

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
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

.field {
  margin-left: 15px;
  height: 900px;
  width: 50%;
  border: 2px solid red;
  justify-self: center;
  align-self: center;
  position: relative;
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