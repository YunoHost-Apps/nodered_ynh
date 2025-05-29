Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED :

* la permission `main` protège `/admin`, l'éditeur de flux. L'administrateur est sélectionné pendant l'installation ;
* la permisison `ui` protège `/ui`, le tableau de bord permettant de donner une interface graphique aux flux. L'accès public est défini lors de l'installation ;
* la permission `endpoints` protège `/`, pour notamment les points d'entrée de type API. L'accès public est défini lors de l'installation.

Si vous avez mis à jour Node-RED au-delà de la version 2, vérifiez que ces permissions vous conviennent dans votre panneau d'administration de YunoHost.

### Surcharger la configuration par défaut

Depuis le répertoire d'installation, éditer le fichier `__INSTALL_DIR__/data/settings.user.js`. Par exemple

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

Vous pouvez consulter les paramètres par défaut générez par Yunohost dans `__INSTALL_DIR__/data/settings.js` et trouver la documentation pour configurer Node-RED ici: <https://nodered.org/docs/user-guide/runtime/configuration>
