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

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="name"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="name"
                    value={password}
                    onChange={handleInputChange}
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Register
