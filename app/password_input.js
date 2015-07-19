import React from "react";

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      text: "Show"
    };
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    if (this.state.type == "password") {
      this.setState({type: "input", text: "Hide"});
    } else {
      this.setState({type: "password", text: "Show"});
    }
  }

  render() {
    return (
      <div>
        <input type={this.state.type}/>
        <a onClick={this.toggleInput}>{this.state.text}</a>
      </div>
    );
  }
}
