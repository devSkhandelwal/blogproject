import React,{useReducer} from 'react'

const Input = (props) => {


    const initailState = {
        title:'',
        description:''
    }




    
    

    const formReducer = (state,action) =>{
        console.log(state)
       switch(action.type){
           case "field":
               return{
                   ...state,
                   [action.fieldName]:action.payload
               }
            default:
                return state;
       }
    }

    const [data,dispatch]  = useReducer(formReducer,initailState)

    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }


    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    )
}

export default Input
