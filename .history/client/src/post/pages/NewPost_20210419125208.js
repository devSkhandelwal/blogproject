import React, { useReducer } from 'react'

const NewPost = () => {
    

    

    const formReducer = (state,action) =>{
       switch(action.type){
           case "field":
               return{
                   ...state,
                   [action.field]:action.payload
               }
            default:
                return state;
       }
    }

    const initailState = {
        title:''
    }

    const [data,dispatch]  = useReducer(formReducer,initailState)

    const {title} = data; 

    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }
    return (
        <div>
            <form>
                <input 
                    type= "text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewPost
