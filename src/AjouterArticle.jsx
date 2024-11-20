import React from 'react';
import { AddArticleAction } from './Redux/action/ArticleAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';


export default function AjouterArticle() {
    const dispatch = useDispatch()
    const addArticle=()=>{
        console.log(article)
        dispatch(AddArticleAction(article))
    }

    const [article, setarticle] = useState({
        id:"",
        designation:"",
        famille:"",
 
     })

  return (
    <>
    <div className="space-y-4 max-w-md mx-auto my-8 p-4 border rounded-lg shadow-md">

   
      <div >
        <label htmlFor="id" className="block mb-1 font-medium text-gray-700">identifiant</label>
        <input
          type="text"
          id="id"
          name="id"
          value={article.id}
          onChange={(e)=>setarticle({...article, id:e.target.value})}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="designation" className="block mb-1 font-medium text-gray-700">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={article.designation}
          onChange={(e)=>setarticle({...article, designation:e.target.value})}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="famille" className="block mb-1 font-medium text-gray-700">Famille</label>
        <input
          type="text"
          id="famille"
          value={article.famille}
          name="famille"
          onChange={(e)=>setarticle({...article, famille:e.target.value})}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <button
      onClick={addArticle}
        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Ajouter
      </button>
      </div>
   </>
);
}