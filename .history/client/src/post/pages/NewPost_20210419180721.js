import React from 'react'
import Input from '../../shared/FormInput/Input'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {
    

    const [formState] = useForm(
        {
            title:'',
            description:''
        }
    )

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formState)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input 
                    type= "text"
                    id="title"
                    name="title"
                />
                <Input
                    type= "text"
                    id="description"
                    name="description"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default NewPost
