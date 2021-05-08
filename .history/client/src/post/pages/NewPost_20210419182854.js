import React, { useReducer } from 'react'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {
    


    const [formState,handleChange] = useForm({
        title:'',
        description:''
    })


    const formReducer = (state,action) =>{
       switch(action.type){
           case "field":
               return{
                   ...state,
                   [action.fieldName]:action.payload
               }
            default:
                return state;
       }
       
       
       
    }
    
    const [data,dispatch]  = useReducer(formReducer,formState)



    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type= "text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type= "text"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={(e)=>handleChange(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost
