<template>
    <div class="main">
        <div class="row">
            <div v-show="isVisibleGoldMiner2" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
            <div class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
            <div v-show="isVisibleGoldMiner1" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner3" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
            <button @click="setShowItemMenu" class="goldbtn"><img class="imgbtn"
                    src="@/assets/29719-processor-integralnye_mikroshemy-mnogoyadernyj_processor-sinij_cvet-liniya-x750.jpg"
                    alt=""></button>
            <div v-show="isVisibleGoldMiner4" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner5" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
            <div v-show="isVisibleGoldMiner7" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
            <div v-show="isVisibleGoldMiner6" class="item"><img src="@/assets/imagesminer.jpg" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gold-rush',
    props: {
        countMiners: Number,
    },
    data() {
        return {
            isVisibleGoldMiner2: false,
            isVisibleGoldMiner4: false,
            isVisibleGoldMiner5: false,
            isVisibleGoldMiner7: false,
            isVisibleGoldMiner4: false,
            isVisibleGoldMiner1: false,
            isVisibleGoldMiner6: false,
            isVisibleGoldMiner3: false,
        }
    },
    methods: {
        setShowItemMenu() {
            this.$emit('setShowItemMenu');
        }
    },
    watch: {
        countMiners(newValue) {
            switch (newValue) {
                case 2:
                    this.isVisibleGoldMiner1 = true;
                    break;
                case 3:
                    this.isVisibleGoldMiner2 = true;
                    break;
                case 4:
                    this.isVisibleGoldMiner3 = true;
                    break;
                case 5:
                    this.isVisibleGoldMiner4 = true;
                    break;
                case 6:
                    this.isVisibleGoldMiner5 = true;
                    break;
                case 7:
                    this.isVisibleGoldMiner6 = true;
                    break;
                case 8:
                    this.isVisibleGoldMiner7 = true;
                    break;
            }
        }
    }
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
    border: 5px dotted black;
}

img {
    border-radius: 100px;
    width: 50px;
    height: 50px;
}

.imgbtn {
    width: 43px;
    height: 45px;
}
</style>