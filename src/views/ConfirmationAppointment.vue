<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
    import Confirmation from '../components/Confirmation.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Confirmation</h1>
        <Confirmation msg="Votre demande de rendez-vous a bien été prise en compte." msg2="Je vais vérifier la disponibilité de ce créaneau et vous donner réponse dans les plus brefs délais."/>
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