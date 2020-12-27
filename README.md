# Node-RED for YunoHost

[![Integration level](https://dash.yunohost.org/integration/nodered.svg)](https://dash.yunohost.org/appci/app/nodered) ![](https://ci-apps.yunohost.org/ci/badges/nodered.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/nodered.maintain.svg)  
[![Install nodered with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allow you to install Node-RED quickly and simply on a YunoHost server.  
If you don't have YunoHost, please see [here](https://yunohost.org/#/install) to know how to install and enjoy it.*

## Overview
Flow-based programming for the Internet of Things.

**Shipped version:** 1.2.6

## Screenshots

![](https://camo.githubusercontent.com/01ed64b01d73046a485ea82b645a3be529c64809/687474703a2f2f6e6f64657265642e6f72672f696d616765732f6e6f64652d7265642d73637265656e73686f742e706e67)

## Demo

* [Official video](https://youtu.be/vYreeoCoQPI)

## Configuration

Start and stop the service via the admin panel or via SSH.
Add plugins to Node-RED, like [Home-Assistant](https://github.com/YunoHost-Apps/homeassistant_ynh), through its web interface (Palette menu).

## Documentation

* Official documentation: https://nodered.org/docs/

## YunoHost specific features

#### Private app

Since Node-Red can handle sensitive automation, the app is always installed in private mode.

#### Multi-users support

* Are LDAP and HTTP auth supported? **No**
* Can the app be used by multiple users? **No**

#### Supported architectures

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/nodered%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/nodered/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/nodered%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/nodered/)

## Links

 * Report a bug: https://github.com/YunoHost-Apps/nodered_ynh/issues
 * App website: https://nodered.org/
 * Upstream app repository: https://github.com/node-red/node-red
 * YunoHost website: https://yunohost.org/

---

## Developers info

Please do your pull request to the [testing branch](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
or
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```
