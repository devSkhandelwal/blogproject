import React from 'react'

const Input = (props) => {


    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    )
}

export default Input
