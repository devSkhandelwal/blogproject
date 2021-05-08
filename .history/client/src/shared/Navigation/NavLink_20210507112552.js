import React from 'react'

import Button from '../formElements/Button'

const NavLink = () => {
    return (
        <>
            <li>
                <Button to="/home">
                    Home
                </Button>
            </li>
            <li className="dropDown">
                <Button to="/home">
                    Profile
                </Button>
                <div>
                    <li>
                    <Button to="/home">
                        Profile
                    </Button>
                    </li>
                    <li>
                    <Button to="/home">
                        Logout
                    </Button>
                    </li>
                </div>
            </li>
        </>
    )
}

export default NavLink;
