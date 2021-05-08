import {useReducer} from 'react';


const useForm = (initailState) => {
 

    const formReducer = (state,action) =>{
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


    const [formState,dispatch]  = useReducer(formReducer,initailState);


    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }

    return [formState,handleChange,formReducer]
}

export default useForm