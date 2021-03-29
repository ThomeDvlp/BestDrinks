import React from 'react'

const Input = ({id, htmlFor, type, name}) => {
    

    return (
        <>
        <label htmlFor={name} id={id} type={type} name={name}></label>
        <input id={id} type={type} name={name}></input>
        </>
    )
}

export default Input;