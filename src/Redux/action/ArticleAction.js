export  function AddArticleAction(NewArticle){
    return({
        type:"ADD_ARTCILE",
        payload:NewArticle
    })
}
export  function UpdateArticleAction(ArticleItem){
    return({
        type:"UPDATE_ARTCILE",
        payload:ArticleItem
    })
}
export  function DeleteArticleAction(IdArticle){
    return({
        type:"DELETE_ARTCILE",
        payload:IdArticle
    })
}
