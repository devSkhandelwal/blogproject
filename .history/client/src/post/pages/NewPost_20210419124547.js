import React, { useReducer } from 'react'

const NewPost = () => {
    

    const initailState = {
        title:''
    }

    const formReducer = (initailState,action) =>{
        console.log(action)
        switch(action.type){
            case 'field':
                return initailState[action.name] = action.name
            default:
                return initailState
        }
    }

    const [state,dispatch]  = useReducer(formReducer,initailState)


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
