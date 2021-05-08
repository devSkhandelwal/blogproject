import React from 'react'

import './Error.css'

const Error = ({children,vareint}) => {
    return (
        <div className={vareint}>
            {children}
        </div>
    )
}

export default Error
