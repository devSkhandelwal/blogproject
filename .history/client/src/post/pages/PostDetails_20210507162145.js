import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../../shared/formElements/Button';
import Message from '../../shared/Message';
import { postDetailsAction } from '../actions/postAction';
import "./PostDetails.css"


const PostDetails = () => {

    const postId = useParams().postId

    const dispatch = useDispatch()
    const postDetail = useSelector(state=>state.postDetails)

    const {loading,error,post} = postDetail;

    

    useEffect(()=>{
        dispatch(postDetailsAction(postId))
    },[dispatch,postId])
    

    return (
        <div className="post">

            {
                loading ? <h2>loading</h2> : "error" ? <Message vareint="danger">{error}</Message> :(
                    <div className="detail">
                <h1>{post.title}</h1>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                <p>{post.description}</p>
                <Button to = {`/update/post/${post._id}`}>update</Button>
            </div>
                )
            }

            
        </div>
    )
}

export default PostDetails
