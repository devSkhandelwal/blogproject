import React from 'react'

const PostItem = (props) => {
    console.log(props.id)
    return (
        <div>
            <li>{props.id}</li>
        </div>
    )
}

export default PostItem
