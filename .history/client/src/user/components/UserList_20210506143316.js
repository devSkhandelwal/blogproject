import React from 'react'
import UserItem from './UserItem'

const UserList = ({userList}) => {

    return (
        <ul>
            {
                userList.map(user=>(
                    <UserItem
                        key={user._id}
                        id={user._id}
                        name={user.name}
                        email={user.email}
                        createdAt={user.created_at}
                    />
                ))
            }
        </ul>
    )
}

export default UserList
