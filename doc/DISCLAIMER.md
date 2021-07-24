YunoHost's permissions system allows you to select which users can have access to Node-RED:
* `main` permission protects `./`, to access the dashboard and HTTP endpoints ;
By default it is accessible to visitors, since it is meant to be used for API-like endpoints ;
* `admin` permission protects `./admin`. Upon installation, the selected admin will have sole access to it.
