import React from 'react'
import useForm from '../../shared/hooks/useForm'
import {useSelector} from 'react-redux'
import Input from '../../shared/formElements/Input'
 
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
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
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
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Register
