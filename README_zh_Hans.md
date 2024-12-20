<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Node-RED

[![集成程度](https://apps.yunohost.org/badge/integration/nodered)](https://ci-apps.yunohost.org/ci/apps/nodered/)
![工作状态](https://apps.yunohost.org/badge/state/nodered)
![维护状态](https://apps.yunohost.org/badge/maintained/nodered)

[![使用 YunoHost 安装 Node-RED](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=nodered)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Node-RED。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

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


**分发版本：** 4.0.8~ynh1

## 截图

![Node-RED 的截图](./doc/screenshots/screenshot.jpg)

## 文档与资源

- 官方应用网站： <https://nodered.org>
- 官方用户文档： <https://nodered.org/docs/>
- 上游应用代码库： <https://github.com/node-red/node-red>
- YunoHost 商店： <https://apps.yunohost.org/app/nodered>
- 报告 bug： <https://github.com/YunoHost-Apps/nodered_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/nodered_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
或
sudo yunohost app upgrade nodered -u https://github.com/YunoHost-Apps/nodered_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
