import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsAction } from '../actions/userAction';

const Profile = ({history}) => {

    const dispatch = useDispatch();
    const userDetails = useSelector(state=> state.userDetails);
    const {userInfo} = useSelector(state=>state.login) 



    const {user} = userDetails;

    const [uName,setUName] = useState('');
    const [uEmail,setUEmail] = useState('');

    const {name,email} = user

    useEffect(()=>{
        
        if(!email || !name){
            dispatch(userDetailsAction('profile'))
        }else{
           
            setUName(name);
            setUEmail(email);
        }
    
    },[dispatch,name,email])

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(userUpdateAction(name,email));
     
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
                type="email"
                value={uEmail}
                onChange={(e)=>setUEmail(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default Profile
