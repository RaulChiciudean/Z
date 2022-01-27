import React from 'react';
import slider_img_1 from '../images/slider-img-1.jpg';
import slider_img_2 from '../images/slider-img-2.jpg';
import slider_img_3 from '../images/slider-img-3.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
    const hAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1.5, ease: "easeIn" } }
    };
    const pAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2.75, ease: "easeIn", staggerChildren: 2 } }
    };
    const iAnim = {
        hidden: { x: -200, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } }
    };
    const iAnim2 = {
        hidden: { x: 200, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } }
    }
    return (
        <MainDiv>
            <StyledNav>
                <h1><a href="#">Bridge</a></h1>
                <ul>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </StyledNav>
            <br />
            <br />
            <br />
            <TextDiv>
                <motion.h3 variants={hAnim} initial="hidden" animate="show">The best restaurant in your town!</motion.h3>
                <motion.p variants={pAnim} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus incidunt totam voluptas, perspiciatis quisquam dignissimos repellat at fuga quis!</motion.p>

            </TextDiv>
            <ImgDiv>
                <ImageB variants={iAnim} initial="hidden" animate="show" src={slider_img_1} alt="" />
                <ImageB variants={iAnim2} initial="hidden" animate="show" src={slider_img_2} alt="" />
            </ImgDiv>
            <TextDiv2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus incidunt totam voluptas, perspiciatis quisquam dignissimos repellat at fuga quis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit impedit enim?</p>
            </TextDiv2>
        </MainDiv>
    )

}
export default Home;

const StyledNav = styled.nav`
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding:1rem 10rem;
    background-color: transparent;
    @media(max-width:1300px){
      flex-direction: column;
      padding:2rem 1rem;
      h1{
          display: inline-block;
          margin:1rem;
          justify-content: center;
      }
      ul{
          padding:2rem;
          justify-content: space-around;
          width:100%;
          li{
          padding:0;
      }
      };
       
    };
    
    h1{
        font-size: 1.8rem;
    }
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
    li{
        position: relative;
        padding-left: 5rem;
    }

`;

const MainDiv = styled.div`
    @media(max-width:1300px){
      display: block;
      padding:2rem 2rem;
      text-align: center;
    };
`;

const ImageB = styled(motion.img)`
    width: 50%;
    @media(max-width:1300px){
      display: block;
      width: 100%;
      padding: 1rem;
    };
`;
const ImgDiv = styled(motion.div)`
display: flex;
@media(max-width:1300px){
      display: block;
    };
`;

const TextDiv = styled(motion.div)`
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem;

`;

const TextDiv2 = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 3rem;
`;