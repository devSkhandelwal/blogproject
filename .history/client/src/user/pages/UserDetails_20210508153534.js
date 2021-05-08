import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { userDetailsAction } from '../actions/userAction'

const UserDetails = () => {

    const userId = useParams().userId
    console.log(userId)

    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state.userDetails)
    const {user,loading,error} = userDetails


    useEffect(()=>{
        if(user || userId){
            dispatch(userDetailsAction(userId))
        }
        
    },[dispatch,userId])



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
