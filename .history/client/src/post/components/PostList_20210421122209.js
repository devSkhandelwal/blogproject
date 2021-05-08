import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts}) => {
    console.log(posts)
    return (
            <div>
                {  
                    posts.map(post=>(
                        <PostItem 
                            key={post.id} 
                            id={post.id}
                            title={post.title}
                            description={post.description}
                        />
                    ))
                }
            </div>
    )
}

export default PostList
