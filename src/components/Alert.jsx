import React from 'react';
import './style.css';

export default function Alert(props) {
    return (
        <div className='fixed-alert'>
            {props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}
