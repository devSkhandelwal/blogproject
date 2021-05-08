import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({name,email,createdAt}) => {
    return (
        <li>
            <Link>
                {name}
            </Link>
        </li>
    )
}

export default UserItem
