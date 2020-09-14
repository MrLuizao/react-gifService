import React, { Fragment} from 'react'
import { GifItem } from './GifItem';
// import { GetGifs } from '../Helpers/GetGifs';
import {useFetchGif} from '../Hooks/useFetchGif';


export const GifDataList = ( { category } ) => {

    // const [images, setimages] = useState([]);
    // useEffect ( () => {
    //     GetGifs( category )
    //         .then( images => setimages ( images ))
    // }, [ category ])

    const { data:images, loading } = useFetchGif( category );


    return (
        <Fragment>
            <h3> { category }</h3>

            {/* {loading ? 'loading...' : 'ready!' } */}
            {loading && <p>loading</p> }

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
