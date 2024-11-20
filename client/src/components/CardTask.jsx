import React from 'react';
import styled from 'styled-components';

export default function CardTask({ title, description, done }) {
  return (
    <ContainerStyled>
        <div>{title}</div>
        <div>{description}</div>
        <div>{done ? "True" : "False"}</div>
        <br/>
    </ContainerStyled>
  )
};

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
`;