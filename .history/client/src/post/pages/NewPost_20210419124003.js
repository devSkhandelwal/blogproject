import React, { useReducer } from 'react'

const NewPost = () => {
    const formReducer = () =>{}

    const initailState = {
        title:''
    }
    const [state,dispatch]  = useReducer(formReducer,initailState)


    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        dispatch({
            
        })
    }
    return (
        <div>
            <form>
                <input 
                    type= "text"
                    id="title"
                    value={initailState.title}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewPost
