import React,{useReducer} from 'react'

const Input = (props) => {

    const 

    const initailState = {
        title:'',
        description:''
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
