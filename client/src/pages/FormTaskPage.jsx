import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";

export default function FormTaskPage() {
    const navigate = useNavigate();
    const params = useParams();
    const initialData = {
        title: "",
        description: "",
        done: false,
    };
    const [data, setData] = useState(initialData);
    const [modalCreate, setModalCreate] = useState(false);
    const [msgModal, setMsgModal] = useState("Nota Guardada");
    const closeModalCreate = () => setModalCreate(false);
    const [modalDelete, setModalDelete] = useState(false);
    const closeModalDelete = () => setModalDelete(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const closeModalUpdate = () => setModalUpdate(false);
    const changing = (e) => {
        if (e.target.name == "done") {
            setData({
                ...data,
                [e.target.name]: e.target.checked,
            });
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    };
    const sendTask = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8000/tasks/api/v1/tasks/",
                data,
            );
            setMsgModal("Nota Guardada");
        } catch (error) {
            setMsgModal("Error al guardar");
            console.log(error);
            console.log(msgModal);
        }
    };
    const sending = (e) => {
        e.preventDefault();
        try {
            sendTask();
        } catch (error) {
            setMsgModal("Error al guardar");
            console.log(error);
        }
        setData(initialData);
        setModalCreate(true);
        setTimeout(closeModalCreate, 1000);
        setTimeout(() => navigate("/tasks/"), 1000);
    };
    const updateTask = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:8000/tasks/api/v1/tasks/${params.id}/`,
                data,
            );
        } catch (error) {
            console.log(error);
        }
        setModalUpdate(true);
        setTimeout(closeModalUpdate, 1000);
        setTimeout(() => navigate("/tasks/"), 1000);
    };
    const deleteTask = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(
                `http://localhost:8000/tasks/api/v1/tasks/${params.id}/`,
            );
        } catch (error) {
            console.log(error);
        }
        setModalDelete(true);
        setTimeout(closeModalDelete, 1000);
        setTimeout(() => navigate("/tasks/"), 1000);
    };
    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                try {
                    const res = await axios.get(
                        `http://localhost:8000/tasks/api/v1/tasks/${params.id}`,
                    );
                    setData(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        loadTask();
    }, []);
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
                        checked={data.done}
                        className=""
                        onChange={changing}
                    />
                </label>
                {!params.id && (
                    <button className="btn" onClick={sending}>
                        Crear
                    </button>
                )}
                {params.id && (
                    <div>
                        <button className="btn" onClick={updateTask}>
                            Editar
                        </button>
                        <button className="btn" onClick={deleteTask}>
                            Borrar
                        </button>
                    </div>
                )}
            </FormStyled>
            {modalCreate && (
                <Modal onClose={closeModalCreate} children={msgModal} />
            )}
            {modalDelete && (
                <Modal
                    onClose={closeModalDelete}
                    children={"Exito al borrar"}
                />
            )}
            {modalUpdate && (
                <Modal
                    onClose={closeModalDelete}
                    children={"Exito al Editar"}
                />
            )}
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
