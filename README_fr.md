# Node-RED pour YunoHost

[![Integration level](https://dash.yunohost.org/integration/nodered.svg)](https://dash.yunohost.org/appci/app/nodered) ![](https://ci-apps.yunohost.org/ci/badges/nodered.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/nodered.maintain.svg)  
[![Install Node-RED with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=nodered)

*[Read this readme in english.](./README.md)*

> *Ce package vous permet d'installer Node-RED rapidement et simplement sur un serveur YunHost.  
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble
Programmation par flux de données pour l'Internet des objets.

**Version incluse:** 1.1.3

## Captures d'écran

![](https://camo.githubusercontent.com/01ed64b01d73046a485ea82b645a3be529c64809/687474703a2f2f6e6f64657265642e6f72672f696d616765732f6e6f64652d7265642d73637265656e73686f742e706e67)

## Démo

* [Vidéo officielle](https://youtu.be/vYreeoCoQPI)

## Configuration

Lancer ou arrêter son service via le panneau d'administration ou via SSH.
La configuration, et l'installation de plugins tels que pour [Home-Assistant](https://github.com/YunoHost-Apps/homeassistant_ynh) se font dans l'interface web.

## Documentation

 * [Documentation officielle](https://nodered.org/docs/)

## Caractéristiques spécifiques YunoHost

#### Application privée

Puisque les automatisations gérées par Node-Red peuvent être sensibles, l'application est systématiquement installée en mode privé. 

#### Support multi-utilisateurs

* L'authentification LDAP et HTTP est-elle prise en charge ? **Non**
* L'application peut-elle être utilisée par plusieurs utilisateurs ? **Non**

#### Supported architectures

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/nodered%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/nodered/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/nodered%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/nodered/)

## Liens

 * Signaler un bug : https://github.com/YunoHost-Apps/nodered_ynh/issues
 * Site de l'application : https://nodered.org/
 * Dépôt de l'application principale : https://github.com/node-red/node-red
 * Site web YunoHost : https://yunohost.org/

---

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
ou
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```
