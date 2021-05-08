import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userListAction } from '../actions/userAction'
import UserList from '../components/UserList'

const AllUsers = () => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    
    console.log(userList)

    useEffect(()=>{
        dispatch(userListAction())
    },[])

    return (
        <div>
           <UserList userList={userList} />
        </div>
    )
}

export default AllUsers
