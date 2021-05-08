import React,{useReducer} from 'react'


const initialState = {
    title:''
}



const formReducer = (initialState,action) => {
    console.log(action)
    switch(action.type){
        case 'field':
            return {
                ...initialState,
                initialState:{
                    fieldName:{title:action.payload}
                }
            }
        default:
            return initialState;
    }
  
}




const NewPost = () => {

    

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
                            fieldName:{title},
                            payload:e.target.value
                        })
                    }
                />

            </form>  
        </>
    )
}

export default NewPost
