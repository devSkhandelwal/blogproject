import React from 'react';

import {Link} from 'react-router-dom';

const Button = (props) => {
    if(props.to){
        return(
            <Link to={props.to}>
                {props.children}
            </Link>
        )
    }
    if(props.type){
        return(
            <button type={props.type} {...props}>
                {props.children}
            </button>
        )
    }
}

export default Button
