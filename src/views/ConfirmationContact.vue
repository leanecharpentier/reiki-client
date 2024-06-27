<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
    import Confirmation from '../components/Confirmation.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Confirmation</h1>
        <Confirmation msg="Votre message a bien été envoyé." msg2="Merci de l'attention que vous portez à Angers Reiki. Je vais essayé de vous répondre dans les plus brefs délais."/>
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