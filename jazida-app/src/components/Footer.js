import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../img/lgo/logo-2.png';

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className="center">
          <p>© Todos os direitos reservados - Jazida 2017 <a href="mailto:contato@jazida.com" className="btn btn-link">contato@jazida.com</a></p>

          <h3><NavLink to='/' className="btn btn-link"><img src={logo} alt="Jazida" /></NavLink></h3>
        </div>
      </footer>
    )
  };
} 