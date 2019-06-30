import React, { Component } from "react";
import ReactDOM from "react-dom";
import BillsApp from "./BillsApp/BillsApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
    return (
      <div>
        <BillsApp />
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<App />, app);
