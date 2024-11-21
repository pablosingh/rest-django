import React from "react";
import styled from "styled-components";

export default function CardTask({ title, description, done }) {
    return (
        <ContainerStyled>
            <div>{title}</div>
            <div>{description}</div>
            <div>{done ? "True" : "False"}</div>
            <br />
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    width: fit-content;
    border-radius: 1em;
    border: 1px solid black;
    margin: 0em 0em 0.5em 0.5em;
    padding: 1.2em 1em;
`;
