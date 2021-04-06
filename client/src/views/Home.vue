<template>
  <div class="home">
    <div  v-if="isLoggedIn" class="container">
      <h2>Bienvenue sur Crypto Start !</h2>
      <p>Ici, vous pouvez découvrir le monde de la blockchain et des cryptomonnaies.</p>
      <p class="blocktext">Vous pouvez découvrir différentes cryptomonnaies dans l'onglet dédié "cryptommonaies", afin de connaître leurs caractéristiques, mais aussi en apprendre plus sur la blockchain en général!</p>
    </div>
    <div v-if="!isLoggedIn" class="container">
      <h1>Vous devez être connecté(e) pour accéder au contenu du site</h1>
      <div class="submitButton">
                <button @click="$router.push('/register')">Register</button>
            </div>
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

<style lang="scss" scoped>

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
.submitButton {
    margin-top: 10px;
}

button {
      display: inline-block;
      background-color: #46637f;
      border-radius: 10px;
      border: 4px double #cccccc;
      color: #eeeeee;
      text-align: center;
      font-size: 20px;
      padding: 12px;
      width: 170px;
      transition: all 0.5s;
      cursor: pointer;
      margin: 5px;
      z-index: 0;
      }
      button:hover {
      background-color: #95b1cd;
      }

@media screen and (max-width: 759px) {
  p.blocktext {
    width: 100%
  }
}

</style>
