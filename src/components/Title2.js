import React from 'react';
import styled from 'styled-components';

const Title2 = () => {
    return (
        <Text>
            <h2>Location</h2>
        </Text>
    );
};

export default Title2;

const Text = styled.div`
    display:flex;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    color:white;
    padding-top:4rem;
    font-size: 120%;
`;