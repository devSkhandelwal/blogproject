import React,{useReducer} from 'react'

const formReducer = (state,action) => {
    switch(action.type){
        case 'field':
            return state[action.fieldName] = action.payload
        default:
            return state;
    }
    console.log(state)
}


const initialState = {
    title:''
}

const NewPost = () => {

    

    const [inputs,dispatch] = useReducer(formReducer,initialState)


    const {title} = inputs;

    console.log(initialState)
    console.log(inputs)
    console.log(title)

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
