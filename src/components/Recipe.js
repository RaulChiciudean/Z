import React from 'react';
import styled from 'styled-components';
import single_img_2 from '../images/single-img-2.jpg';

const Recipe = () => {
    return (
        <MainDiv>
            <Recipee>
                <h3>Coco spice...............$19</h3>
                <p>Captain Morgan spiced rum, pineaple</p>

                <br />

                <h3>Tequila Sunrise............$14</h3>
                <p>Tequila, orange juice, grenadine</p>

                <br />

                <h3>Cuba Libre.................$22</h3>
                <p>Dark rum, fresh lime, Coke</p>

                <br />

                <h3>Gin Fizz...............$24</h3>
                <p>Bombay Sapphire gin, Ginger beer, lime juice</p>
            </Recipee>

            <div>
                <Image src={single_img_2} alt="" />
            </div>
        </MainDiv>
    );
};

export default Recipe;

const MainDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    font-family: 'Raleway', sans-serif;
    @media(max-width:1300px){
      display: block;
      img{
        width:100%;
      }
    };
`;

const Image = styled.img`
    width:90%;
    height:70vh;
    object-fit:cover;
`;

const Recipee = styled.div`
    padding: 2rem 4rem;
    color:white;
    font-family: 'Inconsolata', monospace;
    h3{
        font-size:26px;
    }
    p{
        font-size:22px;
        
    }
`;

