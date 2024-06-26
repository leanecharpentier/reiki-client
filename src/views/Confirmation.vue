<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Confirmation</h1>
        <p>Votre demande de rendez-vous a bien été prise en compte.</p>
        <p>Je vais vérifier la disponibilité de ce créaneau et vous donner réponse dans les plus brefs délais.</p>
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
    p {
        text-align: center;
    }
}
</style>