import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({name,email,createdAt,id}) => {
    return (
        <li>
            <Link to = {`/user/${id}`}>
                {name}
            </Link>
            <Link to={`/user/${id}`}>
                {email}
            </Link>
            <p>{createdAt}</p>
        </li>
    )
}

export default UserItem
