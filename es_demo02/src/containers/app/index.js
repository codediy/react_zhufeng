import React, {Component} from 'react'
import Header from '../../component/Header';
import Footer from '../../component/Footer';

import './index.css'
export default class App extends Component {
    render() {
        return (<div className="app">
            <Header/>
            <Footer/>
        </div>)
    }

}