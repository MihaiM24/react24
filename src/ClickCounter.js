import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
