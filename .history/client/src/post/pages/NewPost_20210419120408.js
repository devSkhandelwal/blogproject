import React,{useReducer} from 'react'

const NewPost = () => {

    const formReducer = (state,action) => {

    }

    const initialState = {
        title:''
    }

    const [inputs,dispatch] = useReducer(formReducer,initialState)


    const {title} = inputs;

    return (
        <>
            <form>
                <input
                    type="text"
                    id="title"
                    value={title}
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
