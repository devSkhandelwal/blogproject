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

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')


    useEffect(() => {
        
    }, [])


    const handleInputChange = (e) =>{
        [e.target.name] = e.target.value
    }
 
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
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
