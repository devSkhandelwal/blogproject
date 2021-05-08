import React from 'react'
import './Input.css'

const Input = ({element,type,name,id,value,onChange}) => {

    const inputElement = element === "input" ? (
                         <input
                            type={type}
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                         /> 
                    ): "textarea" ? (
                         <textarea
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                         /> 
                    ) : null

    return (
        <div className="form-group">
            <div className="form-label">{name}</div>
            {
                inputElement
            }
        </div>
    )
}

export default Input
