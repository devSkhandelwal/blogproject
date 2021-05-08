import React from 'react'

const PostItem = (props) => {
    return (
     
            <li className="postlistitem">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.createdAt.toDateString()}
                </p>
                <p>
                    {props.description}
                </p>
            </li>
    
    )
}

export default PostItem
