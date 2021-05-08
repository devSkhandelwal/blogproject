import {useState} from 'react'

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e,formName) =>{
        e.preventDefault()
        if(formName = "registerForm"){
            console.log(formData)
        }else if(formName = "registerForm"){
            console.log(formData)
        }else{
            console.log('not')
        }
    }
    

    return {formData,handleInputChange,handleSubmit}
}

export default useForm
