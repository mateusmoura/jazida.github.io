import React, { Component } from 'react';
import MaskedInput from 'react-input-mask';

import PubSubJS from 'pubsub-js';

export default class CustomInput extends Component {

  constructor () {
    super();

    this.state = {errorMessage: ''};
  }

  componentDidMount() {
    PubSubJS.subscribe('validation-error', (topic, resp) => {
      if(resp.field === this.props.name) {
          this.setState({errorMessage: resp.msg});
      }
    });

    PubSubJS.subscribe('errors-clear', (topic) => {
      this.setState({errorMessage: ''});
    })
  }

  render() {
    let html = '';

    if(this.props.mask) {
      html = (
        <div className="form__group">
          <MaskedInput {...this.props} className={this.state.errorMessage ?  this.props.className + ' error' : this.props.className} />
          <span className="error">{this.state.errorMessage}</span>
        </div>
      );
    } else {
      html = (
        <div className="form__group">
          <input {...this.props} />
          <span className="error">{this.state.errorMessage}</span>
        </div>
      )
    }

    return html;
  }
}
