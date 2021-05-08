import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const MyPosts = () => {
    
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
