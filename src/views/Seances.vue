<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Séances</h1>
        <div class="container">
            <h2>Réharmonisation et revitalisation</h2>
            <p>Le Reiki est une thérapie naturelle respectant la dimension humaine de l'Homme. Il permet de canaliser l'énergie universelle et de la restituer pour le bien-être du corps et de l'esprit.<br>La séance consiste en un placement des mains sur tout le corps, de la tête aux pieds et également en fonction des besoins de la personne.<br>C'est un grand moment de relaxation profonde très bénéfique.</p>
        </div>
        <div class="container">
            <h2>Les 2 types de séances :</h2>
            <div class="bloc">
                <h3>Soin au cabinet 50€</h3>
                <p>Sa durée est de 45 min à 1 heure et comprend un entretien, le soin énergétique et un bilan.<br>La personne est habillée dans une tenue confortable et choisit de recevoir le soin allongée sur le ventre ou sur le dos.</p>
                <p>En fonction de ce qui sera abordé lors d'un premier contact , prévoir 1 à 4 séances.</p>
            </div>
        </div>
        <div class="container">
            <div class="bloc">
                <h3>Soin à domicile 60€</h3>
                <p>Sa durée est d' 45 min à 1 heure  et  comprend un entretien, le soin énergétique et un bilan.<br>La personne est habillée dans une tenue confortable et choisit de recevoir le soin allongée  sur le ventre ou sur le dos<br>NB: Le soin Reiki demande un environnement calme et serein , aussi je demande à la personne qui me reçoit de  faire le nécessaire pour que ces conditions soient réunies.</p>
                <p>En fonction de ce qui sera abordé lors d'un premier contact , prévoir 1 à 4 séances.</p>
            </div>
        </div>
        <div class="container">
            <h2>Déroulement d'une séance</h2>
            <p>Pendant le soin, la personne est habillée et allongée selon sa préférence sur le dos ou sur le ventre </p>
            <p>J'appose ensuite mes mains quelques minutes sur les parties du corps qui en ont besoin. Mon rôle est de canaliser l'énergie et de la restituer pour le bien-être du corps et de l'esprit .</p>
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