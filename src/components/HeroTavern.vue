<template>
    <div class="tavern" v-bind:class="{ isbuy: isTavernBuy }">
        <button @click="setOpenTavern">
            <img src="http://drive.google.com/uc?export=view&id=1oh39c1rRSbB78j2fIF7QJTX_IPk2xEvB" alt="">
        </button>
    </div>
</template>

<script>
export default {
    name: 'hero-tavern',
    props: {
        isTavernBuy: { type: Boolean, }
    },
    methods: {
        setOpenTavern() {
            this.$emit('setOpenTavern');
        },
    },
}
</script>

<style scoped>
.tavern {
    height: 150px;
    width: 150px;
    margin: auto;
    /*  border: 1px solid red; */
    opacity: 0.4;
}

.isbuy {
    height: 150px;
    width: 150px;
    margin: auto;
    opacity: 1;
}

img {
    border-radius: 100px;
    width: 140px;
    height: 140px;
    margin: auto;
}

button {
    border-radius: 100px;
    width: 140px;
    height: 140px;
    margin: auto;
    border: none;
    background: none;
}
</style>