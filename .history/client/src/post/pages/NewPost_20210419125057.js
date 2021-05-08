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
        const name = ;
        const value = 
        dispatch({
            type:"field",
            fieldName: e.target.name,
            value
        })
    }
    return (
        <div>
            <form>
                <input 
                    type= "text"
                    id="title"
                    name="title"
                    value={initailState.title}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewPost
