import React from 'react'
import { USER_LOGOUT } from '../../user/constants/userConstants';

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
                    <Button  type="button" onClick={USER_LOGOUT}>
                        Logout
                    </Button>
                    </li>
                </div>
            </li>
        </>
    )
}

export default NavLink;
