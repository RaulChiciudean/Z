import React from 'react';
import styled from 'styled-components';

const Title = () => {
    return (
        <Text>
            <p>This week’s specials</p>
            <h2>We recommand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiu smod tempor incididunt ut labore etdo</p>
        </Text>
    );
};

export default Title;

const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem 1.5rem;
    font-family: 'Raleway', sans-serif;
    color:white;
    p{
        font-family: 'Inconsolata', monospace;
    }
    @media(max-width:1300px){
      text-align: center;
    };
`;