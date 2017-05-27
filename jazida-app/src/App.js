import React, { Component } from 'react';
//import './App.scss';
//import './App.css';
import './css/normalize.css';
import './css/style.css';
import "../node_modules/animate.css/animate.min.css";
//require("style-loader!css-loader!sass-loader!./sass/style.scss");

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main role="main">
          {this.props.children}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
