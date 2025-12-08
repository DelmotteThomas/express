init projet

npm init -y ( -y pour yes pour tous )
installer les dépendances :: npm i nodemon

installer axios npm i axios

ejs gere le routing / et les middleware

( toutes ces librairies , sont dans les dev dependencie dans le fichier package.json)

Crée lors de l'instanciation du projet avec npm init

A chaque installation du projet, toutes les dépendances permettent de telechargé la librairie et les ajouters au projet.

npm update va mettree a jour ttes les librairies mais attention au versionning et a l'harmonie des versions.

(Toujours faire une npm update sur une branche dédié / branche test)

NB : ne pas oublier le gitingore pour les nodemodules et les /env avec les ports Tokken etc. ( Question sécurité)

Pour avoir tous la meme strucutre de .env il est conseillé de faire le .env.dist avec la même structure du /env mais sans les infos.

Server.js ( import de express)

app = express () -> demarrer express qui va prendre le relais niveau serveur. quand on va demarrer le serv avec

app.listen();

express :
app.set -> on doit lui dire ou est le répertoir de vue ( si on doit en rendre une / si le projet ne renvoie que du json pas besoin d'envoyer une vue)

app.engine -> associer html a EJS

app.use --> servir les fichier public 

    (Pour les middleware)

Principe SOLID : MEAN

S - Simple Responsability : A class should have only one reason to change, meaning it should have only one job or responsibility.

O - Open Close  : should be open for extension, but closed for modification.


L -  Liskov Substitution :  Subtypes must be substitutable for their base types without altering the program's correctness.


I - Interface Segregation : Clients should not be forced to depend on interfaces they do not use; prefer smaller, focused interfaces


D - Dependency Inversion : High-level modules should depend on abstractions, not concrete low-level modules; abstractions shouldn't depend on details, but details on abstractions. 



Fichier route / 

2 params : la route et le controller que la route doit déclencher.

le controller / 

example : 

exports.index = (req, res) => {
    res.render('pages/about/index', { 
        title: À propos`, 
        message: `Ceci est la page à propos.
    });
};

voir : pokemonController 

plusieurs méthode - > CRUD

middle ware se met au mileu des routes 

/ / route + middleware + controller  // 

pour le multilanguage (i18n) / c'est aussi dans le controller qu'on le gere dynamiquement.



Lance l'app : Crée le script dans le package 
Avec nodemode : Ajoute dans script : "NomScriptAuChoix": "nodemon server.js"