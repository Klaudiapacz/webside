import React from 'react';
import styled from "styled-components";
import SecondaryButton from './SecondaryButton';
import graphic from '../img/graphic.svg';

function HeaderContent(){
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                     <h1>Lorem ipsum dolor sit iis amet</h1>
                     <p className="white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi officia beatae voluptatum
                    possimus doloremque fugit, dolor consectetur 
                    fugiat quam vel nesciunt minima libero odio voluptate temporibus at? Repudiandae, eius.
                     </p>
                     <SecondaryButton name={'Register Now'}/>
                </div>
            </div>
            
            <div className="right-content">
                <img src={graphic} alt="" className="first-img"/>
            </div>

        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    padding-top: 3rem;

    .first-img{
        
        whight: 950px;
        width:  950px;
    }

    .left-content{
        display: flex;
        align-items: center;
        padding-right: 2rem;
        text-shadow: 1px 1px 2px black;
        h1{
            font-size: 3rem;
            font-weight: 600;
            text-align: center;
        }
        .white{
            padding: 1.4rem 0;
            line-hight: 1.8rem;
        }
    }
`;

export default HeaderContent;