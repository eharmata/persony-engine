import React from 'react';
import styled from 'styled-components';

const LineContainer = styled.div`
    width: 100%;
    height: 10px;
    position: relative;
    background-color: #aaa;
    border-radius: 0px 5px 5px 0px;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({range, value}) => range && value ? `${(value/range)*100}%` : '50%'};
        height: 10px;
        background-color: ${({color})=> color ? color : "navy"};
        border-radius: 0px 5px 5px 0px;
    }
    ${({val})=> val !== undefined ? `
    &:after {
        content: "lat";
        position: absolute;
        top: 12px;
        right: 10px;
    }
    ` : null}
`;

const Name = styled.p`
    margin-bottom: .5rem;
    margin-top: 1rem;
`;

const Kid = styled.div`
    position: absolute;
    width: 1px;
    height: 10px;
    background-color: black;
    top: 0;
    left: ${({val})=> val !== undefined ? `${(val + 1)*10}%` : "10%" };
    &:before {
        content: ${({val})=> val !== undefined ? `"${val+1}"` : ""};
        position: relative;
        display: inline-block;
        font-size: 1.2rem;
        top:12px;
        color: black;
    }
    &:last-child {
        &:after {
            content: 'lat';
            position: relative;
            display: inline-block;
            font-size: 1.2rem;
            top: -6px;
            right: -35px;

        }
    }
`;
const kidsArr = [0,1,2,3,4,5,6,7,8]

const Line = ({name, range, value, divided, color}) => {
    if (divided){
        return (
                <>
                    <Name>{name}</Name>
                    <LineContainer range={range} value={value} color={color}>
                        {kidsArr.map((el, index) => (<Kid key={index} val={el} />))}
                    </LineContainer>
                </>
        )
    }
    return (
    <>
        <Name>{name}</Name>
        <LineContainer range={range} value={value} color={color}></LineContainer> 
    </>
    )
}

export default Line;