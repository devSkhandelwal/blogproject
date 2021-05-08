import React,{useEffect} from 'react'
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
    useEffect(() => {
        dispatch(postDetailsAction(postId))
    }, [dispatch])

    const initialState = {
        title:post.title,
        description:post.description
    }

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
