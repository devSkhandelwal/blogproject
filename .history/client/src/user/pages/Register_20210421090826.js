import React from 'react'
import useForm from '../../shared/hooks/useForm'

const Register = () => {

    const initialState = {
        name:"",
        email:"",
        password:""
    }

    const {formData,handleInputChange} = useForm(initialState)


    const {name,email,password} = formData;


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name,email,password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
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
