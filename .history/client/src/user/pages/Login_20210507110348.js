import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../shared/formElements/Button'
import FormContainer from '../../shared/formElements/FormContainer'
import Input from '../../shared/formElements/Input'
import useForm from '../../shared/hooks/useForm'
import Message from '../../shared/Message'

const Login = () => {


    
    const login = useSelector(state=>state.login)
    

    

    const initialState = {
        email:"",
        password:""
    }



    
    const {formData,handleInputChange,handleSubmit,message} = useForm(initialState)
    const {email,password} = formData;
    


    return (
        <div className="container_form_page">
            <div className="heading">
                <h2>register</h2>
            </div>
            
            <FormContainer> 
                {message && <Message vareint="danger">{message}</Message>}
                <form onSubmit={(e) => handleSubmit(e,"loginForm")}>
                    
                    <Input
                        element="input"
                        type="text"
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
                    <Button type="submit" varient="full">Login</Button>
                </form>
            </FormContainer>
        </div>
    )
}

export default Login
