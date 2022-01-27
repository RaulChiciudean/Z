import React from "react";
import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledNav>
            <h1><a href="#">Bridge</a></h1>
            <ul>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding:1rem 10rem;
    h1{
        font-size: 1.8rem;
    }
    a{
        color: #4d82f5;
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

export default Navbar;