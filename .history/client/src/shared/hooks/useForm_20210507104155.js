import {useState} from 'react'
import { userLoginAction, userRegisterAction } from '../../user/actions/userAction';
import {useDispatch} from 'react-redux'
import { postCreateAction } from '../../post/actions/postAction';

const useForm = (initialState) => {
   

    const [formData,setFormData] = useState(initialState);
    const [message,setMessage] = useState(null)

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e,formName) =>{
       
        e.preventDefault()
        if(formName === "registerForm"){

            const {name,email,password,confirmPassword} = formData

            if(email === '' || password === '' || name === '' || confirmPassword === ''){
                setMessage('All field Required');
                return;
            }
            
            if(password !== confirmPassword){
                setMessage('password does not match');
                return;
            }

            if(password.length < 6){
                setMessage('enter min 6 length password');
                return;
            }


            dispatch(userRegisterAction(name,email,password))

        }else if(formName === "loginForm"){
            
            const {email,password} = formData

            if(email === '' || password === ''){
                setMessage('All field Required');
                return;
            }

            
            dispatch(userLoginAction(email,password))

        }else if(formName === "newPostForm"){
            
            const {title,description} = formData;

            if(title === '' || description === ''){
                setMessage('All field Required')
                return;
            }

            dispatch(postCreateAction(title,description))

        }else{
            console.log('not')
        }
    }
    

    return {formData,handleInputChange,handleSubmit,message}
}

export default useForm
