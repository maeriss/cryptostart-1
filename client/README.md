# Avant de démarrer le projet

## .ENV

Dans le serveur, vous devez ajouter un fichier .env comprenant le secret servant à signer le jwt, sous cette forme:
```
JWT_KEY = votresecret
```

## Login

Le username et le mot de passe autorisés à se login sont codés en dur dans le fichier index.js situé dans le serveur.
Le username doit obligatoirement être sous la forme d'une adresse mail ou l'input ne l'acceptera pas.
Les informations de connexion dans l'état actuel sont :
USERNAME: marie. appolaire @ edu.devinci .fr (sans les espaces)
PASSWORD: 123456

Pour les changer, rendez vous aux lignes 16 et 17 de l'index.js.


# Pour démarrer le projet

```
npm install
```


## serveur

Se rendre dans le serveur avec

```
cd server
```

Puis faire:
```
npm install
npm run dev
```

## client

Dans un autre terminal, se rendre dans le client avec 
```
cd client
```

puis faire:

```
npm install
npm run serve
```

Se rendre à l'adresse donnée par le client pour voir le site


# Navigation

Le site est fait en sorte que seul les personnes connectées peuvent accéder au contenu à l'aide la barre de navigation.
Sans être connecté, la navigation bar ne contient donc que les onglets "home" et "login".
Une fois connecté, tous les onglets existants de la navigation bar apparaîtront alors.
La barre de navigation est reponsive. Si l'écran devient trop petit, elle se positionnera alors sur la gauche, pour la faire apparaître il suffit de cliquer sur le logo situé en haut à gauche, mais il est aussi possible de naviguer entre les différentes en cliquant seulement sur les icônes représentant chaque catégorie.

Le footer est également responsive, les différents éléments doivent s'organiser en bas de page sans gêner les autres éléments.
