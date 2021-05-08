import React,{useReducer} from 'react'
import useForm from '../hooks/useForm'

const Input = (props) => {

    const  [] = useForm(
        {
            title:'',
            description:''
        }
    )   
    

    
    

    


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
