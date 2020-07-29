import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Home from "./components/Home";

import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjCe0Tg9FBMYmmgkhA-GPab1XQ7kxX6Bg",
  authDomain: "pennykeep-1.firebaseapp.com",
  databaseURL: "https://pennykeep-1.firebaseio.com",
  projectId: "pennykeep-1",
  storageBucket: "pennykeep-1.appspot.com",
  messagingSenderId: "349381407115",
  appId: "1:349381407115:web:2501cf815ecd77d9c93f8e",
  measurementId: "G-HSVB7300GD",
};
let fbapp;
if (!firebase.apps.length) {
  fbapp = firebase.initializeApp(firebaseConfig)
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
    this.removeTransaction = this.removeTransaction.bind(this);
    this.app = fbapp;
    this.database = this.app.database().ref().child("transactions");

    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    const previousTransactions = this.state.transactions;

    this.database.on("child_added", (snap) => {
      previousTransactions.push({
        id: snap.key,
        transactionContent: snap.val().transactionContent,
      });

      this.setState({
        transactions: previousTransactions,
      });
    });

    this.database.on("child_removed", (snap) => {
      for (var i = 0; i < previousTransactions.length; i++) {
        if (previousTransactions[i].id === snap.key) {
          previousTransactions.splice(i, 1);
        }
      }

      this.setState({
        transactions: previousTransactions,
      });
    });
    
  }
  transactionContent;

  addTransaction(transaction) {
    this.database.push().set({ transactionContent: transaction });
  }

  removeTransaction(transactionId) {
    console.log("from the parent: " + transactionId);
    this.database.child(transactionId).remove();
  }

  render() {
    return !localStorage.getItem("PennyKeepID") ? (
      <div className="main">
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} />} />

          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />

          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />

          <Route exact path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    ) : (
      <div className="main">
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Home addTransaction={this.addTransaction} removeTransaction={this.removeTransaction}
          transactions={this.state.transactions}
          {...props} />} />

          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />

          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />

          <Route exact path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    );
  }
}
