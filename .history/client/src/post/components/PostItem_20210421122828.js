import React from 'react'

const PostItem = (props) => {
    return (
     
            <li className="listitem">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
            </li>
    
    )
}

export default PostItem
