import React, { useState } from 'react'

const Profile = () => {


    const [name,setName] = useState('')

    return (
        <form>
            <input
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input/>
        </form>
    )
}

export default Profile
