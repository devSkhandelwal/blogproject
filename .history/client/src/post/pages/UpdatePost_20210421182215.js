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

    const {title,description,_id} = post;


    const {formData,handleInputChange,handleSubmit} = useForm({title,description})

    const [uTitle,setUTitle] = useState('');
    const [uDescription,setUDescription] = useState('')


    useEffect(() => {
        if(!title || _id !== postId){
            dispatch(postDetailsAction(postId))
        }else{
            
        }
    }, [dispatch,postId,title,description,_id])



    
    return (
        <div>
            <form>
                
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
