import React, { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
    font-size: 18px;
    font-weight: 700;
    background: #5c0511;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: #FDFDFD;
    margin: 1rem;
    padding: 8px 10px;
    display: grid;
    grid-template-areas: "esq dir";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
    margin-left: auto;
`;
        
const ButtonStyled = (props)=>{
    return (
            <Button>{props.text}</Button>
        )
} 

export default ButtonStyled