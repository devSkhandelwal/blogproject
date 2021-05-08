import {useState} from 'react'
import { userRegisterAction } from '../../user/actions/userAction';
import {useDispatch,useSelector} from 'react-redux'

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e,formName) =>{

        e.preventDefault()
        if(formName = "registerForm"){

            const {name,email,password} = formData
            console.log(formData)
            dispatch(userRegisterAction(name,email,password))

        }else if(formName = "loginForm"){

            console.log(formData)

        }else{

            console.log('not')
        }
    }
    

    return {formData,handleInputChange,handleSubmit}
}

export default useForm
