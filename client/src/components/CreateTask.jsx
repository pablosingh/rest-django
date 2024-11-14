import React, { useState } from 'react'

export default function CreateTask() {
    const initialData = {
        title: "",
        description: ""
    }
    const [ data, setData ] = useState(initialData);
    const [ doneState, setDoneState ] = useState(false);
    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const handleCheck = e => {
        setDoneState(e.target.checked);
    };
    const sending = e => {
        e.preventDefault();
        console.log({
            ...data,
            done: doneState
        });
        setData(initialData);
        setDoneState(false);
    }
    return (
        <form>
            <input type="text" name="title" value={data.title}
                        className="" onChange={changing}/>
            <input type="text" name="description" value={data.description}
                        className="" onChange={changing}/>
            <input type="checkbox" name="done" checked={doneState}
                        className="" onChange={handleCheck}/>
            <button onClick={sending}>Enviar</button>
        </form>
  )
}
