import React from 'react'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {
    


    const [formState,handleChange] = useForm({
        title:'',
        description:''
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
                    id="title"
                    name="title"
                    value={formState.title}
                    onChange={(e)=>handleChange(e)}
                />
                <textarea
                    type= "text"
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={(e)=>handleChange(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost
