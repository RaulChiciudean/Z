import React from 'react';
import styled from 'styled-components';
import single_img_1 from '../images/single-img-1.jpg'

const Program = () => {
    return (
        <MainDiv>
            <Program1>
                <p>Visit a bar</p>
                <h2>Open hours</h2>
                <p>Monday – Friday:4:00 pm – 1:00 am</p>
                <p>Saturday: 4:00 pm – 3:00 am</p>
                <p>Sunday: 4:00 pm – 2:00 am</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, assumenda.</p>
            </Program1>
            <div>
                <Image src={single_img_1} alt="" />
            </div>
            <Program1>
                <p>The best offer</p>
                <h2>Happy hour</h2>
                <p>Monday – Sunday: 4:00 pm – 7:00 pm</p>
                <p>20% off all wine by the glass <span>15% off all cocktails</span></p>
                <p>25% off selected craft beer <span>10% off all spirits</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, assumenda.</p>
            </Program1>
        </MainDiv>
    )
};

export default Program;

const MainDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    overflow:hidden;
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
    height: 60vh;
    object-fit:cover;
`;

const Program1 = styled.div`
    padding:3rem;
    text-align:center;
    color:white;
    h2{
        padding-top:1rem;
        padding-bottom:1rem;
        font-size:200%;
    }
    p{
        padding-bottom:1rem;
        font-family: 'Inconsolata', monospace;
    }
`;