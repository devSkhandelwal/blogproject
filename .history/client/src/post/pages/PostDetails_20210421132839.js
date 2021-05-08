import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postDetailsAction } from '../actions/postAction';
import "./PostDetails.css"


const PostDetails = () => {

    const postId = useParams().postId

    const dispatch = useDispatch()
    const postDetail = useSelector(state=>state.postDetails)

    const {loading,error,post} = postDetail;

    console.log(post)

    useEffect(()=>{
        dispatch(postDetailsAction(postId))
    },[dispatch])
    

    return (
        <div className="post">
            <div className="detail">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>
        </div>
    )
}

export default PostDetails
