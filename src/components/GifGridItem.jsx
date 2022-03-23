import React, { Fragment } from 'react'
import styled from 'styled-components'

const DivCard = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    margin: 1rem;
    max-width: 250px;
    min-height: 250px;
    align-content: center;
    min-width: 200px;
    
`;

const GifGridItem = ({id, title, url}) => {
  
  return (
    <Fragment>
        <DivCard background = {url}>
            <div className="contenedor">
                <span className='title'>{title}</span>
            </div>
            {/* <img src={url} alt={title} /> */}
        </DivCard>
    </Fragment>
  )
}
export default GifGridItem