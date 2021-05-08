import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserDetails = () => {

    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state.userDetails)
    const {user,loading,error} = userDetails
    useEffect(()=>{},[])

    return (
        <div>
            
        </div>
    )
}

export default UserDetails
