import {useReducer} from 'react';


const useForm = () => {
 

    const [data,dispatch]  = useReducer(formReducer,initailState)

    const handleChange = (e) =>{
        dispatch({
            type:"field",
            fieldName: e.target.name,
            payload:e.target.value
        })
    }

    return (handleChange)
}