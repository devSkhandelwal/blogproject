import React from 'react'
import { Link } from 'react-router-dom'
import './PostItem.css'

const PostItem = (props) => {
    return (
     
            <li className="postitem">
                <Link to={`/details/post/${props.id}`}>
                    <h2>
                        {props.title}
                    </h2>
                </Link>
                <p>
                    {props.createdAt}
                </p>
                <p>
                    {props.description && props.description.length > 30 ? props.description.substr(0,150) : props.description}.....
                </p>
            </li>
    
    )
}

export default PostItem
