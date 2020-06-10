import React from 'react';
import styled from 'styled-components';

const Dark = styled.span`
color: #343a40;
font-weight: bold;
text-transform: uppercase;
`;


const Metric = ({age, proffession, education, city}) => {
    return (
    <div className="p-4">
        <p><Dark>Wiek:</Dark> {age}</p>
        <p><Dark>Wykształcenie:</Dark> {education}</p>
        <p><Dark>Zawód:</Dark> {proffession}</p>
        <p><Dark>Miejsce zamieszkania:</Dark> {city}</p>
    </div>  
    ) 
}

export default Metric;