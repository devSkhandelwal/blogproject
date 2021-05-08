import React from 'react'
import { userLogoutAction } from '../../user/actions/userAction'

import { useDispatch} from 'react-redux'

import Button from '../formElements/Button'



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
                    <p  type="button" onClick={logout}>
                        Logout
                    </p>
                    </li>
                </div>
            </li>
        </>
    )
}

export default NavLink;
