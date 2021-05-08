import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userListAction } from '../actions/userAction'
import UserList from '../components/UserList'

const AllUsers = () => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    
    const {users,loading,error} = userList

    useEffect(()=>{
        dispatch(userListAction())
    },[dispatch])
    console.log(userList)
    return (
        <div>

           {/* <UserList userList={userList} /> */}
        </div>
    )
}

export default AllUsers
