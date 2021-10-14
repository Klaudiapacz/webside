import React from "react";
import styled from 'styled-components';
import arrow from '../img/arrow.png';

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow"/>
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--accent-green);
    padding: .6rem 1.6rem;
    font-family: inherit;
    color: inherit;
    border-radius: 20px;
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    font-size: 16px;

    .arrow{
        width: 30px;
        padding-left:0.9rem;
    }
`;

export default SecondaryButton;