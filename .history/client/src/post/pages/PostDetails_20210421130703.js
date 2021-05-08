import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { postDetailsAction } from '../actions/postAction'

const PostDetails = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(postDetailsAction())
    })
    

    return (
        <div>
            
        </div>
    )
}

export default PostDetails
