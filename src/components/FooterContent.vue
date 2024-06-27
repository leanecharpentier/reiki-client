<script>
    import { callSharp, homeSharp, mailSharp } from 'ionicons/icons';

    export default {
        data() {
            return {
                homeSharp: homeSharp,
                mailSharp: mailSharp,
                callSharp: callSharp
            };
        }
    };
</script>

<template>
    <footer>
		<img src="../assets/images/logo.webp" alt="">
            <ul>
                <li>
                    <ion-icon :icon="homeSharp"></ion-icon>
                    <a href="">33, rue Edouard Manet 49000 Angers</a>
                </li>
                <li>
                    <ion-icon :icon="mailSharp"></ion-icon>
                    <a href="">stephaniedalia.tordjman@gmail.com</a>
                </li>
                <li>
                    <ion-icon :icon="callSharp"></ion-icon>
                    <a href="">06 42 23 86 09</a>
                </li>
            </ul>
        <ul>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
            <li>Conditions d'utilisation</li>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

footer {
    margin-top: 50px;
    width: 100%;
    padding: 30px 0;
    background-color: black;
    img {
        height: 150px;
        width: auto;
    }
    ul {
        @include flex-col;
        gap: 20px;
        li {
            list-style: none;
            @include flex-row;
            gap: 10px;
            color: white;
            a {
                color: white;
            }
        }
    }
}
</style>
