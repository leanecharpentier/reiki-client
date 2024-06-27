<script setup>
    import Message from '../components/Message.vue';
    import HeaderAdmin from '../components/HeaderAdmin.vue';
</script>

<script>
    export default {
        data () {
			return {
				messagesList: []
			}
        },

        methods: {

        },
    
        mounted() {
            fetch('http://localhost:3000/messages')
			.then(response => {
				if (!response.ok) {
					return []
				}
				return response.json();
			})
			.then(json => {
				this.messagesList = json;
			})
			.catch(error => {
				console.error('Error fetching message:', error);
				alert('Une erreur est survenue lors de la récupération des messages. Veuillez réessayer plus tard.');
			});
        }
    };
</script>

<template>
    <HeaderAdmin />
	<main>
		<h2>Liste des messages</h2>
		<ul>
            <li :class="{ 'isRead': message.isRead }" v-for="message in messagesList">
                <Message 
                    :name="message.name" 
                    :firstName="message.firstName" 
                    :phone="message.phone" 
                    :email="message.email" 
                    :message="message.message" 
                    :sendAt="message.createdAt" 
                    :id="message._id" 
                />
            </li>
        </ul>
	</main>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

main {
	width: 90vw;
	margin: auto;
	h2 {
		@include sub-title;
	}
	ul {
        @include flex-col;
        gap: 20px;
        li {
            background-color: $beige;
            list-style: none;
            border: 1px solid black;
            padding: 20px;
        }
        .isRead {
            background-color: white;
        }
    }
}
</style>