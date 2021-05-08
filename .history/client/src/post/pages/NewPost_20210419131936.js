import React, { useReducer } from 'react'


const initailState = {
    title:''
}
    

const NewPost = () => {
    

    

    const formReducer = (state,action) =>{
        console.log(action  )
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

    
    const [data,dispatch]  = useReducer(formReducer,initailState)



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
                    value={data.title}
                    onChange={(e)=>handleChange(e)}
                />
            </form>
        </div>
    )
}

export default NewPost
