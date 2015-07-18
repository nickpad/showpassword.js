import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      type: "password",
      text: "Show"
    };
  },
  toggleInput: function(e) {
    if (this.state.type == "password") {
      this.setState({type: "input", text: "Hide"});
    } else {
      this.setState({type: "password", text: "Show"});
    }
  },
  render: function() {
    return (
      <div>
        <input type={this.state.type}/>
        <a onClick={this.toggleInput}>{this.state.text}</a>
      </div>
    )
  }
});
