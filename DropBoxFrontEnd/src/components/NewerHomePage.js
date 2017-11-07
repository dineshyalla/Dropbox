import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import Message from "./Message";
import Login from "./Login";
import * as API from "../api/API";
import Welcome from "./Welcome";
import Example from "./example";
import SignUpButton from "./SignUpButton";
import SignUp from "./SignUp";
class NewerHomePage extends Component {
  state = {
    isLoggedIn: false,
    isSignedUp: false,
    message: "",
    username: ""
  };

  handleSubmit = userdata => {
    API.doLogin(userdata).then(status => {
      if (status === 201) {
        this.setState({
          isLoggedIn: true,
          message: "Welcome to my App..!!",
          username: userdata.username
        });
        this.props.history.push("/welcome");
      } else if (status === 401) {
        this.setState({
          isLoggedIn: false,
          message: "Wrong username or password. Try again..!!"
        });
      } else if (status === 501) {
        this.setState({
          isLoggedIn: false,
          message: "Enter username or password. Try again..!!"
        });
      } else if (status === 601) {
        this.setState({
          isLoggedIn: false,
          message: "Wrong username and password..!!"
        });
      }
    });
  };

  handleSignUp = userdata => {
    API.doSignUp(userdata).then(status => {
      if (status === 201) {
        this.setState({
          isSignedUp: true,
          message: "Successfull signUp!!"
        });
        this.props.history.push("/login");
      } else if (status === 401) {
        this.setState({
          isSignedUp: true,
          message: "Already Signed Up!!"
        });
      } else if (status === 501) {
        this.setState({
          isLoggedIn: false,
          message: "Enter username or password. Try again..!!"
        });
      }
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Route
          exact
          path="/"
          render={() => (
            <div className="login-group">
              <Message message="You have landed on my FitBit App!!" />
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Login
              </button>
              <SignUpButton />
            </div>
          )}
        />

        <Route
          exact
          path="/login"
          render={() => (
            <div>
              <Login handleSubmit={this.handleSubmit} />
              <Message message={this.state.message} />
            </div>
          )}
        />

        <Route
          exact
          path="/signup"
          render={() => (
            <div>
              <SignUp handleSignUp={this.handleSignUp} />
              <Message message={this.state.message} />
              {this.state.isSignedUp ? <Link to="/login"> Login </Link> : null}
            </div>
          )}
        />

        <Route
          exact
          path="/welcome"
          render={() => (
            <div>
              <Welcome username={this.state.username} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default withRouter(NewerHomePage);
