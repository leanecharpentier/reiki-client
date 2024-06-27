<script setup>
    defineProps({
        msg: {
                type: String,
                required: true
        },
        msg2: {
                type: String,
                required: true
        }
    })
</script>

<template>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

main {
    width: 80vw;
    margin: auto;
    h1 {
        @include title;
    }
    p {
        text-align: center;
    }
}
</style>