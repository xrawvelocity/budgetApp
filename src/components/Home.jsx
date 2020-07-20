import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default class Home extends Component {
  state = {
    type: "inc",
    description: "",
    value: "",
    transactions: [
      {
        type: "inc",
        description: "test",
        value: "1231",
        time: "7/14/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "testing length of description yes ok",
        value: "123",
        time: "7/15/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "1213",
        time: "7/16/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "5/18/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        value: "1223",
        time: "6/18/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "6/4/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        value: "1923",
        time: "7/8/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "1123",
        time: "7/18/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/1/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "123",
        time: "7/12/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        value: "23",
        time: "7/19/2020, 1:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        value: "1223",
        time: "7/11/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        value: "123",
        time: "7/11/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "hi",
        value: "420",
        time: "7/20/2020, 11:05:37 AM",
      },
    ],
    chart: [],
  };

  componentDidMount = async () => {
    await this.setState({
      chart: this.state.transactions
        .sort((a, b) => new Date(a.time) - new Date(b.time))
        .map((each) => {
          return {
            // x: new Date(each.time),
            // y: each.type === "inc" ? 1 * each.value : -each.value,
            label: each.time.split(" ")[0].slice(0, -1),
            y: each.type === "inc" ? 1 * each.value : -each.value,
            fill: `${each.type === "inc" ? "#20bd67" : "#d21"}`,
          };
        }),
    });
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
          time: new Date().toLocaleString(),
        },
      ],
    });

    this.setState({
      type: "inc",
      description: "",
      value: "",
    });

    await this.setState({
      chart: this.state.transactions
        .sort((a, b) => new Date(a.time) - new Date(b.time))
        .map((each) => {
          return {
            //     x: new Date(each.time),
            //     y: each.type === "inc" ? 1 * each.value : -each.value,
            label: each.time.split(" ")[0].slice(0, -1),
            y: each.type === "inc" ? 1 * each.value : -each.value,
            fill: `${each.type === "inc" ? "#20bd67" : "#d21"}`,
          };
        }),
    });
  };
  limitTitle = (title, limit = 28) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(" ")}...`;
    }
    return title;
  };

  loadTransactions = () => {
    return this.state.transactions
      .sort((b, a) => new Date(a.time) - new Date(b.time))
      .map((each) => {
        return (
          <div
            className={`home-transactions-each home-transactions-each_${each.type}`}
          >
            <p className="home-transactions-each_date">
              {each.time.split(" ")[0].slice(0, -1)}
            </p>
            <h3 className="home-transactions-each_description">
              {this.limitTitle(each.description)}
            </h3>
            <p className="home-transactions-each_value">
              {each.type === "inc" ? "+ " : "- "}${each.value}
            </p>
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
    console.log(this.state.chart);
    return (
      <div className="home">
        <div className="home-left">
          <div className="home-balance">Total: ${this.getBalance()}</div>
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
        <div className="home-right">
          <BarChart
            className="home-chart"
            width={700}
            height={500}
            data={this.state.chart}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="label" height={30} stroke="#11703c" />
            <Bar dataKey="y" />
          </BarChart>
        </div>
      </div>
    );
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{label}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
}
