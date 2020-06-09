import React from 'react';
import List from '../atoms/list';
import Metric from '../atoms/metric';
import Picture from '../atoms/picture';
import Story from '../atoms/story';
import Title from '../atoms/title';
import styled from 'styled-components';

const MainTemplate = ({persons}) => {
    return (
        <>
            {persons.map((el, index) => {
            return (
                <div key={index} className="p-4">
                    <div className="row">
                        <div className="col-12">
                            <Title name={el.name} surname={el.surname} />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {/* <div className="col-12">
                            <Title name={el.name} surname={el.surname} />
                        </div> */}
                        <div className="col-3">
                            <Picture />
                            <Metric className="p-4" age={el.age} proffesion={el.proffesion} education={el.education} city={el.city} />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-6">
                                    <List title="Cele" array={el.goals} />
                                </div>
                                <div className="col-6">
                                    <List title="Potrzeby" array={el.needs} />
                                </div>
                                <div className="col-6">
                                    <List title="Pomocne" array={el.helpfull} />
                                </div>
                                <div className="col-6">
                                    <List title="Obawy" array={el.threads} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Story story={el.story} />
                        </div>
                    </div>
                </div>
                    )
                })
            }
        </>
        );
    }

export default MainTemplate;