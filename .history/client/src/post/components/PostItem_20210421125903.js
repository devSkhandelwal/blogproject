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
                    {props.description && props.description.length > 30 ? props.description.substr(0,200) : props.description}.....
                </p>
            </li>
    
    )
}

export default PostItem
