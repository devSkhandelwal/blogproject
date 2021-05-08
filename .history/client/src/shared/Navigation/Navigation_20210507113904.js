import React from 'react'
import NavLink from './NavLink'
import './Navigation.css'


const Navigation = () => {
    return (
        <div className="navigation">
            <div className = "logo">
                <h2>Blog</h2>
            </div>
            <ul className="nav_list">
                <NavLink/>
            </ul>
        </div>
    )
}

export default Navigation
