import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import NewerHomePage from "./components/NewerHomePage";
import Example from "./components/example";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <NewerHomePage/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
