<template>
  <div class="about">
    <div class="container">
      <h1>About us</h1>
      <p class="blocktext">Ce site vous est proposé par Jeabby BOCA et Marie APPOLAIRE, élèves à l'ESILV en majeur FINTECH</p>
      <div class="contact">
        <h2>Nous contacter</h2>
        <a href = "mailto: jeabby.boca@edu.devinci.fr">jeabby.boca@edu.devinci.fr</a>
        <a href = "mailto: marie.appolaire@edu.devinci.fr">marie.appolaire@edu.devinci.fr</a>
      </div>
      <div class="reseaux">
        <h2>Nos réseaux</h2>
        <ul class="liste-reseaux">
          <li><a href="http://www.facebook.com"><i class="fab fa-facebook"></i></a></li>
          <li><a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
          <li><a href="http://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

.container {
  margin: 16px 16px 30px 70px;
  flex: 1 0 auto;
  text-justify: inter-word;
}

h1 {
  margin: 35px;
}

p.blocktext {
    margin-left: auto;
    margin-right: auto;
    width: 40em;
    text-justify: auto;
}

.contact {
  display: inline-flex;
    height: 100%;
    flex-direction: column;
}

h2 {
  margin-bottom: 20px;
  margin-top: 30px;
}

.contact a{
  text-decoration: none;
  color: #2c3e50;
  margin: 5px;
}

.reseaux a {
  color: #2c3e50
}

@media screen and (max-width: 759px) {
  p.blocktext {
    width: 100%
  }
}

</style>