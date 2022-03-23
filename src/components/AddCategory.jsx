import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault() //prevenir comp defecto de form
    if (inputValue.trim().length > 2) {
      setCategory( (oldCategory)=> [inputValue, ...oldCategory] )
      setInputValue('')
      //document.querySelector('#categ').value = '';
    }
  }

  return (
    <Fragment>
      <div className="category">
        <form onSubmit={handleSubmit}>
          <label htmlFor="categ">Add Category:</label>
          <input 
            id="categ" 
            type="text" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
        </form>
      </div>
    </Fragment>
  )
}
AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}


export default AddCategory
