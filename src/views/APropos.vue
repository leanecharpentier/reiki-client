<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>A Propos</h1>
        <div class="container">
            <h2>Se rencontrer à Angers</h2>
            <p>Je vous reçois du lundi au samedi matin sur rendez-vous à mon cabinet Reiki d'Angers</p>
            <p>Le stationnement est gratuit aux alentours et de nombreuses lignes de bus d'Angers Loire Métropole s'arrêtent à proximité .</p>
            <p>Si vous rencontrez des difficultés pour vous déplacer , je peux également me rendre à votre domicile dans la première couronne d'Angers ( environ 10 km).</p>
        </div>
        <div class="container">
            <h3>A propos de moi</h3>
            <p>J'ai eu la chance de faire connaissance avec les soins énergétiques alors que j'étais toute petite en  voyant ma grand-mère "couper le feu"à un voisin qui venait de se brûler en faisant la cuisine . Devenue adulte, j'ai souhaité en savoir plus et enrichir cette tradition familiale  grâce à une  formation d'énergéticienne  Reiki il y a 10 ans. Cela m'a permis d'en apprendre plus et de m'apporter un mieux être ainsi qu'aux personnes de mon entourage. Je pratique et j'enseigne par ailleurs le Tai Chi Viêtnamien ( Viêt Tai Chi) , un art interne qui me permet d'entretenir mon énergie, ma souplesse et mon équilibre.</p>
        </div>
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