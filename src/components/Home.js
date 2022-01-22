import React from 'react';
import slider_img_1 from '../images/slider-img-1.jpg';
import slider_img_2 from '../images/slider-img-2.jpg';
import slider_img_3 from '../images/slider-img-3.jpg';
import styled from 'styled-components';

const Home = () =>{
    return(
    <div class="swiffy-slider">
            <ul class="slider-container">
                <li><img src={slider_img_1} style={{maxWidth: "100%", height: "auto"}} /></li>
                <li><img src={slider_img_2} style={{maxWidth: "100%", height: "auto"}} /></li>
                <li><img src={slider_img_3} style={{maxWidth: "100%", height: "auto"}} /></li>
            </ul>

            <button type="button" class="slider-nav"></button>
            <button type="button" class="slider-nav slider-nav-next"></button>

        <div class="slider-indicators">
            <button class="active"></button>
            <button></button>
            <button></button>
        </div>
    </div>
    )

}
export default Home;
