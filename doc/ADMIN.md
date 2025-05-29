YunoHost's permissions system allows you to select which users can have access to Node-RED:

* `main` permission protects `/admin`, the flows editor. The administrator is chosen during installation ;
* `ui` permission protects `/ui`, the dashboard allowing visual interface for the flows. Public access is chosen during installation ;
* `endpoints` permission protects `/`, for API-like endpoints. Public access is chosen during installation.

If you have upgraded Node-RED beyond v2, check that these permissions suit you in your YunoHost admin panel.

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
