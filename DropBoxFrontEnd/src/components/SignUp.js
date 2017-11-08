import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class SignUp extends Component {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired
  };

  state = {
    username: "",
    password: ""
  };

  componentWillMount() {
    this.setState({
      username: "",
      password: ""
    });
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-3">
          <form>
            <div className="form-group">
              <h1>SignUp</h1>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                label="username"
                placeholder="enter username"
                value={this.state.username}
                onChange={event => {
                  this.setState({
                    username: event.target.value
                  });
                }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                label="password"
                placeholder="enter password"
                value={this.state.password}
                onChange={event => {
                  this.setState({
                    password: event.target.value
                  });
                }}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.props.handleSignUp(this.state)}
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
