import React from 'react'

import './Message.css'

const Message = ({children,vareint}) => {
    return (
        <div className={vareint}>
            {children}
        </div>
    )
}

export default Message
