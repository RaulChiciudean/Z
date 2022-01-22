import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterPage = () => {
    return (
        <Footerr>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Div1>
                <h3>Bridge</h3>
                <p className='p1'>Lorem ipsum dolor sit amet, consect etur dip isicing elit, sed do eiusm</p>
                <p><FontAwesomeIcon icon={faClock} /> Mon-Sun: 09am - 09pm</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1611 Linden Avenue, London</p>
            </Div1>
            <Div2>
                <h3>Pages</h3>
                <p>Home</p>
                <p>Reservations</p>
                <p>Menu</p>
                <p>Contact</p>
            </Div2>
            <Div3>
                <h3>Opening Hours</h3>
                <p>Monday – Friday:<br />
                    10:00am – 01:00am</p>
                <p>Saturday – Sunday: <br />
                    10:00am – 03:00 am</p>
            </Div3>
        </Footerr>
    );
};

export default FooterPage;

const Footerr = styled.footer`
    display: flex;
    justify-content: center;
    font-size: 120%;
    font-family: 'Raleway', sans-serif;
`;

const Div1 = styled.div`
    color:white;
    padding-left:4rem;
    .p1{
        width:90%;   
    }
    p{
        font-family: 'Inconsolata', monospace;
    }
`;

const Div2 = styled.div`
    color:white;
    padding-left:4rem;
    p{
        font-family: 'Inconsolata', monospace;
    }
`;

const Div3 = styled.div`
    color:white;
    padding-left:4rem;
    p{
        font-family: 'Inconsolata', monospace;
    }
`;

