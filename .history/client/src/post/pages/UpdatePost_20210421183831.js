import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postDetailsAction, postUpdateAction } from '../actions/postAction';

const UpdatePost = () => {

    const postId = useParams().postId;

    const dispatch = useDispatch()
    const postDetail = useSelector(state=>state.postDetails)

    const {post} = postDetail

    const {title,description,_id} = post;
    

    const [uTitle,setUTitle] = useState('');
    const [uDescription,setUDescription] = useState('')


    useEffect(() => {
        if(!title || _id !== postId){
            dispatch(postDetailsAction(postId))
        }else{
            setUTitle(title)
            setUDescription(description)
        }
    }, [dispatch,postId,title,description,_id])



    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(postUpdateAction(postId,uTitle,uDescription))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    name="title"
                    value={uTitle}
                    onChange={(e)=>setUTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    value={uDescription}
                    onChange={(e)=>setUDescription(e.target.value)}
                />
                <button>Update Post</button>
            </form>
        </div>
    )
}

export default UpdatePost
