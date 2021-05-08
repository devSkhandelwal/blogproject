import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userListAction } from '../actions/userAction'

const AllUsers = () => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    
    console.log(userList)

    useEffect(()=>{
        dispatch(userListAction())
    },[])

    return (
        <div>
            userlist
        </div>
    )
}

export default AllUsers
