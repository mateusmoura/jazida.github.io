import { Component } from 'react';

export default class NgIf extends Component {
  render () {
    if (Object.keys(this.props.show).length) {
      return (
         this.props.children
      );
    } else {
      return false;
    }
  }
}