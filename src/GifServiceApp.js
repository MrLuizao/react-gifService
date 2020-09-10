import React, {useState, Fragment} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifDataList } from './Components/GifDataList';

export const GifServiceApp = () => {

    const [categories, setcategories] = useState(['']);

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
                    // categories.map( category => {
                    //     return <li key = {category}> {category} </li>
                    // })
                    categories.map( category => (
                        <GifDataList 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
            
        </Fragment>
    )
}
