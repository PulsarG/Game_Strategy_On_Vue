<template>
    <div class="main">
        <div class="menu">
            <h1>Menu</h1>
        </div>
        <button @click="toSetGold">qweqweqwe</button>
    </div>
</template>

<script>
export default {
    name: 'menu-block',
    props: {
      
    },
    data() {
        return {
            
        }
    },

    methods: {
        toSetGold() {
            this.$emit('setGold');
        }
    }
}
</script>

<style scoped>
.main {
    width: 400px;
    height: 900px;
    border: 1px solid red;
    display: flex;
    position: relative;
}

button {
    height: 100px;
    width: 100px;
}
</style>