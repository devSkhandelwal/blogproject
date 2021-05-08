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



    
}

export default NavLink;
