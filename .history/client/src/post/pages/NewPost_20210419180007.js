import React from 'react'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {
    

    const [formState] = useForm()

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formState)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type= "text"
                    id="title"
                    name="title"
                />
                <input 
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
