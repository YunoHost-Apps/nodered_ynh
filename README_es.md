<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Node-RED para Yunohost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/nodered)](https://ci-apps.yunohost.org/ci/apps/nodered/)
![Estado funcional](https://apps.yunohost.org/badge/state/nodered)
![Estado En Mantención](https://apps.yunohost.org/badge/maintained/nodered)

[![Instalar Node-RED con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarNode-RED rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

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


**Versión actual:** 4.0.7~ynh1

## Capturas

![Captura de Node-RED](./doc/screenshots/screenshot.jpg)

## Documentaciones y recursos

- Sitio web oficial: <https://nodered.org>
- Documentación usuario oficial: <https://nodered.org/docs/>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/node-red/node-red>
- Catálogo YunoHost: <https://apps.yunohost.org/app/nodered>
- Reportar un error: <https://github.com/YunoHost-Apps/nodered_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
o
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
