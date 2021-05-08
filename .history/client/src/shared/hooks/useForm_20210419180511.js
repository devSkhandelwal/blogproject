import {useReducer} from 'react';


const useForm = (initailState) => {
 
    console.log(initailState)

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


    const [formState,dispatch]  = useReducer(formReducer,initailState)


    const handleChange = (e) =>{
        console.log(e)
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }

    return [formState,handleChange]
}

export default useForm