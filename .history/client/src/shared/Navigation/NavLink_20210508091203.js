import React, { useState } from 'react'
import { userLogoutAction } from '../../user/actions/userAction'

import { useDispatch} from 'react-redux'

import Button from '../formElements/Button'
import './NavLink.css'


const NavLink = () => {

    const [open,setOpen] = useState(false)

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
            <li className="head_dropdown" onMouseEnter={(e)=>setOpen(true)} onMouseLeave={(e)=>setOpen(false)}>
                Profile
                {open && (
                    <ul className="dropdown" onMouseLeave={(e)=>setOpen(false)}>
                        <li>
                        <Button to="/profile">
                            Profile
                        </Button>
                        </li>
                        <li>
                            <div  type="button" onClick={logout}>
                                Logout
                            </div>
                        </li>
                    </ul>
                )}
            </li>
        </>
    )
}

export default NavLink;
