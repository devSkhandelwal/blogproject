import React from 'react'
import { useSelector } from 'react-redux'

const AllUsers = () => {
    
    const userList = useSelector(state=state.userList)
    
    console.log(userList)

    return (
        <div>
            
        </div>
    )
}

export default AllUsers
