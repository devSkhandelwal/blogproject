import React,{useEffect,useContext} from 'react'
import PostContext from '../context/PostContext'

const AllPosts = () => {
    const postContext = useContext(PostContext);

    const {posts,getPosts} = postContext;
    useEffect(()=>{
        getPosts()
    })

    return (
        <div>
            
        </div>
    )
}

export default AllPosts
