import React from 'react'
import useForm from '../../shared/hooks/useForm'
import {useSelector} from 'react-redux'
 
const Register = () => {


    const login = useSelector(state=>state.register)
    
    console.log(login)
    const {loading,userInfo} = login

    console.log(loading,userInfo)


    const initialState = {
        name:"",
        email:"",
        password:""
    }

    const {formData,handleInputChange,handleSubmit} = useForm(initialState)


    const {name,email,password} = formData;

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e,"registerForm")}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
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
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Register
