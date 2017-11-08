import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import * as API from "../api/API";

class SignUpButton extends Component {
  render() {
    return (
      <div className="signup-group">
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.history.push("/signup");
          }}
        >
          SignUp
        </button>
      </div>
    );
  }
}

export default withRouter(SignUpButton);
