import React, { useReducer } from 'react'

const NewPost = () => {
    

    

    const formReducer = (state,action) =>{
       switch(action.type){
           case "field":
               return{
                   
               }
       }
    }

    const initailState = {
        title:''
    }

    const [data,dispatch]  = useReducer(formReducer,initailState)

    const {title} = data; 

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        dispatch({
            type:"field",
            fieldName: name,
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
