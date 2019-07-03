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
      addBillOpen: false,
      allBills: [
        {
          business_name: "gaico",
          price: 12,
          status: "unpaid"
        }
      ]
    };
  }

  clickeAddBillBtn = () => {
    this.setState({
      addBillOpen: !this.state.addBillOpen
    });
  };

  saveBill = bill => {
    const newBills = update(this.state.allBills, {
      $push: [bill]
    });
    this.setState(
      {
        allBills: newBills,
        addBillOpen: !this.state.addBillOpen
      },
      () => {
        console.log(this.state);
      }
    );
  };

  changeBillStatus = billIndex => {
    const allBills = this.state.allBills;
    let bill = allBills[billIndex];
    if (bill.status === "unpaid") {
      bill.status = "paid";
    } else {
      bill.status = "unpaid";
    }

    const newState = update(this.state, {
      allBills: {
        $set: allBills
      }
    });

    this.setState(newState, () => {
      console.log(this.state);
    });
    // console.log(allBills[billIndex]);
  };

  deleteBill = billIndex => {
    const allBills = this.state.allBills;
    allBills.splice(billIndex, 1);

    const newState = update(this.state, {
      allBills: {
        $set: allBills
      }
    });

    this.setState(newState);

    console.log(billIndex);
  };

  render() {
    return (
      <div id="BillsApp">
        <Header />
        <AllBills
          allBills={this.state.allBills}
          changeBillStatus={this.changeBillStatus}
          deleteBill={this.deleteBill}
        />
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
