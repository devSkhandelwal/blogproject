import {useState} from 'react'
import { userRegisterAction } from '../../user/actions/userAction'

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e,formName) =>{

        e.preventDefault()
        if(formName = "registerForm"){

            const {name,email,password} = formData
            userRegisterAction(name,email,password)

        }else if(formName = "loginForm"){

            console.log(formData)

        }else{

            console.log('not')
        }
    }
    

    return {formData,handleInputChange,handleSubmit}
}

export default useForm
