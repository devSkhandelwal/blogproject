import React from 'react'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {

    const initialState = {
        title:"",
        description:""
    }

    const {formData,handleInputChange,handleSubmit} = useForm(initialState)


    const {title,description} = formData;
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e,"loginForm")}>
                
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default NewPost;
