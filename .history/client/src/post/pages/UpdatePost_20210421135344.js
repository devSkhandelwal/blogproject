import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import useForm from '../../shared/hooks/useForm';
import { postDetailsAction } from '../actions/postAction';

const UpdatePost = () => {

    const postId = useParams().postId;

    const dispatch = useDispatch()
    const postDetail = useSelector(state=>state.postDetails)

    const {post} = postDetail

    console.log(post)

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    useEffect(() => {
        if (!post.title || post._id !== postId) {
            dispatch(postDetailsAction(postId))
          } else {
            setTitle(post.title)
            setDescription(post.description)
          }
    }, [dispatch,post])


    


    

    const {formData,handleInputChange,handleSubmit} = useForm(initialState)


    const {title,description} = formData;
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e,"newPostForm")}>
                
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
                <button>Update Post</button>
            </form>
        </div>
    )
}

export default UpdatePost
