import React, { useState } from 'react'

export default function CreateTask() {
    const initialData = {
        title: "",
        description: "",
        done: false
    }
    const [ data, setData ] = useState(initialData);
    const changing = e => {
        console.log(e);
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const sending = e => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <form>
            <input type="text" name="title" value={data.title}
                        className="" onChange={changing}/>
            <input type="text" name="description" value={data.description}
                        className="" onChange={changing}/>
            <input type="checkbox" name="done" checked={data.done}
                        className="" onChange={changing}/>
            <button onClick={sending}>Enviar</button>
        </form>
  )
}
