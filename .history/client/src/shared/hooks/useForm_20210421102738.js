import {useState} from 'react'
import { userLoginAction, userRegisterAction } from '../../user/actions/userAction';
import {useDispatch,useSelector} from 'react-redux'
import { postCreateAction } from '../../post/actions/postAction';

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e,formName) =>{
        console.log(formName)
        e.preventDefault()
        if(formName === "registerForm"){

            const {name,email,password} = formData
            dispatch(userRegisterAction(name,email,password))

        }else if(formName === "loginForm"){
            
            const {email,password} = formData
            dispatch(userLoginAction(email,password))

        }else if(formName === "newPostForm"){
            
            const {title,description} = formData
            dispatch(postCreateAction(title,description))

        }elese{

            console.log('not')
        }
    }
    

    return {formData,handleInputChange,handleSubmit}
}

export default useForm
