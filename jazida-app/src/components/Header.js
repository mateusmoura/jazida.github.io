import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/lgo/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="center">
          <h1><NavLink to="/"><img src={logo} alt="Jazida" /></NavLink></h1>
          <nav>
            <NavLink to="/" className="btn btn-link">Início</NavLink>
            <NavLink to="/planos" className="btn btn-link">Planos</NavLink>
            <NavLink to="/tutoriais" className="btn btn-link">Tutoriais</NavLink>
            <NavLink to="/login" className="btn btn-link">Login</NavLink>
            <NavLink to="/cadastro" className="btn btn-green">Cadastre-se</NavLink>
          </nav>
        </div>
      </header>
    );
  };
}