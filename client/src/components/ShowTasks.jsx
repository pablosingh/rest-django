import axios from 'axios';
import React, { useEffect } from 'react';

export default function ShowTasks() {
    const getAllTasks = () => {
        return axios.get('http://localhost:8000/tasks/api/v1/tasks/');
    }
    
    useEffect( () => {
        async function loadTasks() {
            const res = await getAllTasks();
            console.log(res?.data);
        }
        loadTasks();
    },[]);  
  return (
    <div>ShowTasks</div>
  )
}
