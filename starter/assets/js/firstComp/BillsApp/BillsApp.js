import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import Menu from "./Menu";

export default class BillsApp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="BillsApp">
        <Header />
        <AllBills />
        <Menu />
      </div>
    );
  }
}
