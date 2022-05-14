<template>
    <div class="main" v-bind:class="{ active: isForgeBuy}">
        <button @click="setShowForgeMenu"> <img src="@/assets/png-transparent-gear-train-others-miscellaneous-logo-mechanics.png" alt=""> </button>
    </div>
</template>

<script>
export default {
    props: {
        isForgeBuy: {
            type: Boolean,
        }
    },
    name: 'forge-house',
    methods: {
        setShowForgeMenu() {
            this.$emit('setShowForgeMenu');
        }
    }
}
</script>

<style scoped>
.main {
    width: 150px;
    height: 150px;
  /*   border: 1px solid blue; */
    margin: auto;
    opacity: 0.4;
}

.active {
    width: 150px;
    height: 150px;
  /*   border: 1px solid blue; */
    margin: auto;
    opacity: 1;
}

button {
    width: 150px;
    height: 150px;
    background: none;
    border: none;
}

img {
    border-radius: 100px;
    width: 140px;
    height: 140px;
    margin: auto;
}
</style>