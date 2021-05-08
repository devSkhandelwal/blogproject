import React from 'react'
import { userLogoutAction } from '../../user/actions/userAction'

import { useDispatch} from 'react-redux'

import Button from '../formElements/Button'
import './NavLink.css'


const NavLink = () => {


    const dispatch = useDispatch()

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
                Profile
                <div>
                    <li>
                    <Button to="/">
                        Profile
                    </Button>
                    </li>
                    <li>
                    <div  type="button" onClick={logout}>
                        Logout
                    </div>
                    </li>
                </div>
            </li>
        </>
    )
}

export default NavLink;
