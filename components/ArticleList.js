import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
        {articles.map((article) => (
        <h5>{article.title}</h5>
        ))}
        </div>
    )
}

export default ArticleList