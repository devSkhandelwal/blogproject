import React,{useReducer} from 'react'


const initialState = {
    title:''
}



const formReducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case 'field':{
            state[action.fieldName] = action.payload
            return;
        }
           
            
        default:
            return state;
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
