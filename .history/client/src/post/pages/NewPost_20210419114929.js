import React,{useReducer} from 'react'

const NewPost = () => {

    const formReducer = () => {}

    const initialState = {
        title:{
            value:"",
            isValid:false
        },
        description:{
            value:"",
            isValid:false
        },
        isValid:false
    }

    const [state,dispatch] = useReducer(formReducer,initialState)

    const {title,description,isValid} = 

    return (
        <>
            <form>
                <input/>
                <input/>
                <button></button>
            </form>  
        </>
    )
}

export default NewPost
