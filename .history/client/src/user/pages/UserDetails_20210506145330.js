import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDetailsAction } from '../actions/userAction'

const UserDetails = () => {

    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state.userDetails)
    const {user,loading,error} = userDetails
    useEffect(()=>{
        dispatch(userDetailsAction(id))
    },[])



    return (
        <div>
            {
                loading ? (<h2>loading</h2>) : error ? (<h2>error</h2>) :(
                    <div>
                        {user._id}
                    </div>
                )
            }
        </div>
    )
}

export default UserDetails
