import React from 'react';
import styled from 'styled-components';
import Line from '../atoms/line';

const Wrapper = styled.div`
    padding: 0 2rem; 
    line-height: 1.8rem;
`;


const Traits = ({traits, color}) => {
    return (
    <Wrapper>
        {traits.map((el, index) => (
            <Line color={color} key={index} name={el.name} range={el.range} value={el.value} divided={el.divided || false}/>
        ))}
    </Wrapper>
    )
}

export default Traits;