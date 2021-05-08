import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({name,email,createdAt}) => {
    return (
        <li>
            <Link to = {`/user/${id}`}>
                {name}
            </Link>
            <Link to={`/user/${id}`}>
                {email}
            </Link>
            <p>{new Date(createdAt).toLocaleDateString()}</p>
        </li>
    )
}

export default UserItem
