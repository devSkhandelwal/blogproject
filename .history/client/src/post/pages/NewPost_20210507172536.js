import React from 'react'
import Input from '../../shared/formElements/Input'
import useForm from '../../shared/hooks/useForm'

const NewPost = () => {

    const initialState = {
        title:"",
        description:""
    }

    const {formData,handleInputChange,handleSubmit} = useForm(initialState)


    const {title,description} = formData;
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e,"newPostForm")}>
                
                <Input
                    element="input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <Input
                    element="input"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />
                <button>Add Post</button>
            </form>
        </>
    )
}

export default NewPost;
