const initialState={
    user:{id:1,username:"Alami"},
    articles:[
        {id:1,designation:"Mouse",famille:"CONSOMMABLE"},
        {id:2,designation:"Keyboard",famille:"CONSOMMABLE"}

    ],
    categories:[],
    fournisseurs:[]

}
export function ArticleReducer(state=initialState,action){
    switch(action.type){
        case "ADD_ARTCILE":
            //AJOUTER LE CODE DE L'AJOUT
            return {...state,articles:[...state.articles,action.payload]}
        case "DELETE_ARTICLE":
            //AJOUTER LE CODE DE LA SUPPRESSION
            console.log(action)
            return{...state,articles:[...state.articles.filter(function(item){
                return item.id !== action.payload
            })]}
        case "UPDATE_ARTCILE":
            return{ ...state,
               
                articles:[
                    ...state.articles.map((item)=>{
                        if(item.id=== action.payload.id){
                            return action.payload;
                        }
                        return item;
                    }),
                ],
            }
        default:
            return state
    }
    
}