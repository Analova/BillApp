import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import Menu from "./Menu";
import AddBill from "./AddBill";

export default class BillsApp extends Component {
  constructor() {
    super();
    this.state = {
      addBillOpen: false,
      AllBills: []
    };
  }

  clickeAddBillBtn = () => {
    this.setState({
      addBillOpen: !this.state.addBillOpen
    });
  };

  render() {
    return (
      <div id="BillsApp">
        <Header />
        <AllBills />
        <AddBill addBillOpen={this.state.addBillOpen} />
        <div className="content-bg" />
        <Menu clickeAddBillBtn={this.clickeAddBillBtn} />
      </div>
    );
  }
}
