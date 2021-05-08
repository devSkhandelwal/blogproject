import React, { useState } from 'react'

const Profile = () => {


    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dipatch(userUpdateAction())
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
            <input/>
            <button type="submit">Update</button>
        </form>
    )
}

export default Profile
