import React from 'react'

const Input = ({element,type,name,id,value,onChange}) => {

    const inputElement = element === "input" ?(
                         <input
                            type={type}
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                            className="input"
                         /> 
                    ): "textarea" ? (
                         <textarea
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                         /> 
                    ):null

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
