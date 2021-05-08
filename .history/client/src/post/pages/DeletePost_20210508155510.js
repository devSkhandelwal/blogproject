import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../shared/formElements/Button'

const DeletePost = () => {

    const dispatch = useDispatch()

    const deleteHandler = () => {

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
