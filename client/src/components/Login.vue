<template>
    <div class="loginForm">
        <h2 class="loginHeading">Login</h2>
        <p>Veuillez rentrer votre e-mail et votre mot de passe pour vous connecter</p>
        <form @submit.prevent="tryToLogin">
            <div id="labels" class="column">
                <label for="email">Votre E-mail</label>
                <label for="password">Mot de passe</label>
            </div>
            <div class="column">
                <input placeholder="email" type="email" v-model="username" id="login">
                <input placeholder="password" type="password" v-model="password" id="password">
            </div>
            <div class="submitButton">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data () {
        return {
            username: undefined,
            password: undefined
        }
    },
    methods: {
        tryToLogin () {
      const username = this.username
      const password = this.password
      this.$store.dispatch('login', { username, password })
      // this.$router.push('/')
      }
    }
}
</script>

<style lang="scss" scoped>

h2 {
    margin-top: 40px;
}

p {
    margin-bottom: 30px;
}

.loginForm {
  padding-bottom: 250px;
}

.column {
    display: inline-flex;
    height: 100%;
    flex-direction: column;
}

#labels {
    margin-right: 20px;
}

label, input {
    margin-bottom: 5px;
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

</style>
