import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      direction: "top",
    };
  }

  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({ direction: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <div>
          <h1>ToolTip</h1>

          <div className="form-div">
            <label>Select Direction of tooltip!</label>
            <select
              className="form-select"
              onChange={this.handleDirectionInput}
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
            </select>
          </div>
        </div>
      
      <Tooltip direction={this.state.direction}>
        
       <Button/>
      </Tooltip>


      </div>
    );
  }
}
