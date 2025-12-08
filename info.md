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

Principe SOLID : MEANING

S - Simple Responsability : A class should have only one reason to change, meaning it should have only one job or responsibility.
    Une classe ne devrait avoir qu'une seule et unique raison de changer, ce qui signifie qu'une classe ne devrait avoir qu'une seule fonction.
O - Open Close  : should be open for extension, but closed for modification.
    Les objets ou entités doivent pouvoir être étendus mais ne pas pouvoir être modifiés.
L -  Liskov Substitution :  Subtypes must be substitutable for their base types without altering the program's correctness.
    Soit q(x) une propriété prouvable sur les objets x de type T. Alors q(y) doit être prouvable pour les objets y de type S où S est un sous-type de T.
    Cela signifie que chaque sous-classe ou classe dérivée doit pouvoir être substituée à sa classe de base ou parente.
I - Interface Segregation : Clients should not be forced to depend on interfaces they do not use; prefer smaller, focused interfaces
    Un client ne devrait jamais être contraint d'implémenter une interface qu'il n'utilise pas, ni de dépendre de méthodes qu'il n'utilise pas.
D - Dependency Inversion : High-level modules should depend on abstractions, not concrete low-level modules; abstractions shouldn't depend on details, but details on           abstractions. 
    Les entités doivent dépendre d'abstractions, et non de concrétisations. Cela signifie que le module de haut niveau ne doit pas dépendre du module de bas niveau, mais que ces derniers doivent dépendre d'abstractions.



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

Installer b5 : npm install bootstrap

ou importer le CDN dans le header des html