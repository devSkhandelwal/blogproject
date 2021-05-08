import React from 'react'
import { useSelector } from 'react-redux'

const MyPosts = () => {
    
    const myPost = useSelector(state=>state.myPosts)

    return (
        <div>
            
        </div>
    )
}

export default MyPosts
