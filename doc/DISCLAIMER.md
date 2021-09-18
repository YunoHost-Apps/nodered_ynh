YunoHost's permissions system allows you to select which users can have access to Node-RED:
* `main` permission protects `/admin`, the flows editor. The administrator is chosen during installation ;
* `ui` permission protects `/ui`, the dashboard allowing visual interface for the flows. Public access is chosen during installation ;
* `endpoints` permission protects `/`, for API-like endpoints. By default, it is world-accessible.
