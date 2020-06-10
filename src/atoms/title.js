import React from 'react';
import styled from 'styled-components';


const Title = ({name, surname}) => {
    return (
    <h1 className="pl-4 display-2 text-white">{name} {surname}</h1>    
    )
}

export default Title;