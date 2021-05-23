* YunoHost's permissions system enables to select which users can have access to Node-RED. Upon installation, the selected administrator is the sole user to have access.
* A `ui` permission is available in case you install the `node-red-dashboard` nodes. It makes the dashboard accessible to any authorized user or visitor, at `/ui` under Node-RED's address.
* A `nodes` permission is available in case you need to use the HTTP nodes. By default, visitors have access to these endpoints at `/red-nodes/...` under Node-RED's address.
