import React from 'react';
import styled from 'styled-components';


const Metric = ({age, proffesion, education, city}) => {
    return (
    <div>
        <p>Wiek: {age}</p>
        <p>Wykształcenie: {education}</p>
        <p>Zawód: {proffesion}</p>
        <p>Miejsce zamieszkania: {city}</p>
    </div>  
    ) 
}

export default Metric;