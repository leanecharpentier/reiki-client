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
                <input type="text" name="firstName" id="firstName" placeholder="Ecris ton prénom ici..." v-model="firstName" required>
            </div>
            <div class="input">
                <label for="email">Adresse mail</label>
                <input type="email" name="email" id="email" placeholder="Ecris ton adresse mail ici..." v-model="email" required>
            </div>
            <div class="input">
                <label for="phone">Numéro de téléphone</label>
                <input type="phone" name="phone" id="phone" placeholder="Ecris ton numéro de téléphone ici..." v-model="phone" required>
            </div>
            <div class="input">
                <label for="date">Jour du rendez-vous</label>
                <input type="date" name="date" id="date" v-model="date" required>
            </div>
            <div class="input">
                <label for="time">Heure du rendez-vous</label>
                <input type="time" name="time" id="time" v-model="time" required>
            </div>
            <div class="input">
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Ecris ton message ici..." v-model="message"></textarea>
            </div>
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
            input, textarea {
                padding: 10px;
                border-radius: 10px;
                border: 1px solid black;
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
            message: ''
        };
    },

    methods: {
        async handleSubmit() {
            let newDate = this.date + "T" + this.time + ":00.000+00:00"
            const formData = {
                name: this.name,
                firstName: this.firstName,
                email: this.email,
                phone: this.phone,
                date: newDate,
                message: this.message
            };
            console.log(JSON.stringify(formData));

            try {
                const response = await fetch('http://localhost:3000/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Success:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
};

</script>