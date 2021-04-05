<template>
  <div id="app">
    <ResponsiveNavigation
        :nav-links="navLinks"
        :image-path="require('./assets/ourlogo.png')"
        background="#2c3e50"
        hoverBackground='#3d5670'
    />
    <div id="container">
        <head>
            <link href='https://fonts.googleapis.com/css?family=Bungee Inline' rel='stylesheet'>
        </head>
        <router-view/>
        <footer>
            <div class="content">
                <div class="block footer-text">
                    <h3>Menu</h3>
                    <ul class="liste-services">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/currencies">Cryptomonnaies</router-link></li>
                        <li><router-link to="/blockchain">Blockchain</router-link></li>
                    </ul>
                </div>
                <div class="block footer-contact">
                    <h3>Contactez-nous</h3>
                    <p><a href = "mailto: jeabby.boca@edu.devinci.fr">jeabby.boca@edu.devinci.fr</a></p>
                    <p><a href = "mailto: marie.appolaire@edu.devinci.fr">marie.appolaire@edu.devinci.fr</a></p>
                    <p>ESILV - La Défense PARIS</p>
                </div>
                <div class="block footer-reseaux">
                    <h3>Nos réseaux</h3>
                    <ul class="liste-reseaux">
                        <li><a href="http://www.facebook.com"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="http://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
import ResponsiveNavigation from '@/components/ResponsiveNavigation'
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'App',
    computed: {
    ...mapState({
      user: state => state.user.userdata
    }),
    ...mapGetters(['isLoggedIn'])
  },
    components: {
        ResponsiveNavigation
    },
    data: () => ({
        navLinks: [
            {
                text: 'Home',
                path: '/',
                icon: 'ion-ios-home'
            },
            {
                text: 'Cryptomonnaies',
                path: '/currencies',
                icon: 'ion-ios-cash'
            },
            {
                text: 'Blockchain',
                path: '/blockchain',
                icon: 'ion-ios-link'
            },
            {
                text: 'About',
                path: '/about',
                icon: 'ion-ios-people'
            },
            {
                text: 'Login',
                path: '/login',
                icon: 'ion-ios-log-in'
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
@import url('https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css');

figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 10px;
    margin-inline-end: 0;
}

body {
    margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #fff;
        }
    }
}

#container {
    position: relative;
    min-height: 100%;
}

footer {
    position: relative;
    flex-shrink: 0;
    border-top: 1px dashed #2c3e50;
    width: 100%;
    height: 250px;
    background: #2c3e50;
    color: #fff;

    .content {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 15px;
        padding: 20px 0 20px;
    }

    .block {
        width: 240px;
        margin: 0 30px;
    }

    .footer-text h3,
    .footer-contact h3,
    .footer-reseaux h3 {
        font-size: 20px;;
    }

    .footer-text h3 {
        margin-left: 30px;
    }

    .footer-contact p {
        padding: 0;
        align-items: center;
        a {
            color: #fff;
            text-decoration: none;
        }
    }

    .liste-services,
    .liste-reseaux {
        list-style-type: none;
    }
    .liste-services li {
        padding: 5px 0;
    }
    .liste-services a {
        text-decoration: none;
        color: #fff
    }
    .list-services a:hover {
        color: rgb(2,1,2);
    }

    .liste-reseaux a {
        font-size: 25px;
        padding: 5px 0;
        color: #fff;
        align-items: center;
    }
}

@media screen and (max-width: 759px) {
    footer {
        position: relative;
    }

    .content {
        width: 300px;
        flex-wrap: wrap;
        background: #2c3e50;
    }
    .block {
        width: 280px;
        margin: 30px 30px;
    }
    .block:nth-child(1) {
        margin-top: 0;
        margin-bottom: 30px;
    }
    .block:nth-child(2) {
        margin-bottom: 30px;
    }
}
</style>
