import React from 'react';
import styled from 'styled-components';

const LoremText = () => {
    return (
        <Lorem>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit laborum voluptatum facere cumque a voluptate eius, dignissimos excepturi labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit laborum voluptatum facere cumque a voluptate eius, dignissimos excepturi labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit laborum voluptatum facere cumque a voluptate eius, dignissimos excepturi labore.
            </p>
        </Lorem>
    );
};

export default LoremText;

const Lorem = styled.div`
    display:flex;
    text-align: center;
    justify-content: center;
    width: 70%;
    margin: auto;
    color:white;
    font-family: 'Raleway', sans-serif;
    
`;