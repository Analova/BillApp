import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import Menu from "./Menu";
import AddBill from "./AddBill";

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
        <AddBill />
        <div className="content-bg" />

        <Menu />
      </div>
    );
  }
}
