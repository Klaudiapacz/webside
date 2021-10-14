import React from 'react';
import styled from 'styled-components';
import bg from '../img/wave2.svg';
import HeaderContent from './HeaderContent';
import Navigation from './Navigation.js';


function Header() {
    return ( 
        <HeaderStyled>
            <div className="header-content">
                <Navigation/>
                <HeaderContent/>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-possition-y: 117%;

    .header-content{
        padding: 0 10rem;
    }
`;

export default Header; 
