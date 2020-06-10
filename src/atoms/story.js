import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
font-size: 1.4rem;
line-height: 1.4;
letter-spacing: .3px;
`;


const Story = ({story}) => {
    return (
    <div>
        <Text>{story}</Text>
    </div>  
    ) 
}

export default Story;