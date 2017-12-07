import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

const Text = (props) => {
    return (
            <span {...props}>{props.children}</span>
        )
}

const InputText = (props) => {
    return (
        <input type="text" {...props} />
    )
}

const Hr = () => {
    return (
        <div className="hr"></div>
    )
}


export {Text, InputText}