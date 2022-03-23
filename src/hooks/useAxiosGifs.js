import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useAxiosGifs = (category)=>{
    
    const [first, setfirst] = useState({
        data: [],
        loading: true
    })
    //efect no puede async porq es sincrono
    useEffect(()=>{
        getGifs(category).then((imgs)=> setfirst({
            data: imgs,
            loading: false
        }))
    }, [category])

    
    return first //{data: [], true}

}