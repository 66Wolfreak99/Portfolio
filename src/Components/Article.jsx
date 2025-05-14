import './Article.scss';
import { useState } from "react";

function Article(item) {
let article = [];
let description = [];
if(Array.isArray(item.item.github)){
    item.item.github.forEach((item, index) => {
        article.push(<a key={index} href={item.link} className="site__link">
                        {item.name} 
                     </a>)
    })
}
item.item.description.forEach((item, index) => {
    index > 0 ? description.push(<br/>, <br/>) : "";
    description.push( <span key={index}> {item} </span>)
})


    return (
<>
<article className="site">

    <h2 className="site__title">
        {item.item.title}
    </h2>
    <p className="site__description">
        {description}
    </p>
    <aside className='site__linkContainer'>
        {item.item.link ? 
        <a href={item.item.link} className="site__link">
            Visiter site
        </a>
        : ""}
        
        { Array.isArray(item.item.github) ? article : 
        <a href={item.item.github} className="site__link">
            Page Github
        </a>}
        
    </aside>
    <img className="site__image" src={item.item.image} alt={item.item.title} />
</article>

</>

    );
}

export default Article