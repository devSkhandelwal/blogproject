import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../shared/formElements/Button'
import './PostItem.css'


const PostItem = (props) => {
    return (
     
            <li className="postitem">
                <Button to={`/details/post/${props.id}`}>
                    <h2>
                        {props.title}
                    </h2>
                </Button>
                <p className="date">
                    {new Date(props.createdAt).toLocaleDateString()}
                </p>
                <p className="description">
                    {props.description && props.description.length > 30 ? props.description.substr(0,150) : props.description}...
                </p>
                <Button to={`/details/post/${props.id}`} varient="full">View Details</Button>
            </li>
    
    )
}

export default PostItem
