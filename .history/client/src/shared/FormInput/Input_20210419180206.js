import React,{useReducer} from 'react'
import useForm from '../hooks/useForm'

const Input = (props) => {

    const  [formState,handleChange] = useForm()   
    
    

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={formState.value}
                onChange={handleChange(e))}
            />
        </div>
    )
}

export default Input
