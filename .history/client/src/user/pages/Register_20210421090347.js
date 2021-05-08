import React from 'react'
import useForm from '../../shared/hooks/useForm'

const Register = () => {

    const initialState = {
        name:"",
        email:"",
        password:""
    }

    const {formData,handleInputChange} = useForm(initialState)

    return (
        <div>
            <form>
                <input
                    type="text"
                />
                <input/>
                <input/>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Register
