import React from 'react';
import styled from 'styled-components';


const Title = ({name, surname}) => {
    return (
    <h1 className="display-1">{name} {surname}</h1>    
    )
}

export default Title;