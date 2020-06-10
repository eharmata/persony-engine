import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 100%;
min-width: 100%;
height: auto;
`;


const Picture = ({imageUrl}) => {
    console.log(imageUrl)
    return (
    <Image src={imageUrl} alt="persona" />   
)
    }

export default Picture;