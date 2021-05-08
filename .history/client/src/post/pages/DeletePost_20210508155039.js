import React from 'react'
import Button from '../../shared/formElements/Button'

const DeletePost = () => {
    return (
        <div>
            Are You Sure you want to delete this post
            <Button to="/">Cancel</Button>
        </div>
    )
}

export default DeletePost
