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
        <FormStyled>
            <input
                type="text"
                name="title"
                value={data.title}
                className=""
                onChange={changing}
            />
            <input
                type="text"
                name="description"
                value={data.description}
                className=""
                onChange={changing}
            />
            <input
                type="checkbox"
                name="done"
                checked={doneState}
                className=""
                onChange={handleCheck}
            />
            <button onClick={sending}>Enviar</button>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    background-color: rgba(88, 79, 77, 255);
    justify-content: flex-start;
    // margin: 0.5em;
    // padding: 0.1em;
    border-radius: 0.5em;
    flex-wrap: wrap;
    width: fit-content;
`;
