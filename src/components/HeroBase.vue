<template>
  <div class="base">
    <gold-rush :isVisibleGoldMiner1="isVisibleGoldMiner1" :isVisibleGoldMiner3="isVisibleGoldMiner3"
      :isVisibleGoldMiner4="isVisibleGoldMiner4" :isVisibleGoldMiner5="isVisibleGoldMiner5"
      :isVisibleGoldMiner6="isVisibleGoldMiner6" :isVisibleGoldMiner7="isVisibleGoldMiner7"
      :isVisibleGoldMiner8="isVisibleGoldMiner8" @setShowItemMenu="setShowItemMenu" />
    <forge-house :isForgeBuy="isForgeBuy" @setShowForgeMenu="setShowForgeMenu" />
  </div>
</template>

<script>
import GoldRush from "@/components/GoldRush.vue"
import ForgeHouse from "@/components/ForgeHouse.vue";

export default {
  props: {
    isVisibleGoldMiner1: {
      type: Boolean,
    },
    isVisibleGoldMiner3: {
      type: Boolean,
    },
    isVisibleGoldMiner4: {
      type: Boolean,
    },
    isVisibleGoldMiner5: {
      type: Boolean,
    },
    isVisibleGoldMiner6: {
      type: Boolean,
    },
    isVisibleGoldMiner7: {
      type: Boolean,
    },
    isVisibleGoldMiner8: {
      type: Boolean,
    },
    isForgeBuy: {
      type: Boolean,
    },
  },
  components: { GoldRush, ForgeHouse, },
  name: 'hero-base',
  data() {
    return {

    }
  },
  methods: {
    setShowItemMenu() {
      this.$emit('setShowItemMenu');
    },
    setShowForgeMenu() {
      this.$emit('setShowForgeMenu');
    }
  },
}
</script>

<style scoped>
.base {
  margin: auto;
  height: 150px;
  width: 100%;
 /*  border: 2px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(221, 215, 207);
}

</style>