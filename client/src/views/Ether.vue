<template>
    <div class="container">
        <h2>ETHER</h2>
        <img src="../assets/eth.jpg" alt="image eth">
        <h1>Histoire de l'Ether</h1>
        <ul class="histoire">
            <li class="blocktext">Signe boursier : ETH</li>
            <li class="blocktext">Création en 2015 par Vitalik Buterin</li>
            <li class="blocktext">73 millions d'Ethers avaient été pre-minés avant la création du réseau blockchain Ethereum</li>
            <li class="blocktext">Contrairement au Bitcoin, Ethereum a pour but de créer une plateforme blockchain programmable permettant notamment la création d’applications décentralisées puissantes grâce à l'arrivée des smart contracts</li>
            <li class="blocktext">2016 : arrivée de DAO, Decentralised Autonomous Organization, qui a été l'une des premières expérimentations sur Ethereum. Mais le 17 juin, une faille dans le code gérant la sortie des fonds en ether de The DAO
              a permis à un hacker de s'approprier 3 millions d‘ETH. Le 20 juillet, un hard fork a alors été lancé (Ethereum Classic), ce qui a permis à Ethereum de continuer à exister. Ce hard fork a cependant grandement divisé la communauté,
              entre ceux ne voulant pas modifier la blockchain, et d’autres qui ont préféré corriger le protocole et effectuer une duplication de la blockchain</li>
            <li class="blocktext">2017 : Ethereum fait parti des grands gagnants du boom des cryptomonnaies, notamment grâce au succès des ICO</li>
            <li class="blocktext">2018-2019 : Ethereum connait une rechute, et passera même plusieurs fois en dessous des 100$ au cours de ces deux années</li>
        </ul>
        <h1>Fonctionnement d'Ethereum</h1>
        <p class="blocktext">La caractéristique principale du Monero est l'anonymat des transactions. Pour ce faire, Monero utilise un ensemble de technologies, dont 3 principales : </p>
        <ul class="fonctionnement">
                <p class="blocktext">Comme pour les autres crypto-monnaies, l'ether utilise une blockchain qui enregistre toutes les transactions réalisées avec l'ether. On retrouve comme dans Bitcoin le principe de minage.</p>
                <p class="blocktext">La blockchain de l'ethereum est programmée dans un langage qui permet aux développeurs d'écrire des smart contracts avec lesquels les transactions de la blockchain peuvent gérer et automatiser des résultats spécifiques.
                  Par exemple, un utilisateur d'ethereum peut créer un contrat intelligent afin d'envoyer un certain montant d'ether à un ami, à une certaine date. Ils déploient ce code dans la blockchain et, dès que le contrat est rempli, c'est-à-dire
                  à la date définie, les ethers sont automatiquement envoyés à l'autre partie.
                </p>
                <p class="blocktext">Les smart contracts offrent un certain nombre d'avantages, le principal étant qu'ils éliminent les intermédiaires, minimisant ainsi les coûts et donne à l'utilisateur le contrôle complet; </p>
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
