/**
 *
 * This is where you you can as a user define and even override the default settings.
 * This file will remain untouched by the yunohost package accross upgrades.
 *
 * It can contain any valid JavaScript code that will get run when Node-RED
 * is started.
 *
 * Lines that start with // are commented out.
 * Each entry should be separated from the entries above and below by a comma ','
 *
 * For more information about individual settings, refer to the documentation:
 *    https://nodered.org/docs/user-guide/runtime/configuration
 *
 * The settings are split into the following sections:
 *  - Flow File and User Directory Settings
 *  - Security
 *  - Server Settings
 *  - Runtime Settings
 *  - Editor Settings
 *  - Node Settings
 *
 **/

module.exports = (defaultSettings) => ({
    /**
     * Put here your own config, it will override the ones in settings.js
     *
     * Example:
     * ```js
     * module.exports = (defaultSettings) => ({
     *     lang: "de", // define the language as "de"
     *     exportGlobalContextKeys: true, // override the `exportGlobalContextKeys` value
     *
     *
     *     logging: { // replace the default logging option
     *         ...defaultSettings.logging, // this will reinject the default settings in logging
     *         console: {
     *             ...defaultSettings.logging.level, // this will reinject the default settings in logging.console
     *             level: "debug", // but here, we override the "info" level by "debug"
     *         },
     *     },
     * });
     * ```
     */
});
