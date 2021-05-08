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

    const {title,description} = post

    const [uTitle,setUTitle] = useState('');
    const [uDescription,setUDescription] = useState('')


    useEffect(() => {
        if(!post.title || post._id !== postId){
            dispatch(postDetailsAction(postId))
        }else{
            setUTitle(post.title)
            setUDescription(post.description)
        }
    }, [dispatch,postId])



    
    return (
        <div>
            <form>
                
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <button>Update Post</button>
            </form>
        </div>
    )
}

export default UpdatePost
