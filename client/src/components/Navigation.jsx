import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Navigation() {
  return (
    <ContainerStyled>
        <Link to='/tasks'>Tareas</Link>
        <Link to='/create'>Crear Tarea</Link>
    </ContainerStyled>
  )
};

const ContainerStyled = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
`;