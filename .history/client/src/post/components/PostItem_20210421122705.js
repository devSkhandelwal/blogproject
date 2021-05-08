import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <li>
                <h2>{props.title}</h2>
                <p>
                {props.description}
                </p>
            </li>
        </div>
    )
}

export default PostItem
