import React from 'react'
import { useSelector } from 'react-redux'
import useForm from '../../shared/hooks/useForm'

const Login = () => {


    

    const initialState = {
        email:"",
        password:""
    }



    
    const {formData,handleInputChange,handleSubmit} = useForm(initialState)
    const {email,password} = formData;
    


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e,"loginForm")}>
                
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
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
