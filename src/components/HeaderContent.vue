<template>
	<header>
		<img src="../assets/images/logo.webp" alt="">
		<nav>
			<ul>
				<li><router-link to="/">Accueil</router-link></li>
				<li><router-link to="/seances">Séances</router-link></li>
				<li><router-link to="/a-propos">A propos</router-link></li>
				<li><router-link to="/contact">Contact</router-link></li>
				<li class="btn-rdv"><router-link to="/rendez-vous">Prendre rendez-vous</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";
header {
	width: 80vw;
	margin: 20px auto;
	@include flex-row;
	justify-content: space-between;
	img {
		height: 100px;
		width: auto;
	}
	nav {
		ul {
			@include flex-row;
			gap: 25px;
			li {
				list-style: none;
				display: flex;
			}
			.btn-rdv {
				text-align: center;
				background-color: $vert;
				padding: 10px 20px;
				border-radius: 50px;
				color: white;
				transition: .3s all ease-in-out;
			}
			.btn-rdv:hover {
				background-color: $beige;
				color: black;
			}
		}
	}
}
</style>
