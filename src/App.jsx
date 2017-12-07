import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

import './common/common.less'

import {Text, InputText} from './components/Common'
import {Tree, Node} from './components/Tree'

import {data} from "./data"
console.log(data)

/*class App extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="container">
              <Header tabName={this.state.current} />
              <Body onSetState={this.onSetState.bind(this)}/>
            </div>
        )
    }
}*/


const App = (props, status) => {
    return (
            <div >
                {/* <Text >Hello liuhan1</Text>
                <InputText name="input" value={status.input}/>
                <Text >{status.input}</Text> */}
                <Tree name="测试" data={data}></Tree>
            </div>
        )
}



const container = document.createElement('div');
//container.className = 'container';
render(<App  />, document.body.appendChild(container))