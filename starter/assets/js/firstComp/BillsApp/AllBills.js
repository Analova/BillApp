import React, { Component } from "react";

export default class AllBills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section id="AllBills">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Amount:</div>
            <div className="number">$874</div>
          </div>

          <ul className="bills-list">
            <li className="bill">
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
            <li className="bill">
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
            <li className="bill">
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
          </ul>
        </div>
      </section>
    );
  }
}
