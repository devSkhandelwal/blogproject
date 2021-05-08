import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../shared/formElements/Button'
import { userDetailsAction } from '../../user/actions/userAction'
import './PostItem.css'



const PostItem = (props) => {


    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.login)
    const {user} = useSelector(state => state.userDetails)

  
  
    useEffect(()=>{
      if(userInfo){
        dispatch(userDetailsAction(userInfo.id))
      }
    },[dispatch,userInfo])



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
            <Button to="/delete">Delete</Button>
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
