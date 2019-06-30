import React, { Component } from "react";

export default class AllBills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showAllBills = bill => {
    const bills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return bills.map(() => {
      return (
        <li className="bill" key={bill}>
          <div className="company">
            <div className="logo">
              {" "}
              <img
                src="https://cdn1.spiegel.de/images/image-1392206-860_poster_16x9-khrb-1392206.jpg"
                alt=""
              />
            </div>
            <div className="title">Spotify</div>
          </div>
          <div className="price">$-25.99</div>
        </li>
      );
    });
  };

  render() {
    return (
      <section id="AllBills">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Amount:</div>
            <div className="number">$874</div>
          </div>

          <ul className="bills-list">{this.showAllBills()}</ul>
        </div>
      </section>
    );
  }
}
