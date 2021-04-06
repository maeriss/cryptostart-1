<template>
    <div class="container">
        <h2>MONERO</h2>
        <img src="../assets/monero.png" alt="image monero">
        <h1>Histoire du Monero</h1>
        <ul class="histoire">
            <li class="blocktext">Signe boursier : XMR</li>
            <li class="blocktext">Création en 2014</li>
            <li class="blocktext">Idéal pour préserver sa vie privée et rester en dehors du contrôle des Etats. Populaire sur le dark web (2eme cryptomonnaie la plus utilisée après bitcoin)</li>
            <li class="blocktext">2013 : apparition de CryptoNote, protocolevisant une impossibilité de traçabilité</li>
            <li class="blocktext">Bytecoin (BCN) : 1ere crypto à implémenter CryptoNote. Lancé en 2012, annoncé en 2014, a peu de crédibilité car il a été montré que 82% des BCN avaient déjà été minés.</li>
            <li class="blocktext">Par la  suite : création  du  Bitmonero(BMR),  en  copiant  le  code  source  de  Bytecoin.  Mais  le créateur procédait à des changements sans consulter personne. Un ensemble d’enthousiastes du Bitmonero décident alors de forker le projet et de le renommer Monero</li>
            <li class="blocktext">Equipe de développement concentrée autour de 6 personnes</li>
            <div class="conclusion">
                &#x2794;
                <p id="conclusion">Le Monero est donc issu d’un fork communautaire sans meneur unique</p>
            </div>
        </ul>
        <h1>Fonctionnement du Monero</h1>
        <p class="blocktext">La caractéristique principale du Monero est l'anonymat des transactions. Pour ce faire, Monero utilise un ensemble de technologies, dont 3 principales : </p>
        <ul class="fonctionnement">
            <li>Les signatures de cercles</li>
                <p class="blocktext">L'objectif est d'assurer l’anonymat de celui qui envoie les fonds. Il y a derrière un procédé  cryptographique  permettant  à  une  personne  de  signer
                    électroniquement  de  façon anonyme un message au nom d’un cercle. Tous les membres du cercle possèdent une clé publique. Actuellement, les cercles sont de 11 personnes</p>
                <p class="blocktext">Il faut réunir des signatures numériques partielles de divers utilisateurs afin de former une signature unique utilisée pour la transaction. Ce  groupe  de signatures est
                    constitué  de  sorties  aléatoires  tirées de  la  blockchain  jouant  les «leurres» ou «decoys». La personne à l’origine de la transaction va ensuite signer ces
                    sorties avec sa clé de dépense privée, puis l’envoyer à la blockchain</p>
                <p class="blocktext">Mais alors comment  empêcher  les «doubles  dépenses» ? (i.e  la  dépense d’une mêmepièce  sur plus d’une transaction en même temps). Dans Monero, chaque
                    transaction a sa propre image clé. Celle-ci étant unique, les mineurs ont simplement à les vérifier pour savoir si une pièce Monero est dépensée en double</p>
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
