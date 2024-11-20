import { legacy_createStore } from "redux";
import { ArticleReducer } from "./reducers/ArticleReducer";


const store =legacy_createStore(ArticleReducer)

export default store