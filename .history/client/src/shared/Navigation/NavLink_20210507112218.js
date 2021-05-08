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
            </li>
        </>
    )
}

export default NavLink;
