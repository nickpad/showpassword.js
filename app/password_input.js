import React from 'react';

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      text: 'Show',
    };
    this.toggleInput = this.toggleInput.bind(this);
  }

  getClassName() {
    let className = '';

    if (this.state.type === 'password') {
      className = 'flat-button';
    } else {
      className = 'flat-button pressed';
    }

    return className;
  }

  render() {
    return (
      <div>
        <input type={this.state.type} ref="input"/>
        <a className={this.getClassName()} onClick={this.toggleInput} ref="button">
          {this.state.text}
        </a>
      </div>
    );
  }

  toggleInput() {
    if (this.state.type === 'password') {
      this.setState({type: 'input', text: 'Hide'});
    } else {
      this.setState({type: 'password', text: 'Show'});
    }
  }
}
