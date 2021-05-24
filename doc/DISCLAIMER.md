YunoHost's permissions system allows you to select which users can have access to Node-RED:
* The `main` permission protects
  * `/path`, to access to the dashboard ;
  * all `/path/<node>` endpoints defined in the HTTP nodes (with the exception of `/path/admin`).
* Upon installation, the selected administrator will have the `admin` permission and access to the editor at `/path/admin`
