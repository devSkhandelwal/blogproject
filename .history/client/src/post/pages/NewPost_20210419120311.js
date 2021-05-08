import React,{useReducer} from 'react'

const NewPost = () => {

    const formReducer = (state,action) => {

    }

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

    const [inputs,dispatch] = useReducer(formReducer,initialState)


    const {title,description,isValid} = inputs;

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

            </form>  
        </>
    )
}

export default NewPost
