import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <li>
                <h1>{props.title}</h1>
                {props.description}
            </li>
        </div>
    )
}

export default PostItem
