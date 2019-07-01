import React, { Component } from "react";

export default class AddBill extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section id="AddBill" className="active">
        <div className="container">
          <h2>Add a bill</h2>
          <form>
            <div className="form-group">
              <lable for="business_name">Business Name</lable>
              <input type="text" id="business_name" name="business_name" />
            </div>
            <div className="form-group">
              <lable for="price">Price</lable>
              <input type="text" id="price" name="price" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}
