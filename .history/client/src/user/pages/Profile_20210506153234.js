import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsAction } from '../actions/userAction';

const Profile = () => {

    const dispatch = useDispatch();
    const userDetails = useSelector(state=> state.userDetails);
    const {userInfo} = useSelector(state=>state.logon) 

    

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');


    useEffect(()=>{
        
        dispatch(userDetailsAction('profile'))
    },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(userUpdateAction(name,email));
        setName('');
        setEmail('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input
                name="email"
                id="email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default Profile
