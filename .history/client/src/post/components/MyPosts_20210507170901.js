import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../shared/Message';
import { myPostListAction } from '../actions/postAction';

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const myPosts = useSelector(state=>state.myPosts);
    console.log(myPosts)

    useEffect(()=>{
        dispatch(myPostListAction())
    },[dispatch])

    return (
        <>
            {
                loading ? <h2>loading</h2> : error ? <Message vareint="danger">{error}</Message> :(
                    myPosts.po
                )
            }
        </>
        
    )
}

export default MyPosts
