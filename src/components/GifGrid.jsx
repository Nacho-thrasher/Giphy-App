import React, { Fragment} from 'react'
import { useAxiosGifs } from '../hooks/useAxiosGifs'
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
//import axios from 'axios';
//const apiKey = 'aarzH1Y0XZOL3UqqE7dhhCiJEP3Tz7JU';

const GifGrid = ({category}) => {
    //console.log(category)
    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(category)
    //     .then((imgs)=> setImages(imgs))
    // }, [category])
    // ,[]
    const { data:images, loading } = useAxiosGifs(category)
    return (
        <Fragment>
        <h2 className='category-name'>{category}</h2>
        { loading && 'cargando...'}
        <div className="card-grid">
        { 
            images.map((img)=>(
                <GifGridItem 
                key={img.id}    
                { ...img }
                />
            ))
        }
        </div> 
        </Fragment>
    )
}

export default GifGrid