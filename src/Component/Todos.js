import React from 'react'

export default function Todos(props) {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return (<div key={index}>
                    <input type="checkbox" onChange={(event) => props.handleCheckbox(event, todo)} />
                    {todo.completed ? <strike>{todo.name}</strike> : <b>{todo.name}</b>}
                </div>)
            })}
        </div>
    )
}
