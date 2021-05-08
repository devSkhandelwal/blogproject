import React, { useEffect } from 'react'
import useForm from '../../shared/hooks/useForm'
import {useSelector} from 'react-redux'
import Input from '../../shared/formElements/Input'
import Button from '../../shared/formElements/Button'
import FormContainer from '../../shared/formElements/FormContainer'
import Message from '../../shared/Message'
 
const Register = ({history}) => {

    const {userInfo} = useSelector(state=>state.login) 

    const initialState = {
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const {formData,handleInputChange,handleSubmit,message} = useForm(initialState)
    const {name,email,password,confirmPassword} = formData;


    useEffect(()=>{
        if(userInfo){
            history.push('/')
        }
    },[userInfo])

    return (
        <div className="container_form_page">
            <div className="heading">
                <h2>register</h2>
            </div>
            
            <FormContainer>
            {message && <Message vareint="danger">{message}</Message>}
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
                    <Input
                        element="input"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" varient="full">Sign In</Button>
                </form>
            </FormContainer>
        </div>
    )
}

export default Register
