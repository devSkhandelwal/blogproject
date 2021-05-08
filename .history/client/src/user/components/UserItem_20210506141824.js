import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({name,email,createdAt}) => {
    return (
        <li>
            <p>
                {name}
            </p>
            <Link>
                {email}
            </Link>
        </li>
    )
}

export default UserItem
