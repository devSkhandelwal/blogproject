import React, { useReducer } from 'react'

const NewPost = () => {
    const formReducer = () =>{}

    const initailState = {
        title:''
    }
    const [state,dispatch]  = useReducer(formReducer,initailState)

    return (
        <div>
            
        </div>
    )
}

export default NewPost
