import React,{useEffect,useContext} from 'react'
import PostContext from '../context/PostContext'

const AllPosts = () => {
    const postContext = useContext(PostContext);

    const {posts,getPosts} = postContext;

    useEffect(()=>{
        getPosts()
    },[getPosts])

    if (posts !== null   ) {
        return (<h4>Please add a contact.</h4>);
      }

      console.log(posts)
    return (
        posts.map(post=>(
            {post}
        ))
    )
}

export default AllPosts
