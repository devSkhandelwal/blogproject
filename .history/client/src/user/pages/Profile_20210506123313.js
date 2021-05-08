import React, { useState } from 'react'

const Profile = () => {


    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    return (
        <form>
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
