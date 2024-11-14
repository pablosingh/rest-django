import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardTask from './CardTask';

export default function ShowTasks() {
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
        }
        loadTasks();
    },[]);  
  return (
    <div>
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
    </div>
  )
}
