import React from 'react';
import styled from 'styled-components';


const Picture = ({imageUrl}) => {
    return (
    <img className="img-fluid" src={imageUrl} alt="persona" />   
)
    }

export default Picture;