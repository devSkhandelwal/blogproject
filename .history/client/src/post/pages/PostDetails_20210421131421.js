import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postDetailsAction } from '../actions/postAction'

const PostDetails = () => {

    const dispatch = useDispatch()
    const postDetail = useSelector(state=>state.postDetails)

    const {loading,error,post} = postDetail;

    useEffect(()=>{
        dispatch(postDetailsAction())
    },[dispatch])
    

    return (
        <div>
            
        </div>
    )
}

export default PostDetails
