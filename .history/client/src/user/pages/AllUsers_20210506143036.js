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
    console.log(users)
    return (
        
        <div>
            {
                // loading ? (<h2>loading</h2>) : error ? (<h2> {error} </h2>) : (<UserList userList={users} />)
            }
        </div>   
        
    )
}

export default AllUsers
