import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';


const Tree = (props) => {
    console.log(props);
    return (
        <div  className={getClassName(1)}>
            <div>测试一下 | {props.name}</div>
            {buildNode(props.data, 1)}
        </div>
    )
}

const Node = (props) => {
    console.log(props);
    return (
        <div id={props.id} className={getClassName(props.level)}>
            <div>{props.name} | {props.type} </div>
            {buildNode(props.children, props.level+1)}
        </div>
    )
}

const buildNode = (data, level) => {
    console.log('level', level)
    if (data) {
        var nodes = [];
        data.map(function(item) {
            nodes.push(<Node key={`Node#${item.id}`} level={level} {...item} />)
        });
        return nodes;
    } 
}


const getClassName = (level) => {
    console.log(level);
    return `level${level}`
}

export {Tree, Node}