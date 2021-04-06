<template>
    <div class="loginForm">
        <h2 class="loginHeading">Register</h2>
        <p>Veuillez entrer vos informations</p>
        <form @submit.prevent="register">
            <div id="labels" class="column">
                <label for="firstname">Votre prénom</label>
                <label for="lastname">Votre nom de famille</label>
                <label for="email">Votre email</label>
                <label for="username">Votre username</label>
                <label for="password">Mot de passe</label>
            </div>
            <div class="column">
                <input placeholder="firstname" type="text" v-model="firstname" id="firstname">
                <input placeholder="lastname" type="text" v-model="lastname" id="lastname">
                <input placeholder="email" type="email" v-model="email" id="email">
                <input placeholder="username" type="text" v-model="username" id="username">
                <input placeholder="password" type="password" v-model="password" id="password">
            </div>
            <div class="submitButton">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Register',

    data () {
        return {
            lastname: undefined,
            firstname: undefined,
            email: undefined,
            username: undefined,
            password: undefined
        }
    },
    methods: {
        register () {
      const firstname = this.firstname
      const lastname = this.lastname
      const email = this.email
      const username = this.username
      const password = this.password
      this.$store.dispatch('register', { firstname, lastname, email, username, password })
      this.$router.push('/login')
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
