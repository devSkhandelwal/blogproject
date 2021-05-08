import React,{useReducer} from 'react'
import useForm from '../hooks/useForm'

const Input = (props) => {

    const  [formState,handleChange] = useForm()   
    
    
    console.log(formState)
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={formState.value}
                onChange={(e) =>handleChange(e)}
            />
        </div>
    )
}

export default Input
