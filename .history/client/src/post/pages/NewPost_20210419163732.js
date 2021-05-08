import React, { useReducer } from 'react'

const NewPost = () => {
    

    const initailState = {
        title:'',
        description:''
    }



    const formReducer = (state,action) =>{
       switch(action.type){
           case "field":
               return{
                   ...state,
                   inputs:{...state.inputs,[action.fieldName]:action.payload}
               }
            default:
                return state;
       }
       
       
       
    }

    const [data,dispatch]  = useReducer(formReducer,initailState)


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(data)
    }

    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
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
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default NewPost