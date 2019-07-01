import React, { Component } from "react";

export default class AddBill extends Component {
  constructor() {
    super();
    this.state = {
      business_name: "",
      price: 0
    };
  }

  inputChange = event => {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      }
      //  () => {
      //     console.log(this.state);
      //   }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.saveBill(this.state);
  };
  render() {
    return (
      <section
        id="AddBill"
        className={`${this.props.addBillOpen === true ? "active" : ""}`}
      >
        <div className="container">
          <h2>Add a bill</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <lable htmlFor="business_name">Business Name</lable>
              <input
                type="text"
                id="business_name"
                name="business_name"
                onChange={this.inputChange}
                value={this.state.business_name}
              />
            </div>
            <div className="form-group">
              <lable htmlFor="price">Price</lable>
              <input
                type="text"
                id="price"
                name="price"
                onChange={this.inputChange}
                value={this.state.price}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}
