import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardTask from "../components/CardTask";

export default function ListTasksPage() {
    const [arrayTasks, setArrayTasks] = useState([]);

    useEffect(() => {
        const getAllTasks = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/tasks/api/v1/tasks/",
                );
                if (response?.data) setArrayTasks([...response.data]);
            } catch (error) {
                setArrayTasks([]);
            }
        };
        getAllTasks();
    }, []);
    return (
        <ContainerStyled>
            {arrayTasks.length > 0
                ? arrayTasks.map((task) => (
                      <CardTask
                          key={task.id}
                          id={task.id}
                          title={task.title}
                          description={task.description}
                          done={task.done}
                      />
                  ))
                : //
                  null}
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    position: relative;
    width: 100vw;
    min-height: 85vh;
    background-color: rgba(215, 226, 229, 0.2);
    padding: 0.5em 0.5em;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
`;
