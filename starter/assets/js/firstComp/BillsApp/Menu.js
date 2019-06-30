import React, { Component } from "react";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav id="floating-menu">
        <div className="link">
          <div className="icon">
            <i className="fab fa-cc-mastercard" />
          </div>
          <div className="text">text</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fab fa-cc-mastercard" />
          </div>
          <div className="text">save</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fab fa-cc-mastercard" />
          </div>
          <div className="text">transfer</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fab fa-cc-mastercard" />
          </div>
          <div className="text">settings</div>
        </div>
        <div className="add-button">
          <div className="icon-plus">+</div>
        </div>
      </nav>
    );
  }
}
