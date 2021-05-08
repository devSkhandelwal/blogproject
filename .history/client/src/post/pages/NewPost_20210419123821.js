import React, { useReducer } from 'react'

const NewPost = () => {
    const formReducer = () =>{}

    const initailState = {
        title:''
    }
    const [state,dispatch]  = useReducer(formReducer,initailState)

    return (
        <div>
            <form>
                <input 
                    type= "text"
                    id="title"
                    value={initailState.title}
                    onChange={e=>}
                />
            </form>
        </div>
    )
}

export default NewPost
