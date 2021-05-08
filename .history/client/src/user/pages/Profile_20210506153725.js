import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsAction } from '../actions/userAction';

const Profile = ({history}) => {

    const dispatch = useDispatch();
    const userDetails = useSelector(state=> state.userDetails);
    const {userInfo} = useSelector(state=>state.login) 

    const {name,email} = userDetails;

    const [uName,setUName] = useState('');
    const [uEmail,setUEmail] = useState('');


    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }else if(!user||!name){
            dispatch(userDetailsAction('profile'))
        }
        
        
    },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(userUpdateAction(name,email));
        setUName('');
        setUEmail('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                name="name"
                id="name"
                type="text"
                value={uName}
                onChange={(e)=>setUName(e.target.value)}
            />
            <input
                name="email"
                id="email"
                type="text"
                value={uEmail}
                onChange={(e)=>setUEmail(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default Profile
