import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myPostListAction } from '../actions/postAction';

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const myPosts = useSelector(state=>state.myPosts);
  

    useEffect(()=>{
        dispatch(myPostListAction())
    },[dispatch])

    return (
        <div className="myposts">
            
        </div>
    )
}

export default MyPosts
