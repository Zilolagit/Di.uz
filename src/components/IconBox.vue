<template>
    <div class="iconbox">
        <img :src="img" :alt="img">
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
    </div>
</template>

<script setup>
    const props = defineProps(['img', 'title', 'desc'])
</script>

<style lang="scss" scoped>

.iconbox {
    cursor: pointer;
    &:hover {
        h4 {
            color: #fab448;
        }
    }
    img {
        width: 90px;
        margin-bottom: 30px;
    }
    h4 {
    transition: all .3s ease;
    }
    p {
        margin-top: 20px;
        font-size: 16px;
    }
}

</style>
