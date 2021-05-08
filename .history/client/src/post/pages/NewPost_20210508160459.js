import React from 'react'
import Button from '../../shared/formElements/Button'
import FormContainer from '../../shared/formElements/FormContainer'
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
        <FormContainer>
            <form onSubmit={(e) => handleSubmit(e,"newPostForm")}>
                <Input
                    element="input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <Input
                    
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />
                <Button type="submit" varient="full">Add Post</Button>
            </form>
        </FormContainer>
    )
}

export default NewPost;
