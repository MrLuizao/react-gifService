import {useState, useEffect} from 'react';
import { GetGifs } from '../Helpers/GetGifs';


export const useFetchGif = ( category ) => {


    const [stateObject, setStateObject] = useState({
        data: [],
        loading: true
    })

    useEffect ( () => {

        GetGifs( category )
            .then( images => {
                setStateObject({
                    data: images,
                    loading: false
                });
            })

    }, [ category ])

    return stateObject
}
