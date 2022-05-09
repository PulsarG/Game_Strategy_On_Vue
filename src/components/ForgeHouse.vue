<template>
    <div class="main" v-bind:class="{ active: isForgeBuy}">
        <button @click="setShowForgeMenu"> <img src="@/assets/kisspng-black-anvil-mu-online-forging-forge-5afe1bca1be6b0.1853912715266026981143.jpg" alt=""> </button>
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