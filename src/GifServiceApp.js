import React, {useState, Fragment} from 'react'
import { AddCategory } from './Components/AddCategory';

export const GifServiceApp = () => {

    const [categories, setcategories] = useState(['Saint Seiya', 'Dragon Ball', 'Death Note']);

    // const handleAdd = () =>  {
    //     // setcategories( [...categories, 'Castlevania'] );
    //     setcategories( items => [...items, 'Castlevania'] );
    // }

    return (
        <Fragment>
            <h2>Gif Service App</h2>
            <AddCategory setcategories = { setcategories } />

           {/* <button onClick={handleAdd}> Add </button>  */}

            <ol>
                {
                    categories.map( category => {
                        return <li key = {category}> {category} </li>
                    })
                }
            </ol>
            
        </Fragment>
    )
}
