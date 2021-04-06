<template>
    <div class="container">
        <h2>BITCOIN</h2>
        <img src="../assets/btc.jpg" alt="image btc">
        <h1>Histoire du Bitcoin</h1>
        <ul class="histoire">
            <li class="blocktext">Signe boursier : BTC (ou XBT)</li>
            <li class="blocktext">Création en 2008 (publication du white paper) par un certain Satoshi Nakamoto. À ce jour, la véritable identité de celui-ci est toujours inconnue</li>
            <li class="blocktext">C'est la cryptomonnaie la plus utilisée à l'heure actuelle</li>
            <li class="blocktext">Janvier 2009 : Création du premier bloc, le "bloc genesis"</li>
            <li class="blocktext">2012 : WordPress accepte les bitcoins pour ses services payants. Par la suite, de plus en plus de plateformes vont accepter ou mettre en place des systèmes permettant le paiement en bitcoin</li>
            <li class="blocktext">L’explosion des cours et l’engouement autour des cryptoactifs a fait monter le prix d’un bitcoin jusqu’à 20000$.</li>
            <li class="blocktext">2019 : Bitcoin atteint des sommets en terme de puissance de calcul dédié à sa sécurité</li>
        </ul>
        <h1>Fonctionnement du Bitcoin</h1>
        <p class="blocktext">La caractéristique principale du Bitcoin est son nombre limité d'unités, fixés à 20 999 999,977. Chaque utilisateur possède un porte-monnaie (ou "wallet"), sur son ordinateur ou son portable.
          Ce wallet crée alors une adresse Bitcoin propre à l'utilisateur.
        </p>
        <ul class="fonctionnement">
                <p class="blocktext">Les chaines de blocs (ou blockchains) : c'est un journal de transactions partagé et public sur lequel repose le réseau Bitcoin. Toutes les transactions confirmées sont
                  incluses dans la chaîne de blocs sans exception. </p>
                <p class="blocktext">Les transactions : c'est un transfert de valeur entre des adresses Bitcoin qui est, par la suite, incluse dans la blockchain. Ces transactions se font grâce à un procédé
                  de cryptographe asymétrique, reposant sur des clés publiques et privées possédées de manière unique par chaque utilisateur.
                </p>
                <p class="blocktext">Le minage : c'est un système de consensus distribué, utilisé pour confirmer les transactions en attente d'être incluse dans la blockchain. La vérification d'un bloc de transactions nécessite
                  une certaine puissance de calcul. Les mineurs sont donc récompensés en bitcoin pour avoir utilisé leur puissance de calcul au profit de la blockchain.
                </p>
        </ul>
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
  }

h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 50px;
    margin-top: 30px;
}

img {
  width: 500px;
  height: 300px;
}

h1 {
    text-decoration: underline;
    margin-top: 50px;
}

.conclusion {
    display: inline-flex;
    height: 100%;
    flex-direction: row;
    margin-top: 10px;
    margin: auto;
}

#conclusion {
    margin: 0;
    padding-left: 10px;
    p {
        width: 20em;
    }
}

.fonctionnement li {
    text-decoration: underline;
}

.blocktext {
    margin-left: auto;
    margin-right: auto;
    width: 40em;
    text-align: justify;
}

@media screen and (max-width: 759px) {
  .blocktext {
    width: 100%
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

</style>
