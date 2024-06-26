<script setup>
    import HeaderContent from '../components/HeaderContent.vue';
    import FooterContent from '../components/FooterContent.vue';
</script>

<template>
    <HeaderContent />
    <main>
        <h1>Prendre rendez-vous</h1>
        <form @submit.prevent="handleSubmit">
            <div class="input">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Ecris ton nom de famille ici..." v-model="name" required>
            </div>
            <div class="input">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" placeholder="Ecris ton prénom ici..." v-model="firstName" required>
            </div>
            <div class="input">
                <label for="email">Adresse mail</label>
                <input type="email" id="email" placeholder="Ecris ton adresse mail ici..."  @change="checkEmail" v-model="email" required>
                <p class="error-form" v-if="isEmail">L'adresse mail est incorrecte.</p>
            </div>
            <div class="input">
                <label for="phone">Numéro de téléphone</label>
                <input type="phone" id="phone" placeholder="Ecris ton numéro de téléphone ici..." v-model="phone" required>
            </div>
            <div class="input">
                <label for="date">Jour du rendez-vous</label>
                <input type="date" id="date" v-model="date" @change="checkIfSunday(); checkIfSaturday()" required>
                <p class="error-form" v-if="isSunday">Vous ne pouvez pas prendre rendez-vous le dimanche.</p>
            </div>
            <div class="input">
                <label for="time">Heure du rendez-vous</label>
                <select id="time" v-model="time" required>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option v-if="!isSaturday" value="14:00">14:00</option>
                    <option v-if="!isSaturday" value="15:00">15:00</option>
                    <option v-if="!isSaturday" value="16:00">16:00</option>
                    <option v-if="!isSaturday" value="17:00">17:00</option>
                </select>
            </div>
            <div class="input">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Ecris ton message ici..." v-model="message"></textarea>
            </div>
            <ul  :class="{ 'error-form-global': errorsForm.length > 0 }">
                <li v-for="error in errorsForm">
                    {{ error }}
                </li>
            </ul>
            <button type="submit">Confirmer la prise de rendez-vous</button>
        </form>
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
    form {
        width: 60vw;
        margin: auto;
        @include flex-col;
        align-items: center;
        gap: 20px;
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
            background-color: $jaune-clair;
            border: 2px solid $jaune-clair;
            padding: 10px 20px;
            border-radius: 10px;
            width: fit-content;
            transition: all .3s ease-in-out;
        }
        button:hover {
            background-color: $jaune-fonce;
            border: 2px solid $jaune-fonce;
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
            date: '',
            time: '',
            message: '',
            isSunday: false,
            isSaturday: false,
            isEmail: false,
            errorsForm: []
        };
    },

    methods: {
        validateForm() {
            this.errorsForm = [];
            if (!this.name) {
                this.errorsForm.push("Le nom est requis.");
            }
            if (!this.firstName) {
                this.errorsForm.push("Le prénom est requis.");
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email || !emailPattern.test(this.email)) {
                this.errorsForm.push("Une adresse mail valide est requise.");
            }
            if (!this.phone) {
                this.errorsForm.push("Le numéro de téléphone est requis.");
            }
            if (!this.date) {
                this.errorsForm.push("La date du rendez-vous est requis.");
            } else if (this.isSunday) {
                this.errorsForm.push("Vous ne pouvez pas prendre rendez-vous le dimanche");
            }
            if (!this.time) {
                this.errorsForm.push("L'heure du rendez-vous est requise.");
            }
        },
        async handleSubmit() {
            this.validateForm();
            let newDate = this.date + "T" + this.time + ":00.000+00:00"
            const formData = {
                name: this.name,
                firstName: this.firstName,
                email: this.email,
                phone: this.phone,
                date: newDate,
                message: this.message
            };
            if (this.errorsForm.length === 0) {
                try {
                    const response = await fetch('http://localhost:3000/appointments', {
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
                    this.$router.push('/confirmation');
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
        },
        checkIfSunday() {
            const selectedDate = new Date(this.date);
            if (selectedDate.getDay() === 0) {
                this.isSunday = true;
            } else {
                this.isSunday = false;
            }
        },
        checkIfSaturday() {
            const selectedDate = new Date(this.date);
            if (selectedDate.getDay() === 6) {
                this.isSaturday = true;
            } else {
                this.isSaturday = false;
            }
        },
        checkEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(this.email)) {
                this.isEmail = false;
            } else {
                this.isEmail = true;
            }
        }
    }
};

</script>