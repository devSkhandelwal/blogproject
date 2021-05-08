import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const myPosts = useSelector(state=>state.myPosts);
    console.log(myPosts);

    useEffect(()=>{

    },[])

    return (
        <div>
            
        </div>
    )
}

export default MyPosts
