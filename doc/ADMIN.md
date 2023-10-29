YunoHost's permissions system allows you to select which users can have access to Node-RED:
* `main` permission protects `/`, for API-like endpoints defined in HTTP nodes. Public access is chosen during installation.
* `admin` permission protects `/admin`, the flows editor. Admins group is suggested for access during installation.
* `ui` permission protects `/ui`, the Dashboard allowing visual interface for the flows. Public access is chosen during installation.

If you have upgraded Node-RED beyond v2, check that these permissions suit you in your YunoHost admin panel.
