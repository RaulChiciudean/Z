import React from 'react';
import styled from 'styled-components';
import cocktail from '../images/cocktail.jpg';
import barman from '../images/barman.jpg';
import bar from '../images/bar.jpg';

const About = () =>{
    return(
        <MainDiv>
            <div>
                <CocktailImage src={cocktail} alt="" />
            </div>
            <div>
                <BarmanImage src={barman} alt="" />
            </div>
            <div>
                <BarImage src={bar} alt="" />
            </div>
        </MainDiv>
    );
};

export default About;

const CocktailImage = styled.img`
    width:80%;
    height:50vh;
    object-fit:cover;
`;

const BarmanImage = styled.img`
    width:80%;
    height:50vh;
    object-fit:cover;
`;

const MainDiv = styled.div`
    display:flex;
    justify-content:center;
    margin:3rem;
`;

const BarImage = styled.img`
    width:80%;
    height:50vh;
    object-fit:cover;
`;