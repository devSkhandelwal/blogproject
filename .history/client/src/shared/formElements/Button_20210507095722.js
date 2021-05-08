import React from 'react';

import './Button.css'
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
            <button type={props.type} className={props.varient} {...props}>
                {props.children}
            </button>
        )
    }
}

export default Button
