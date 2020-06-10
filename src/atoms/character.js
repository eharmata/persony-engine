import React from 'react';
import styled from 'styled-components';

const Chips = styled.span`
background-color: #343a40;
font-weight: bold;
color: white;
padding: 2px 10px;
border-radius: 15px;
display: inline-block;
margin: 5px;
`;

const Wrapper = styled.div`
line-height: 1.5;
padding: 1rem;
`;
const Character = ({character}) => {
    return (
    <Wrapper>
        {character.map((el, index) => (<Chips key={index}>{el}</Chips>) )}
    </Wrapper>  
    ) 
}

export default Character;