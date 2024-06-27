<template>
	<header>
		<h1>Interface Administrateur</h1>
		<nav>
			<ul>
				<li><router-link to="/admin">Gestion des rendez-vous</router-link></li>
				<li><router-link to="/admin/messages">Voir les messages</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

header {
    h1 {
        @include title;
    }
    nav {
        
        ul {
            @include flex-row;
            justify-content: center;
            gap: 20px;
            li {
                list-style: none;
                a {
                    display: block;
                    background-color: $beige;
                    padding: 15px 20px;
                    border-radius: 10px;
                    transition: all .3s ease-in-out;
                }
                a:hover {
                    background-color: $taupe;
                }
            }
        }
    }
}
</style>