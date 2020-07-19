import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  state = {
    type: "inc",
    description: "",
    value: "",
    transactions: [
      {
        type: "inc",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "inc",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
      {
        type: "inc",
        description: "test",
        value: "123",
        time: "7/18/2020, 11:05:37 PM"
      },
    ],
  };

  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = async () => {
    await this.setState({
      transactions: [
        ...this.state.transactions,
        {
          type: this.state.type,
          description: this.state.description,
          value:
            this.state.type === "inc" ? this.state.value : -this.state.value,
          time: new Date().toLocaleString()
        },
      ],
    });

    this.setState({
      type: "inc",
      description: "",
      value: "",
    });
  };

  loadTransactions = () => {
    return this.state.transactions.map((each) => {
      return (
        <div
          className={`home-transactions-each home-transactions-each_${each.type}`}
        >
          <h3 className="home-transactions-each_description">
            {each.description}
          </h3>
          <p className="home-transactions-each_value">{each.value}</p>
        </div>
      );
    });
  };

  getBalance = () => {
    let sum = 0;
    if (this.state.transactions.length > 0) {
      this.state.transactions.forEach((each) => {
        sum += Number(each.value);
      });
      return sum;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className="home">
        <div className="home-balance">
          ${this.getBalance()}
          {/* $####.## */}
        </div>
        <div className="home-add">
          <div className="home-add__container">
            <select
              onChange={this.handleChange}
              className="home-add__type"
              name="type"
              defaultValue="inc"
              value={this.state.type}
            >
              <option value="inc">+</option>
              <option value="exp">-</option>
            </select>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.description}
              name="description"
              className="home-add__description"
              placeholder="Add description"
            />
            <input
              onChange={this.handleChange}
              type="number"
              value={this.state.value}
              name="value"
              className="home-add__value"
              placeholder="Value"
            />
            <button onClick={this.handleSubmit} className="home-add__btn">
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
          </div>
        </div>
        <div className="home-transactions">{this.loadTransactions()}</div>
      </div>
    );
  }
}
