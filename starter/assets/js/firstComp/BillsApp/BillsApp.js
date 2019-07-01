import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import Menu from "./Menu";
import AddBill from "./AddBill";
import update from "immutability-helper";

export default class BillsApp extends Component {
  constructor() {
    super();
    this.state = {
      addBillOpen: true,
      AllBills: []
    };
  }

  clickeAddBillBtn = () => {
    this.setState({
      addBillOpen: !this.state.addBillOpen
    });
  };

  saveBill = bill => {
    const newBills = update(this.state.AllBills, {
      $push: [bill]
    });
    this.setState(
      {
        allBills: newBills
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div id="BillsApp">
        <Header />
        <AllBills />
        <AddBill
          addBillOpen={this.state.addBillOpen}
          saveBill={this.saveBill}
        />
        <div className="content-bg" />
        <Menu clickeAddBillBtn={this.clickeAddBillBtn} />
      </div>
    );
  }
}
