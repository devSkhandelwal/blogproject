import React from 'react'

const PostItem = (props) => {
    return (
     
            <li className="postlistitem">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.createdAt}
                </p>
                <p>
                    {props.description.substring(0.30)}
                </p>
            </li>
    
    )
}

export default PostItem
