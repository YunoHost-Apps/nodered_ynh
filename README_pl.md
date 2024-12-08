<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Node-RED dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/nodered)](https://ci-apps.yunohost.org/ci/apps/nodered/)
![Status działania](https://apps.yunohost.org/badge/state/nodered)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/nodered)

[![Zainstaluj Node-RED z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Node-RED na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

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


**Dostarczona wersja:** 4.0.5~ynh1

## Zrzuty ekranu

![Zrzut ekranu z Node-RED](./doc/screenshots/screenshot.jpg)

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://nodered.org>
- Oficjalna dokumentacja: <https://nodered.org/docs/>
- Repozytorium z kodem źródłowym: <https://github.com/node-red/node-red>
- Sklep YunoHost: <https://apps.yunohost.org/app/nodered>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/nodered_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
lub
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
