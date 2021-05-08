import React from 'react'
import { userLogoutAction } from '../../user/actions/userAction'


import Button from '../formElements/Button'

const NavLink = () => {

    const logout = () =>{
        dispatch(userLogoutAction());
    }


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
                    <Button  type="button" onClick={logout}>
                        Logout
                    </Button>
                    </li>
                </div>
            </li>
        </>
    )
}

export default NavLink;
