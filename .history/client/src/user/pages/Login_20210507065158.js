import React from 'react'
import { useSelector } from 'react-redux'
import Input from '../../shared/formElements/Input'
import useForm from '../../shared/hooks/useForm'

const Login = () => {


    
    const login = useSelector(state=>state.login)
    

    

    const initialState = {
        email:"",
        password:""
    }



    
    const {formData,handleInputChange,handleSubmit} = useForm(initialState)
    const {email,password} = formData;
    


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e,"loginForm")}>
                
                <Input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
