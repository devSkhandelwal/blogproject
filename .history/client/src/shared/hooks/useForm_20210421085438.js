import {useState} from 'react'

const useForm = (initialState) => {

    const [formData,setFormData] = useState(initialState)  

    const handleInputChange = (e) => {
        setFormData({...formData,[e.]})
    }

    return (
        <div>
            
        </div>
    )
}

export default useForm
