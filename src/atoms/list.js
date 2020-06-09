import React from 'react';
import styled from 'styled-components';


const List = ({title, array}) => (
    <div>
        <h2>{title}</h2>
        <ul>
            {
            array.map((el, index) => {
                return (
                <li key={index}>{el}</li>
                )
            })
            }
        </ul>
    </div>   
)

export default List;