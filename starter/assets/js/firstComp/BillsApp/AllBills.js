import React, { Component } from "react";

export default class AllBills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showAllBills = bill => {
    const bills = this.props.allBills;
    if (bills.length > 0) {
      return bills.map((bill, index) => {
        return (
          <li className="bill" key={index}>
            <div className="company">
              <div className="logo">
                {" "}
                <img
                  src="https://cdn1.spiegel.de/images/image-1392206-860_poster_16x9-khrb-1392206.jpg"
                  alt=""
                />
              </div>
              <div className="title">{bill.business_name}</div>
            </div>
            <div className="price">{bill.price}</div>
          </li>
        );
      });
    } else {
      return (
        <li className="bill">
          <div className="no-bills"> Please add a bill</div>
        </li>
      );
    }
  };

  billsTotalAmount = () => {
    const bills = this.props.allBills;
    let total = 0;

    for (var i = 0; i < bills.length; i++) {
      total += parseInt(bills[i].price);
    }
    if (bills.length > 0) {
      return total;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <section id="AllBills">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Amount:</div>
            <div className="number">{this.billsTotalAmount()}</div>
          </div>

          <ul className="bills-list">{this.showAllBills()}</ul>
        </div>
      </section>
    );
  }
}
