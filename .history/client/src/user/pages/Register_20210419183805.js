import React, { useReducer } from 'react'
import useForm from '../../shared/hooks/useForm'

const Register = () => {
    
    const [formState,handleChange] = useForm({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type= "text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type= "email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type= "password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={(e)=>handleChange(e)}
                />
                <input 
                    type= "password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formState.confirmPassword}
                    onChange={(e)=>handleChange(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
