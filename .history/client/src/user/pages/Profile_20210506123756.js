import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.login)

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dipatch(userUpdateAction(name,email));
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
