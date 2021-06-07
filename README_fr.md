# Node-RED pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/nodered.svg)](https://dash.yunohost.org/appci/app/nodered) ![](https://ci-apps.yunohost.org/ci/badges/nodered.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/nodered.maintain.svg)  
[![Installer Node-RED avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Node-RED rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Programmation par flux de données pour l'Internet des objets

**Version incluse :** 1.3.5~ynh2



## Captures d'écran

![](./doc/screenshots/screenshot.jpg)

## Avertissements / informations importantes

Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED. Par défaut, seul l'administrateur sélectionné lors de l'installation y a accès.
* La permission `main` protège
  * `/chemin`, pour accéder au tableau de bord ;
  * toutes les routes `/path/<node>` définis par les *nodes* HTTP (à l'exception de `/chemin/admin`).
* L'utilisateur choisi comme admin à l'installation aura la permission `admin` et aura accès à l'éditeur à l'adresse `/chemin/admin`

## Documentations et ressources

* Site officiel de l'app : https://nodered.org
* Documentation officielle utilisateur : https://nodered.org/docs/
* Dépôt de code officiel de l'app : https://github.com/node-red/node-red
* Documentation YunoHost pour cette app : https://yunohost.org/app_nodered
* Signaler un bug : https://github.com/YunoHost-Apps/nodered_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
ou
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps