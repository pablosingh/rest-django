import React from "react";
import styled from "styled-components";

export default function CardTask({ title, description, done }) {
    return (
        <ContainerStyled>
            <div className="title item">{title}</div>
            <input
                type="textfield"
                className="item"
                value={description}
                disabled={false}
            />
            <label className="item flex-space-around">
                Check
                <input type="checkbox" checked={done} disabled={false} />
            </label>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    background-color: rgba(215, 226, 229, 1);
    width: fit-content;
    border-radius: 1em;
    border: 1px solid black;
    margin: 0.5em 0em 0.5em 0.5em;
    padding: 0.7em 0.6em;
    .title {
        background-color: rgba(135, 213, 225, 255);
    }
    .item {
        margin: 0em 0em 0.5em 0.5em;
        padding: 0.2em 0.3em;
    }
    .flex-space-around {
        display: flex;
        justify-content: space-around;
    }
`;
