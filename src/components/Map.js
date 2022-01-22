import React from 'react';
import styled from 'styled-components';

const Map = () => {
    return (
        <MainDiv>
            <div class="mapouter"><div class="gmap_canvas">
                <iframe style={{ height: "50vh", width: "160vh", maxWidth: "100%" }} id="gmap_canvas" src="https://maps.google.com/maps?q=4%20Great%20Portland%20St,%20London%20W1W%208QJ,%20Regatul%20Unit&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div>
        </MainDiv>
    );
};

export default Map;




const MainDiv = styled.div`
    display:flex;
    justify-content:center;
    margin: 2rem;
`;

