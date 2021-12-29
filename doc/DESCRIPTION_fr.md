Node-RED est un outil de programmation pour connecter des appareils, API, et des services en ligne en de nouvelles et intéressantes façons.

Il propose un éditeur accessible dans le navigateur, qui facilite l'ébauche de flux qui connectent ensemble la grande variété de nœuds disponibles dans sa palette. Ces flux sont ensuite activables et déployables en un clic.

### Fonctionnalités

- Edition de flux dans le navigateur
- Déploiement des flux en un clic
- Plus de 225 000 modules disponibles
- Fonctions personnalisées en JavaScript


### Surcharger la configuration par défaut

Depuis le répertoire d'installation, éditer le fichier `data/settings.user.js`. Par exemple

```js
module.exports = (defaultSettings) => ({
    lang: "de", // définit la langue de l'IHM comme allemande
    exportGlobalContextKeys: true, // surcharger la valeur de `exportGlobalContextKeys`

    logging: { // remplacer l'option par défaut pour la journalisation (logging)
        ...defaultSettings.logging, // cela réinjectera les paramètres par défaut dans `logging`
        console: {
            ...defaultSettings.logging.level, // cela réinjectera les paramètres par défaut dans `logging.console`
            level: "debug", // mais isi, nous surchargeons le niveau "info" par "debug"
        },
    },
});
```

Vous pouvez consulter les paramètres par défaut générez par Yunohost dans `data/settings.js` et trouver la documentation pour configurer Node-RED ici: https://nodered.org/docs/user-guide/runtime/configuration
