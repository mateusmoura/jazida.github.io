import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.scss';
//import './App.css';
import './css/style.css';
//require("style-loader!css-loader!sass-loader!./sass/style.scss");

class App extends Component {
  render() {
    return (
      <header>
        <div className="center">
          <h1><a href="#this"><img src="img/lgo/logo.png" alt="Jazida" /></a></h1>
          <nav>
            <a href="#this" className="btn btn-link">Início</a>
            <a href="#this" className="btn btn-link">Planos</a>
            <a href="#this" className="btn btn-link">Tutoriais</a>
            <a href="#this" className="btn btn-link">Login</a>
            <a href="#this" className="btn btn-green">Cadastre-se</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default App;
