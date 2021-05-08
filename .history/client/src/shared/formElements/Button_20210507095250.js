import React from 'react';

import {Link} from 'react-router-dom';

const Button = (props) => {
    if(props.to){
        return(
            <Link to={props.to}>
                {children}
            </Link>
        )
    }
    if(props.type){
        return(
            <button type={props.type} {...props}>

            </button>
        )
    }
}

export default Button
