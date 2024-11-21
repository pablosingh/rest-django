import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function FormTaskPage() {
    const initialData = {
        title: "",
        description: "",
    };
    const [data, setData] = useState(initialData);
    const [doneState, setDoneState] = useState(false);
    const changing = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheck = (e) => {
        setDoneState(e.target.checked);
    };
    const sendTask = async () => {
        const res = await axios.post(
            "http://localhost:8000/tasks/api/v1/tasks/",
            {
                ...data,
                done: doneState,
            },
        );
        console.log(res);
    };
    const sending = (e) => {
        e.preventDefault();
        console.log({
            ...data,
            done: doneState,
        });
        sendTask();
        setData(initialData);
        setDoneState(false);
    };
    return (
        <Container>
            <FormStyled>
                <label className="label-input">
                    Titulo
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        className=""
                        onChange={changing}
                    />
                </label>
                <label className="label-input">
                    Descripcion
                    <input
                        type="text"
                        name="description"
                        value={data.description}
                        className=""
                        onChange={changing}
                    />
                </label>
                <label className="label-check">
                    Check
                    <input
                        type="checkbox"
                        name="done"
                        checked={doneState}
                        className=""
                        onChange={handleCheck}
                    />
                </label>
                <button className="btn" onClick={sending}>
                    Enviar
                </button>
            </FormStyled>
        </Container>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    background-color: rgba(215, 226, 229, 1);
    justify-content: flex-start;
    // margin: 0.5em;
    padding: 0.7em;
    border-radius: 0.5em;
    border: 1px solid black;
    flex-wrap: wrap;
    width: fit-content;
    .label-input {
        display: flex;
        flex-direction: column;
    }
    .label-check {
        display: flex;
        justify-content: space-around;
    }
    .btn {
        color: black;
        margin: 0em 0em;
        padding: 0.2em 0.7em;
        border-radius: 5em;
        text-decoration: none;
        background-color: rgba(135, 213, 225, 255);
    }
    .btn:hover {
        background-color: rgba(135, 213, 250, 255);
        font-weight: bold;
        cursor: pointer;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(215, 226, 229, 0.2);
`;
