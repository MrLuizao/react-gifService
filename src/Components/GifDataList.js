import React, { useState, useEffect, Fragment} from 'react'
import { GifItem } from './GifItem';
import { GetGifs } from '../Helpers/GetGifs';

export const GifDataList = ( { category } ) => {

    const [images, setimages] = useState([]);

    useEffect ( () => {

        GetGifs( category )
            .then( images => setimages ( images ))

    }, [ category ])



    return (
        <Fragment>
            <h3> { category }</h3>
            <div className="card-grid">

                {
                    images.map( img => (
                        <GifItem
                            key = { img.id }
                            // img = { img } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}
