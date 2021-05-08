import React,{useContext,useEffect} from 'react'
import useForm from '../../shared/hooks/useForm'
import PostContext from '../context/PostContext'

const NewPost = () => {
    
    const {addPost} = usePost()

    const [formState,handleChange] = useForm({
        title:'',
        description:''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        addPost(formState.title,formState.description)
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
