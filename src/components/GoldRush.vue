<template>
    <div class="main" v-bind:class="{ buf: bufMiners }">
        <div class="row">
            <div v-show="isVisibleGoldMiner2" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
            <div class="item"><img src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh"
                    alt=""></div>
            <div v-show="isVisibleGoldMiner1" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner3" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
            <button @click="setShowMinersMenu" class="goldbtn"><img class="imgbtn"
                    src="http://drive.google.com/uc?export=view&id=1qLNKhbxt7Y9G-d40bsS3RVhyRh_sxZuw" alt=""></button>
            <div v-show="isVisibleGoldMiner4" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
        </div>
        <div class="row">
            <div v-show="isVisibleGoldMiner5" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
            <div v-show="isVisibleGoldMiner7" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
            <div v-show="isVisibleGoldMiner6" class="item"><img
                    src="http://drive.google.com/uc?export=view&id=1JhvuJ-Vc6cx_h0DRwIjfTLwKd5k2NFSh" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gold-rush',
    props: {
        Credits: {
            type: Object,
            required: true,
        },
        bufMiners: Boolean,
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
        setShowMinersMenu() {
            this.$emit('setShowMinersMenu');
        }
    },
    watch: {
        Credits: {
            handler(Credits) {
                switch (Credits.CountMiners) {
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
            },
            deep: true,
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

.buf {
    border-color: orangered;
}
</style>