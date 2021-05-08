import React from 'react'
import NavLink from './NavLink'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className = "logo">
                <h2>Blog</h2>
            </div>
            <ul>
                <NavLink/>
            </ul>
        </div>
    )
}

export default Navigation
