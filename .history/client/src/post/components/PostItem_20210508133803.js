import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../shared/formElements/Button'
import { userDetailsAction } from '../../user/actions/userAction'
import './PostItem.css'



const PostItem = (props) => {
    if(user.isAdmin){
        return(
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
            <Button to="/update">Update</Button>
            <Button to="/">Delete</Button>
        </li>
        )
    }else{
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
    
}

export default PostItem
