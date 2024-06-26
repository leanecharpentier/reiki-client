<script setup>
    defineProps({
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    })

</script>

<script>
    export default {
        data () {
			return {
				appointmentsList: []
			}
        },

        methods: {
            updateAppointmentStatus(status) {
                console.log(this.id);
                fetch(`http://localhost:3000/appointments/status/${this.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ status: status })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        },
    
        mounted() {
            fetch('http://localhost:3000/appointments?status=En attente')
                .then(response => response.json())
                .then(json => this.appointmentsList = json);
        }
    };

</script>

<template>
    <p>{{ name }} {{ firstName }}</p>
    <p>{{ phone }}</p>
    <a href="mail:to">{{ email }}</a>
    <p>Souhaite prendre rendez-vous le : {{ date }}</p>
    <p>A : {{ date }}</p>
    <div class="div-button">
        <button class="yes" @click="updateAppointmentStatus('Accepté')">Accepter</button>
        <button class="no" @click="updateAppointmentStatus('Refusé')">Refuser</button>
        <button class="contact">Contacter</button>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.div-button {
    @include flex-row;
    gap: 10px;
    padding: 20px 0;
    button {
        background-color: grey;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        transition: all .2s ease-in-out;
    }
    .yes {
        background-color: rgb(89, 180, 89)
    }
    .yes:hover {
        background-color: rgb(164, 220, 164)
    }
    .no {
        background-color: rgb(223, 78, 78)
    }
    .no:hover {
        background-color: rgb(216, 152, 152)
    }
    .contact {
        background-color: rgb(232, 171, 66);
    }
}
</style>
