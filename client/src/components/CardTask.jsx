import React from 'react'

export default function CardTask({ title, description, done }) {
  return (
    <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{done ? "True" : "False"}</div>
        <br/>
    </div>
  )
}

