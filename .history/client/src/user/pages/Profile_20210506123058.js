import React from 'react'

const Profile = () => {
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
