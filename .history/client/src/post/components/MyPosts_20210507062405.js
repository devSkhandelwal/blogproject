import React from 'react'
import { useSelector } from 'react-redux'

const MyPosts = () => {
    
    const myPosts = useSelector(state=>state.myPosts)
    console.log(myPosts)
    return (
        <div>
            
        </div>
    )
}

export default MyPosts
