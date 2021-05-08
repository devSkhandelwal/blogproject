import React,{useEffect,useContext} from 'react'
import PostContext from '../context/PostContext'

const AllPosts = () => {
    const postContext = useContext(PostContext);

    const {posts,getPosts} = postContext;
    useEffect(()=>{
        getPosts()
    },[])

    if (posts !== null && posts.length === 0 && !loading) {
        return (<h4>Please add a contact.</h4>);
      }

    return (
        posts.map(post=>(
            {post.title}
        ))
    )
}

export default AllPosts
