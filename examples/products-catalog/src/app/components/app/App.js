import React, { Component } from 'react';
import { ProductsListContainer } from '../../../product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Product catalog built with React-IoC</h2>
                </header>
                <ProductsListContainer/>
                <footer></footer>
            </div>
        );
    }
}

export default App;

