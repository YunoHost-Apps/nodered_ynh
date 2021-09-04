# Node-RED pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/nodered.svg)](https://dash.yunohost.org/appci/app/nodered) ![](https://ci-apps.yunohost.org/ci/badges/nodered.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/nodered.maintain.svg)  
[![Installer Node-RED avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Node-RED rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Programmation par flux de données pour l'Internet des objets

**Version incluse :** 2.0.6~ynh1



## Captures d'écran

![](./doc/screenshots/screenshot.jpg)

## Avertissements / informations importantes

Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED :
* la permission `main` protège `./`, chemin d'accès au tableau de bord et les *nodes* HTTP.
Par défault, elle est accessible aux visiteurs, puisqu'elle est utilisée comme un point d'entrée de type API ;
* la permission `admin` protège `./admin`. L'administrateur sélectionné à l'installation y aura accès.

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