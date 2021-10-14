import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.png';

function Navigation(){
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
                <ul>
                    <li><a href=""></a>Home</li>
                    <li><a href=""></a>Fatures</li>
                    <li><a href=""></a>Pricing</li>
                </ul>
                <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
    )

}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display:flex;
        justify-content: space-between;
        width: 50%;
        cursor: pointer;
    }

    .logo{
        color: white;
    }
`


export default Navigation;