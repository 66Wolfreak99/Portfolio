import blue_dragon from './assets/blue_dragon.png';
import blablabook from './assets/blablabook.png';
import site from './assets/site.png';
import todo from './assets/todo.png';

const List = [

    {title: "Site web personnel", link: "https://66wolfreak99.github.io/index.html", github:"https://github.com/66Wolfreak99/66Wolfreak99.github.io", image: site, description: 
        ["Un site web personnel avec un style rétro 'début années 2000' qui montre des dessins fait à la tablette. Le site est composé de HTML et CSS purement vanilla avec du Javascript dans certaines pages pour y ajouter des fonctionnalités intéressantes telles que la page des personnages."

    ]},

    {title: "Blablabook", github:[{name:"Front-End", link:"https://github.com/66Wolfreak99/BlaBlaBook-Front-End"}, {name:"Back-End", link:"https://github.com/66Wolfreak99/BlaBlaBook-Back-End"}], image: blablabook, description: 
        ["C'est un projet d'équipe réalisé pour l'apothéose de notre formation pour mettre au défi tout ce que ous avons appris au cours de celle-ci, utilisant des technologies telles que React, Sass, Node Js, postgreSQL et Express JS.",
        
        " C'est un site web dynamique qui permet de rechercher des livres à l'aide de l'API OpenLbrary ainsi que de les ajouter dans sa bibliothèque personnelle, qui est lié à un compe qui pourra être créé sur le site. Chaque compte et leur bibliothèque est stocké dans une base de données.",
        
        " Dans une équipe de 3, j'ai été chargé de la majorité de la création du Front-end de l'application, ainsi qu'une partie du Back-end. Mes camarades, eux, se sont plus concenntré sur la création du Back-End",

        "Il a fallut planifier créer le site web en équipe du début, en commençant par le cahier des charges, puis le wireframe et les maquettes, ainsi que les schémas de la base de données, avant de se mettre au développement pur et dur.",

        "Le Back-End et le Front-End ont été créés dans deux repos différents. Le Front-End utilise React JS et le Back-End, lui, utilise Node JS et Express JS. La base de donnée quant à elle, utilise PostgreSQL. Comme le site utilise une base de donnée, je n'ai pas pu la déployer."
    ]},

    {title: "Blue Dragon", link: "https://blue-dragon-ecru.vercel.app/", github:"https://github.com/66Wolfreak99/MonProjetPerso/tree/main/src/styles", image: blue_dragon, description: 
        ["Un projet libre pour ma formation. C'est une simple page web purement statique qui représente un site de social media fictif. Créé avec du HTML basique et du Sass. Puis, avec du javascript, la liste des posts est affichée avec la possibilité d'ajouter un post en texte seulement grâce un form. Comme c'est statique, rien n'est sauvegardé.",
        
        " Le but du projet était simplement de montrer et de peaufiner mes capacités en CSS. J'ai aussi dessiné le logo et l'image de fond moi-même."

    ]},

    {title: "Todo", link: "https://66wolfreak99.github.io/TodoApp/posts", github:"https://github.com/66Wolfreak99/MonProjetPerso/tree/main/src/styles", image: todo, description: 
        ["Une petite application To-do créée avec angular. La liste est sauvegardée dans le navigateur fgrace au LocalStorage et il est possible de réorganiser l'ordre des éléments."

    ]}

]

export default List