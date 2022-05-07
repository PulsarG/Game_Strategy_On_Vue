<template>
    <div class="main">
        <div class="row">
            <div v-show="isVisibleGoldMiner3" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
            <div v-show="isVisibleGoldMiner2" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
            <div v-show="isVisibleGoldMiner1" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner5" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
            <button @click="setShowItemMenu" class="goldbtn"><img src="@/assets/kisspng-gold-bar-bullion-gold-as-an-investment-gold-bar-5ac2a363976f87.9780410415227052516203.jpg" alt=""></button>
            <div v-show="isVisibleGoldMiner4" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner8" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
            <div v-show="isVisibleGoldMiner7" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
            <div v-show="isVisibleGoldMiner6" class="item"><img src="@/assets/simple_pickaxe.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gold-rush',
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
    },
    data() {
        return {
            isVisibleGoldMiner2: true,
        }
    },
    methods: {
        setShowItemMenu() {
            this.$emit('setShowItemMenu');
        }
    },
}
</script>

<style scoped>
.item {
    width: 50px;
    height: 50px;
    /* border: 1px solid blue; */
}

.row {
    display: flex;
    flex-direction: row;
}

.goldbtn {
    width: 50px;
    height: 50px;
  /*   border: 1px solid yellow; */
    margin: auto;
    background: none;
    border: none;
}

.main {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
}

img {
    width: 50px;
    height: 50px;
}
</style>