<script setup>
    import AppointmentSingle from '../components/AppointmentSingle.vue';
    import Calendar from '../components/Calendar.vue';
</script>

<script>
    export default {
        data () {
			return {
				appointmentsList: []
			}
        },

        methods: {

        },
    
        mounted() {
            fetch('http://localhost:3000/appointments?status=En attente')
			.then(response => {
				if (!response.ok) {
					return []
				}
				return response.json();
			})
			.then(json => {
				this.appointmentsList = json;
			})
			.catch(error => {
				console.error('Error fetching appointments:', error);
				alert('Une erreur est survenue lors de la récupération des rendez-vous. Veuillez réessayer plus tard.');
			});
        }
    };
</script>

<template>
	<header>
		<h1>Interface Administrateur</h1>
	</header>
	<main>
		<h2>Gérer mes réservations</h2>
		<div class="container">
			<div class="container2 calendar">
				<h3>Calendrier</h3>
				<Calendar />
			</div>
			<div class="container2">
				<h3 v-if="appointmentsList.length > 0">Demandes de rendez-vous en attente</h3>
        		<p v-else>Pas de demandes de rendez-vous en attente</p>
				<ul>
					<li class="appointment" v-for="appointment in appointmentsList">
						<AppointmentSingle 
							:name="appointment.name" 
							:firstName="appointment.firstName" 
							:phone="appointment.phone" 
							:email="appointment.email" 
							:date="appointment.date" 
							:id="appointment._id" 
						/>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

h1 {
		@include title;
}
main {
	width: 90vw;
	margin: auto;
	h2 {
		@include sub-title;
	}
	h3 {
		@include sub-title2;
	}
	.container {
		@include flex-row;
		gap: 50px;
		align-items: start;
		.container2 {
			ul {
				@include flex-col;
				gap: 15px;
				li {
					list-style: none;
				}
			}
		}
		.calendar {
			width: 80%;
		}
	}
}
</style>