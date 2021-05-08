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

    const {title,description,isValid} = state

    return (
        <>
            <form>
                <input
                    type="text"
                    id="title"
                    value={title.value}
                    onChange={(e)=>
                        dispatch({
                            type:"field",
                            fieldName:"title",
                            payload:e.target.value
                        })
                    }
                />
                <input/>
                <button></button>
            </form>  
        </>
    )
}

export default NewPost
