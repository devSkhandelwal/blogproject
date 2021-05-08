import React from 'react'
import NavLink from './NavLink'
import './Navigation.css'
import Button from '../formElements/Button'


const Navigation = () => {
    return (
        <div className="navigation">
            <div className = "logo">
                <h2>
                    <Button to="/">
                        Blog
                    </Button>
                </h2>
            </div>
            <ul className="nav_list">
                <NavLink/>
            </ul>
        </div>
    )
}

export default Navigation
