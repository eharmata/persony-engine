import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
list-style-type: disc;
line-height: 1.5;
margin-left: 2rem;
padding: 1rem;
`;

const Wrapper = styled.div`
    padding: 1rem;
`;


const List = ({title, array}) => (
    <Wrapper>
        <h2>{title}</h2>
        <Ul>
            {
            array.map((el, index) => {
                return (index === 0 ? <li key={index}><strong>{el}</strong></li> :
                <li key={index}>{el}</li>
                )
            })
            }
        </Ul>
    </Wrapper>   
)

export default List;