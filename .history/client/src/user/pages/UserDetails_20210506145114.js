import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserDetails = () => {

    const dispatch = useDispatch()
    const userDetail = useSelector(state=>state.userDetails)

    useEffect(()=>{},[])

    return (
        <div>
            
        </div>
    )
}

export default UserDetails
