<template>
  <div class="home">
    <div  v-if="isLoggedIn" class="container">
      <h2>Bienvenue sur Crypto Start !</h2>
      <p>Ici, vous pouvez découvrir le monde de la blockchain et des cryptomonnaies.</p>
      <p class="blocktext">Vous pouvez découvrir différentes cryptomonnaies dans l'onglet dédié "cryptommonaies", afin de connaître leurs caractéristiques, mais aussi en apprendre plus sur la blockchain en général!</p>
    </div>
    <div v-if="!isLoggedIn" class="container">
      <h1>Vous devez être connecté(e) pour accéder au contenu du site</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapState({
      token: 'token'
    })
  }
}
</script>

<style lang="scss">

.home {
  padding-bottom: 250px;
}

.container {
  margin: 16px 16px 30px 70px;
  flex: 1 0 auto;
  text-justify: inter-word;
}

h2 {
  margin-bottom: 45px;
}

h1 {
  margin-top: 130px;
}

p.blocktext {
    margin-left: auto;
    margin-right: auto;
    width: 40em;
    text-justify: auto;
}

@media screen and (max-width: 759px) {
  p.blocktext {
    width: 100%
  }
}

</style>
