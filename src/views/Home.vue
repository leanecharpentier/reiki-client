<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Le soin Reiki proche de chez vous à Angers</h1>
        <div class="container">
            <h2>Qu'est-ce que le Reiki Usui</h2>
            <p>Le Reiki est une technique de soin énergétique issue de la médecine ancestrale japonaise. Elle se transmettait traditionnellement dans les familles  jusqu'à la fin du 19e siècle. C'est le Maître Japonais Mikao Usui qui a codifié et formalisé cette pratique au 20ème siècle . Grâce à sa contribution dans la mise en place d'un protocole, le Reiki a pu être enseigné au travers d' écoles puis diffusé à travers le monde . Les praticiens Reiki font partie de la grande famille des énergéticiens, énergéticiennes.</p>
            <p>Le soin fonctionne par apposition des mains pour transférer l'énergie régénératrice et la faire circuler dans le corps du patient pour le libérer des blocages et des tensions tant physiques que psychiques.</p>
            <p>Le Reiki ne soigne pas les maladies mais facilite leur traitement. Il ne se substitue pas à la médecine, le thérapeute ne fait aucun diagnostic, ne prescrit pas de médicament et s'engage à ne divulguer aucun renseignement confidentiel.</p>
            <h3>Le Reiki pour qui ?</h3>
            <p>Accessible à tous, adulte,  enfants accompagnés, femmes enceintes.</p>
            <h3>Le Reiki pour quoi ?</h3>
            <p>Stress, état dépressif, épuisement, troubles du sommeil, tensions corporelles, angoisses, agressivité, choc émotionnel, apathie, sensation de froid, deuil.</p>
        </div>
        <div class="container">
            <h2>Les bienfaits du soin Reiki</h2>
            <p>Technique ancestrale de soin naturelle originaire du Japon, le soin Reiki réveille votre médecin intérieur pour favoriser l'autoguérison et le renforcement de votre système immunitaire . Il apporte un supplément d'énergie qui réharmonise et revitalise le corps et l'esprit.<br>Le mot Reiki est composé de deux mots japonais.</p>
            <ul>
                <li>Réduit le stress, calme les angoisses et détend profondément.</li>
                <li>Nettoie les énergies négatives (tristesse , colère, peurs).</li>
                <li>Soulage tensions et douleurs, favorise l'élimination des toxines.</li>
                <li>Renforce les facultés de récupération après un traumatisme physique ou psychique.</li>
                <li>Développe la connaissance de soi et accélère tout travail spirituel.</li>
                <li>Contribue à rééquilibrer l'ensemble de nos relations à notre environnement.</li>
                <li>Augmente la confiance, le respect , l'acceptation , l'amour de soi et des autres.</li>
                <li>Optimise l'efficacité d'un traitement médical.</li>
                <li>Améliore la faculté de concentration et de mémoire.</li>
            </ul>
        </div>
        <div class="container">
            <h2>Inspirations</h2>
            <ul>
                <li><blockquote>"Le guérisseur que vous cherchiez est votre propre courage de vous connaître et de vous aimer complètement"</blockquote>Yung Pueblo</li>
                <li><blockquote>"Guérir, c'est toucher avec amour, ce qui a été précédemment touché avec la peur "</blockquote>Stephen Lévine</li>
                <li><blockquote>"Lorsque notre esprit est enfin sur la bonne voie de l'honnêteté et du sérieux, notre corps devient alors sain tout seul"</blockquote>Mikao Usui</li>
                <li><blockquote>"La première étape pour arriver quelque part est de décider que vous ne restez pas où vous êtes."</blockquote>Oscar Nilson</li>
                
            </ul>
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