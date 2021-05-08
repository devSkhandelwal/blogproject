import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Button from '../../shared/formElements/Button'
import { postDeleteAction } from '../actions/postAction'

const DeletePost = ({history}) => {
    const postId = useParams().postId
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(postDeleteAction(postId))
        history.push('/')
    }

    return (
        <div>
            Are You Sure you want to delete this post
            <Button to="/">Cancel</Button>
            <Button type="button" onClick={deleteHandler}>
                Delete
            </Button>
        </div>
    )
}

export default DeletePost
