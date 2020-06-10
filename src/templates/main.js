import React from 'react';
import List from '../atoms/list';
import Metric from '../atoms/metric';
import Picture from '../atoms/picture';
import Story from '../atoms/story';
import Traits from '../molecules/traits';
import Title from '../atoms/title';
import Character from '../atoms/character';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
border: solid ${({color})=>color ? color : "#343a40"} 2px;
height: 1698px;
overflow: hidden;
`;

const HeighRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - 77px);
`;
const ColBorder = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    border-left: solid #343a40 1px;
`;

const Article = styled.div`
    column-count: 1;
    column-gap: 20px;
    width: 90%;
    margin: 10px auto;
    font-size: 1.6rem;
`;
const MainTemplate = ({persons}) => {
    return (<>
            {persons.map((el, index) => {
                console.log(el.color)
            return (
                <Wrapper key={index} color={el.color}>
                    <div className="mb-4">
                        <div className="row" style={{backgroundColor: `${el.color}`}}>
                            <div className="col-12">
                                <Title name={el.name} surname={el.surname} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 pr-0">
                                <Metric age={el.age} proffession={el.proffession} education={el.education} city={el.city} />
                                <Picture imageUrl={el.img} />
                                <Character character={el.character} />
                                <Traits traits={el.traits} color={el.traitColor}/>
                                <h2 className="display-4 ml-4 pl-1 my-4">Bio</h2>
                                <Article>{el.story}</Article>
                            </div>
                            <ColBorder>
                                <HeighRow>
                                    <div className="col-12 text-dark">
                                        <List title="Cele" array={el.goals} />
                                    </div>
                                    <div className="col-12 text-white" style={{backgroundColor: `${el.color}`}}>
                                        <List title="Potrzeby" array={el.needs} />
                                    </div>
                                    <div className="col-12 text-dark">
                                        <List title="Pomocne" array={el.helpfull} />
                                    </div>
                                    <div className="col-12 text-white" style={{backgroundColor: `${el.color}`}}>
                                        <List title="Obawy" array={el.threads} />
                                    </div>
                                </HeighRow>
                            </ColBorder>
                        </div>
                    </div>
                </Wrapper>
                        )
                    })
                }
             </>
        );
      
    }

export default MainTemplate;