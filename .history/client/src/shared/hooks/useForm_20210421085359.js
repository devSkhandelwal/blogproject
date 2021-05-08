import {useState} from 'react'

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const handleInputChange = (e) => {
        setFormData()
    }

    return (
        <div>
            
        </div>
    )
}

export default useForm
