Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED :
* la permission `main` protège `/`, pour notamment les points d'entrée de type API définis par les nodes HTTP. L'accès public est défini lors de l'installation ;
* la permission `admin` protège `/admin`, l'éditeur de flux. Le groupe administrateur est suggéré pendant l'installation ;
* la permisison `ui` protège `/ui`, le tableau de bord permettant de donner une interface graphique aux flux. L'accès public est défini lors de l'installation.

Si vous avez mis à jour Node-RED au-delà de la version 2, vérifiez que ces permissions vous conviennent dans votre panneau d'administration de YunoHost.
