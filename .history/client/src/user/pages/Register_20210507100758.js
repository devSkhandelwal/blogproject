import React from 'react'
import useForm from '../../shared/hooks/useForm'
import {useSelector} from 'react-redux'
import Input from '../../shared/formElements/Input'
import Button from '../../shared/formElements/Button'
import FormContainer from '../../shared/formElements/FormContainer'
 
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
            <FormContainer>
                <form onSubmit={(e) => handleSubmit(e,"registerForm")}>
                    <Input
                        element="input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <Input
                        element="input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <Input
                        element="input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" varient="full">Sign In</Button>
                </form>
            </FormContainer>
        </div>
    )
}

export default Register
