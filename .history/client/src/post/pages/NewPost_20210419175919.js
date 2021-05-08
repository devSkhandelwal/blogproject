import React from 'react'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {
    

    const [useForm] = useForm()

    const submitHandler = (e) =>{
        e.preventDefault()
    }
    
    return (
        <div>
            <form>
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
