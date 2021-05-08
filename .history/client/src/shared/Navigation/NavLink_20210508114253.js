import React, { useState } from 'react'
import { userLogoutAction } from '../../user/actions/userAction'

import { useDispatch} from 'react-redux'

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

    const dispatch = useDispatch()
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
        }
    }else{
        <>
            <li>
                <Button to="">Admin Panel</Button>
            </li>
        </>
    }

}

export default NavLink;
