<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Node-RED para YunoHost

[![Nivel de integración](https://dash.yunohost.org/integration/nodered.svg)](https://ci-apps.yunohost.org/ci/apps/nodered/) ![Estado de funcionamento](https://ci-apps.yunohost.org/ci/badges/nodered.status.svg) ![Estado de mantemento](https://ci-apps.yunohost.org/ci/badges/nodered.maintain.svg)

[![Instalar Node-RED con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Node-RED de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.

### Features

- Browser-based flow editing
- On-click deployment of the flows
- Over 225,000 modules available
- Custom JavaScript functions can be written

### Override the default settings

From the installation directory, go edit the `__INSTALL_DIR__/data/settings.user.js`. For example:

```js
module.exports = (defaultSettings) => ({
    lang: "de", // define the language as "de"
    exportGlobalContextKeys: true, // override the `exportGlobalContextKeys` value
logging: { // replace the default logging option ...defaultSettings.logging, // this will reinject the default settings in logging
        console: {
            ...defaultSettings.logging.level, // this will reinject the default settings in logging.console
            level: "debug", // but here, we override the "info" level by "debug"
        },
    },
});
```

You can check the default settings Yunohost generates at `__INSTALL_DIR__/data/settings.js` and find the documentation for configuring Node-RED here: <https://nodered.org/docs/user-guide/runtime/configuration>


**Versión proporcionada:** 4.0.3~ynh1

## Capturas de pantalla

![Captura de pantalla de Node-RED](./doc/screenshots/screenshot.jpg)

## Documentación e recursos

- Web oficial da app: <https://nodered.org>
- Documentación oficial para usuarias: <https://nodered.org/docs/>
- Repositorio de orixe do código: <https://github.com/node-red/node-red>
- Tenda YunoHost: <https://apps.yunohost.org/app/nodered>
- Informar dun problema: <https://github.com/YunoHost-Apps/nodered_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
ou
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
