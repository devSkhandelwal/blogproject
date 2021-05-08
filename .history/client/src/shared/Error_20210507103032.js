import React from 'react'

const Error = ({children,vareint}) => {
    return (
        <div className={vareint}>
            {children}
        </div>
    )
}

export default Error
