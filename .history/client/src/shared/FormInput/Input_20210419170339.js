import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                
            />
        </div>
    )
}

export default Input
