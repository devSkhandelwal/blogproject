import React, { useState,useEffect } from 'react'
import { userDetailsAction, userLogoutAction } from '../../user/actions/userAction'

import { useDispatch,useSelector} from 'react-redux'

import Button from '../formElements/Button'
import './NavLink.css'



const NavLink = () => {


    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.login)
    const {user} = useSelector(state => state.userDetails)
    let routes;
    
    useEffect(()=>{
        dispatch(userDetailsAction(userInfo.id))
    },[dispatch,userInfo])

    const [open,setOpen] = useState(false)

    const logout = () =>{
        dispatch(userLogoutAction());
    }

    if(userInfo){
        if(user.isAdmin){
            return(
                <>
                    <li>
                        <Button to="">Admin Panel</Button>
                    </li>
                </>
            )
        }else{
            return(
                <>
                    <li>
                        <Button to="/add/newpost">Create Post</Button>
                    </li>
                    <li>
                        <Button to="/register">
                            {user.name}
                        </Button>
                        <ul>
                            <li>
                                <Button to="">
                                    Profile
                                </Button>
                            </li>
                            <li>
                                <Button type="button" onClick={logout}>
                                    logout
                                </Button>
                            </li>
                        </ul>
                    </li>
                </>
            )
        }
    }else{
        return(
            <>
                <li>
                    <Button to="/login">Login</Button>
                </li>
                <li>
                    <Button to="/register">Register</Button>
                </li>
            </>
        )
        
    }

}

export default NavLink;
