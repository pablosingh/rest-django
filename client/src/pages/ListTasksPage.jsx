import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardTask from '../components/CardTask';

export default function ListTasksPage() {
  const [ arrayTasks, setArrayTasks ] = useState([])
  const getAllTasks = () => {
      return axios.get('http://localhost:8000/tasks/api/v1/tasks/');
  }
  
  useEffect( () => {
      async function loadTasks() {
          const res = await getAllTasks();
          console.log(res?.data);
          if(res?.data)
            setArrayTasks([...res.data]);
      };
      loadTasks();
  },[]);  
return (
  <ContainerStyled>
    <div>Tareas</div>
    <br/>
    {
      arrayTasks && arrayTasks.map( task => <CardTask 
        key={task.id}
        title={task.title}
        description={task.description}
        done={task.done}
      />)
    }
  </ContainerStyled>
)
};

const ContainerStyled = styled.div`

`;