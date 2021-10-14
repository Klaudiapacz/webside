import React from "react";
import styled from 'styled-components';

function PrimaryButton({name}) {
    return(
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button `
    background-color: var(--neutral-blue);
    padding: .6rem 1.6rem;
    font-family: inherit;
    color: inherit;
    border-radius: 20px;
    outline:none;
    border: none;
    cursor: pointer;
`;

export default PrimaryButton;