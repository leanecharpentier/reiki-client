<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Contactez-moi</h1>
       
        <div class="container">
            <p>Pour commentaires ou questions, n'hésitez pas à me contacter via ce formulaire.</p>
            <p>Pour prendre rendez-vous, je vous invite à passer par ce <span class="link"><router-link to="/rendez-vous">formulaire</router-link></span></p>
            <form @submit.prevent="handleSubmit">
            <div class="input">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Ecris ton nom de famille ici..." @change="checkName" v-model="name" required>
                <p class="error-form" v-if="!isGoodName">Le nom ne peut contenir que des lettres et des tirets.</p>
            </div>
            <div class="input">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" placeholder="Ecris ton prénom ici..." @change="checkFirstName" v-model="firstName" required>
                <p class="error-form" v-if="!isGoodFirstName">Le prénom ne peut contenir que des lettres et des tirets.</p>
            </div>
            <div class="input">
                <label for="email">Adresse mail</label>
                <input type="email" id="email" placeholder="Ecris ton adresse mail ici..."  @change="checkEmail" v-model="email" required>
                <p class="error-form" v-if="!isEmail">L'adresse mail est invalide.</p>
            </div>
            <div class="input">
                <label for="phone">Numéro de téléphone</label>
                <input type="phone" id="phone" placeholder="Ecris ton numéro de téléphone ici..." @change="checkPhoneNumber" v-model="phone" required>
                <p class="error-form" v-if="!isPhoneNumber">Le numéro de téléphone doit contenir exactement 10 chiffres.</p>
            </div>
            <div class="input">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Ecris ton message ici..." v-model="message" required></textarea>
            </div>
            <ul  :class="{ 'error-form-global': errorsForm.length > 0 }">
                <li v-for="error in errorsForm">
                    {{ error }}
                </li>
            </ul>
            <button type="submit">Envoyer</button>
        </form>
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
        width: 60vw;
        margin: auto;
        h2 {
            @include sub-title;
        }
        h3 {
            @include sub-title2;
        }
        .link {
            text-decoration: underline
        }
        form {
            @include flex-col;
            align-items: center;
            gap: 20px;
            margin: 30px 0;
            .input {
                @include flex-col;
                width: 100%;
                gap: 7px;
                input, textarea, select {
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid black;
                }
            }
            .error-form {
                align-self: start;
                color: red;
                font-size: 16px;
            }
            .error-form-global {
                background-color: rgb(255, 181, 181);
                border: 1px solid red;
                width: 100%;
                padding: 10px;
                border-radius: 10px;
                li {
                    list-style-type: none;
                    font-size: 16px
                }
            }
            button {
                background-color: $vert;
                padding: 15px 30px;
                border-radius: 10px;
                width: fit-content;
                border: none;
                transition: all .3s ease-in-out;
            }
            button:hover {
                background-color: $beige;
            }
        }
    }
}
</style>

<script>

export default {
    data() {
        return {
            name: '',
            firstName: '',
            email: '',
            phone: '',
            message: '',
            isEmail: true,
            isPhoneNumber: true,
            isGoodName: true,
            isGoodFirstName: true,
            errorsForm: []
        };
    },

    methods: {
        async handleSubmit() {
            this.validateForm();
            const formData = {
                name: this.name,
                firstName: this.firstName,
                email: this.email,
                phone: this.phone,
                message: this.message
            };
            if (this.errorsForm.length === 0) {
                try {
                    const response = await fetch('http://localhost:3000/messages', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    const data = await response.json();
                    console.log('Success:', data);
                    this.$router.push('/contact/confirmation');
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
        },
        validateForm() {
            this.errorsForm = [];
            if (!this.name) {
                this.errorsForm.push("Le nom est requis.");
            }
            if (!this.isGoodName) {
                this.errorsForm.push("Le nom ne peut contenir que des lettres et des tirets.");
            }
            if (!this.firstName) {
                this.errorsForm.push("Le prénom est requis.");
            }
            if (!this.isGoodFirstName) {
                this.errorsForm.push("Le prénom ne peut contenir que des lettres et des tirets.");
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email || !emailPattern.test(this.email)) {
                this.errorsForm.push("Une adresse mail valide est requise.");
            }
            if (!this.isEmail) {
                this.errorsForm.push("L'adresse mail saisie est invalide.");
            }
            if (!this.phone) {
                this.errorsForm.push("Le numéro de téléphone est requis.");
            }
            if (!this.isPhoneNumber) {
                this.errorsForm.push("Le numéro de téléphone doit contenir exactement 10 chiffres.");
            }
            if (!this.message) {
                this.errorsForm.push("Le message est requis.");
            }
            
        },
        checkEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.email)) {
                this.isEmail = false;
            } else {
                this.isEmail = true;
            }
        },
        checkPhoneNumber() {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(this.phone)) {
                this.isPhoneNumber = false;
            } else {
                this.isPhoneNumber = true;
            }
        },
        checkName() {
            const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
            if (!nameRegex.test(this.name)) {
                this.isGoodName = false;
            } else {
                this.isGoodName = true;
            }
        },
        checkFirstName() {
        const firstNameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+$/;
            if (!firstNameRegex.test(this.firstName)) {
                this.isGoodFirstName = false;
            } else {
                this.isGoodFirstName = true;
            }
        },
    }
};

</script>