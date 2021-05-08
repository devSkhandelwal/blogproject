import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts}) => {
    return (
            <ul className="postlist">
                {  
                    posts.map(post=>(
                        <PostItem 
                            key={post._id} 
                            id={post._id}
                            title={post.title}
                            description={post.description}
                        />
                    ))
                }
            </ul>
    )
}

export default PostList
