<template>
  <div class="base">
    <gold-rush  @setShowMinersMenu="setShowMinersMenu" :countMiners="countMiners" :bufMiners="bufMiners"/>

    <forge-house :isForgeBuy="isForgeBuy" @setShowForgeMenu="setShowForgeMenu" />

    <hero-tavern @setOpenTavern="setOpenTavern" :isTavernBuy="isTavernBuy" />
  </div>
</template>

<script>
import GoldRush from "@/components/GoldRush.vue"
import ForgeHouse from "@/components/ForgeHouse.vue";
import HeroTavern from "@/components/HeroTavern.vue"

export default {
  props: {
    countMiners: Number,
    bufMiners: Boolean,
    isForgeBuy: {
      type: Boolean,
    },
    isTavernBuy: {
      type: Boolean,
    }
  },
  components: { GoldRush, ForgeHouse, HeroTavern },
  name: 'hero-base',
  data() {
    return {

    }
  },
  methods: {
    setShowMinersMenu() {
      this.$emit('setShowMinersMenu');
    },
    setShowForgeMenu() {
      this.$emit('setShowForgeMenu');
    },
    setOpenTavern() {
      this.$emit('setOpenTavern');
    },
  },
}
</script>

<style scoped>
.base {
  /* margin: auto; */
  height: 150px;
  width: 100%;
  /* border: 0.5px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*  background-color: rgb(221, 215, 207); */
}
</style>