# openfisca.tn
<p align='center'>مرحبا بكم</p>

Ceci est le dépôt du site web de la communauté tunisienne d'OpenFisca.  
Il est réalisé avec [Next.js](https://github.com/zeit/next.js/) et les étapes suivantes emploient [npm](https://www.npmjs.com) pour la gestion de paquets JavaScript.

## Installer

Dans le répertoire `openfisca.tn`, exécuter :

```sh
npm install
```

Ceci installe les dépendances indiquées par le fichier `package.json` dans un répertoire `node_modules`.

## Exécuter en local

En mode de développement, le site peut être visualisé en exécutant :

```sh
npm run dev
```

Il peut alors être consulté dans un navigateur à l'adresse `http://localhost:3000`.

## Servir à distance

En mode de production, le site est à construire puis à exécuter grâce à :

```sh
npm run build
npm start
```

Le site sera alors servi sur `http://localhost:3000`.
