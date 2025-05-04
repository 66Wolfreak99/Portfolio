import './Article.scss'

function Article(item) {
    console.log(item.item)
    return (
<>
<article className="site">

    <h2 className="site__title">
        {item.item.title}
    </h2>
    <p className="site__description">
        {item.item.description}
    </p>
    <aside className='site__linkContainer'>
        <a href={item.item.link} className="site__link">
            Visiter site
        </a>
        <a href={item.item.github} className="site__link">
            Page Github
        </a>
    </aside>
    <img className="site__image" src={item.item.image} alt={item.item.title} />
</article>

</>

    );
}

export default Article