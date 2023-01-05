import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class AppSolution extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      context: {},
      name: "정연",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners

  
  }

  render() {
    return (
      <div
        className="App"
        style={{ background: this.state.settings.background }}
      >
        Hello, {this.state.name}!
        You ARe AWeSOME!!!!!!!!!
      </div>
    );
  }
}

export default AppSolution;
