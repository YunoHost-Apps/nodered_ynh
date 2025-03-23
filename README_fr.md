<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Node-RED pour YunoHost

[![Niveau d’intégration](https://apps.yunohost.org/badge/integration/nodered)](https://ci-apps.yunohost.org/ci/apps/nodered/)
![Statut du fonctionnement](https://apps.yunohost.org/badge/state/nodered)
![Statut de maintenance](https://apps.yunohost.org/badge/maintained/nodered)

[![Installer Node-RED avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Node-RED rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

Node-RED est un outil de programmation pour connecter des appareils, API, et des services en ligne en de nouvelles et intéressantes façons.

Il propose un éditeur accessible dans le navigateur, qui facilite l'ébauche de flux qui connectent ensemble la grande variété de nœuds disponibles dans sa palette. Ces flux sont ensuite activables et déployables en un clic.

### Fonctionnalités

- Edition de flux dans le navigateur
- Déploiement des flux en un clic
- Plus de 225 000 modules disponibles
- Fonctions personnalisées en JavaScript

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


**Version incluse :** 4.0.9~ynh2

## Captures d’écran

![Capture d’écran de Node-RED](./doc/screenshots/screenshot.jpg)

## Documentations et ressources

- Site officiel de l’app : <https://nodered.org>
- Documentation officielle utilisateur : <https://nodered.org/docs/>
- Dépôt de code officiel de l’app : <https://github.com/node-red/node-red>
- YunoHost Store : <https://apps.yunohost.org/app/nodered>
- Signaler un bug : <https://github.com/YunoHost-Apps/nodered_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
ou
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
