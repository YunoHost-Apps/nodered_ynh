Le système de permissions de YunoHost permet de paramétrer les accès à Node-RED. Par défaut, seul l'administrateur sélectionné lors de l'installation y a accès.
* La permission `main` protège
  * `/chemin`, pour accéder au tableau de bord ;
  * toutes les routes `/path/<node>` définis par les *nodes* HTTP (à l'exception de `/chemin/admin`).
* L'utilisateur choisi comme admin à l'installation aura la permission `admin` et aura accès à l'éditeur à l'adresse `/chemin/admin`
