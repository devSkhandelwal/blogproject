import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <li>
                {props.title}
                {props.description}
            </li>
        </div>
    )
}

export default PostItem
