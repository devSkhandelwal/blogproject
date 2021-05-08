import React from 'react';

import {Link} from 'react-router-dom';

const Button = () => {
    if(props.to){
        return(
            <Link to={props.to}>
                {children}
            </Link>
        )
    }
}

export default Button
