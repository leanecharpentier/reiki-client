<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Formulaire de contact</h1>
    </main>
    <FooterContent />
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

main {
    width: 80vw;
    margin: auto;
    h1 {
        @include title;
    }
    .container {
        padding: 20px 0;
        h2 {
            @include sub-title;
        }
        h3 {
            @include sub-title2;
        }
    }
}
</style>