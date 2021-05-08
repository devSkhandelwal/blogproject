import React, { useReducer } from 'react'

const NewPost = () => {
    

    const initailState = {
        title:'',
        description:''
    }

    console.log(initailState)

    const formReducer = (state,action) =>{
       switch(action.type){
           case "field":
               return{
                   ...state,
                   initailState:{...state.initailState,[action.fieldName]:action.payload}
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
                <input 
                    type= "text"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={(e)=>handleChange(e)}
                />
            </form>
        </div>
    )
}

export default NewPost
