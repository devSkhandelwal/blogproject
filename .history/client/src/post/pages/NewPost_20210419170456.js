import React, { useReducer } from 'react'

const NewPost = () => {
    

    const initailState = {
        title:'',
        description:''
    }



    



    
    const [data,dispatch]  = useReducer(formReducer,initailState)



    
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
