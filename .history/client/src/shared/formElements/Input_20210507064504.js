import React from 'react'

const Input = () => {

    const inputElement = element === "input" ?(
                         <input
                            type={type}
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                         /> 
                    ): "textarea" ? (
                         <textarea/> 
                    ):null

    return (
        <div>
            
        </div>
    )
}

export default Input
