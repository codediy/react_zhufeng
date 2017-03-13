import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index';

class App extends Component {
    render() {
        const styles = {
                'color': 'red',
                'fontSize': '20px'
            },
            tip = "tipName";

        return (
                <div className="container" style={styles}>
                    <span>{tip}</span>
                </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector("#app"));
