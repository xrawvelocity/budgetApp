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
  Tooltip,
  PieChart,
  Pie,
  Legend,
  Line,
  LineChart,
} from "recharts";

export default class Home extends Component {
  state = {
    type: "inc",
    description: "",
    value: "",
    category: "",
    selected: "bar",
    transactions: [
      {
        type: "inc",
        description: "test",
        category: "salary",
        value: "1231",
        time: "7/14/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "testing length of description yes ok",
        category: "housing",
        value: "123",
        time: "7/15/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "housing",
        value: "1213",
        time: "7/16/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        category: "investing",
        value: "1232",
        time: "7/16/2020, 11:25:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "housing",
        value: "123",
        time: "5/18/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        category: "salary",
        value: "1223",
        time: "6/18/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "housing",
        value: "123",
        time: "6/4/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        category: "saving",
        value: "1923",
        time: "7/8/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "food",
        value: "1123",
        time: "7/18/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "food",
        value: "123",
        time: "7/1/2020, 11:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "food",
        value: "123",
        time: "7/12/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        category: "investing",
        value: "23",
        time: "7/19/2020, 1:05:37 PM",
      },
      {
        type: "exp",
        description: "test",
        category: "transportation",
        value: "1223",
        time: "7/11/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "test",
        category: "housing",
        value: "123",
        time: "7/11/2020, 11:05:37 PM",
      },
      {
        type: "inc",
        description: "hi",
        category: "housing",
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
            label: each.time.split(" ")[0].slice(0, -1),
            y: each.type === "inc" ? 1 * each.value : -each.value,
            description: each.description,
            name: each.category,
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
          category: this.state.category,
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
      category: "",
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
            description: each.description,
            name: each.category,
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
            <p className="home-transactions-each_category">
              {each.category}
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

  getExpensesAndIncomes = () => {
    return this.state.transactions
      .sort((a, b) => new Date(a.time) - new Date(b.time))
      .map((each) => {
        if (each.type === "exp") {
          return {
            expense: each.value,
            date: each.time.split(" ")[0].slice(0, -1),
          };
        } else if (each.type === "inc") {
          return {
            income: each.value,
            date: each.time.split(" ")[0].slice(0, -1),
          };
        }
      });
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
              <select
                onChange={this.handleChange}
                className="home-add__category"
                name="category"
                value={this.state.category}
              >
                <option value="">Select Category</option>
                <option value="salary">Salary</option>
                <option value="check">Check</option>
                <option value="housing">Housing</option>
                <option value="transportation">Transportation</option>
                <option value="food">Food</option>
                <option value="utilities">Utilities</option>
                <option value="insurance">Insurance</option>
                <option value="medical">Medical</option>
                <option value="saving">Saving</option>
                <option value="investing">Investing</option>
                <option value="debt">Debt</option>
                <option value="personal">Personal</option>
                <option value="recreation">Recreation</option>
                <option value="misc">Miscellaneous</option>
              </select>
              <button onClick={this.handleSubmit} className="home-add__btn">
                <FontAwesomeIcon icon={faCheckCircle} />
              </button>
            </div>
          </div>
          <div className="home-transactions">{this.loadTransactions()}</div>
        </div>
        <div className="home-right">
          <div className="home-right-buttons">
            <button
              className={
                this.state.selected === "bar"
                  ? "home-right-buttons_selected"
                  : ""
              }
              onClick={() => {
                this.setState({
                  selected: "bar",
                });
              }}
            >
              Bar Chart
            </button>
            <button
              className={
                this.state.selected === "pie"
                  ? "home-right-buttons_selected"
                  : ""
              }
              onClick={() => {
                this.setState({
                  selected: "pie",
                });
              }}
            >
              Pie Chart
            </button>
            <button
              className={
                this.state.selected === "line"
                  ? "home-right-buttons_selected"
                  : ""
              }
              onClick={() => {
                this.setState({
                  selected: "line",
                });
              }}
            >
              Line Chart
            </button>
          </div>
          {this.state.selected === "bar" && (
            <BarChart
              className="home-chart"
              width={700}
              height={700}
              data={this.state.chart}
              margin={{
                top: 130,
                right: 30,
                left: 20,
                bottom: 65,
              }}
            >
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={0} stroke="#000" />
              <Brush dataKey="label" height={30} stroke="#11703c" />
              <Bar dataKey="y" />
            </BarChart>
          )}
          {this.state.selected === "pie" && (
            <PieChart width={600} height={600}>
              <Pie
                dataKey="y"
                isAnimationActive={true}
                data={this.state.chart}
                cx={300}
                cy={300}
                outerRadius={160}
                fill="fill"
                label
              />

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          )}
          {this.state.selected === "line" && (
            <LineChart
              width={500}
              height={500}
              data={this.getExpensesAndIncomes()}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                dot={{ stroke: "red", strokeWidth: 2 }}
                type="monotone"
                dataKey="income"
                stroke="#20bd67"
              />
              <Line
                dot={{ stroke: "red", strokeWidth: 2 }}
                type="monotone"
                dataKey="expense"
                stroke="#d22"
              />
            </LineChart>
          )}
        </div>
      </div>
    );
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    let data = payload[0];
    console.log("data", data);
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className="custom-tooltip">
        <p>{formatter.format(data.value)}</p>
        <p>{label}</p>
        <p>{data.payload.description}</p>
      </div>
    );
  }

  return null;
}
