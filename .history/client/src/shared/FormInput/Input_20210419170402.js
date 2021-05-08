import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                
            />
        </div>
    )
}

export default Input
