import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function GifExpertApp() {
    //const categs = ['one punch', 'samuray x', 'dragon ball']
    const [category, setCategory] = useState([])
    // const handleClick = (e)=>{
    //     setCategory(
    //        [...category, 'hunter x hunter']
    //     )
    // }
    return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategory={setCategory} />
        {
            category.map(categoria=> 
            <GifGrid
                key={categoria}
                category={categoria} 
            /> 
            )
        }
    </Fragment>
    )
}

export default GifExpertApp