import { useSelector } from "react-redux"

export default  function Articles(){


    const articleState= useSelector((state)=>state.articles)
    console.log(articleState)
    return(
        <>
        <table>
            <thead>

                <tr>
                    <th>id</th>
                    <th>designation</th>
                    <th>famille</th>
                    <th>Action</th>
                
                </tr>

            </thead>
            <tbody>
                
                {articleState.map(function(item){
                    return(
                        <tr key={item.id}>
                        <th>{item.id}</th>
                        <td>{item.designation}</td>
                        <td>{item.famille}</td>
                        <td>
                            <div>
                                <button>supprimer</button>
                                <button>modifier</button>
                            </div>
                        </td>

                        </tr>
                    )
                })}
               
            </tbody>
        </table>
        </>
    )
}