import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AllUsers = () => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    
    console.log(userList)

    useEffect(()=>{

    },[])

    return (
        <div>
            userlist
        </div>
    )
}

export default AllUsers
