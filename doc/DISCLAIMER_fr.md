Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED :
* la permission `main` protège `./`, chemin d'accès au tableau de bord et les *nodes* HTTP.
Par défault, elle est accessible aux visiteurs, puisqu'elle est utilisée comme un point d'entrée de type API ;
* la permission `admin` protège `./admin`. L'administrateur sélectionné à l'installation y aura accès.
