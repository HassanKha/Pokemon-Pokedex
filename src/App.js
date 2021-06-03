import React, { Component } from "react";
import GlobalStyles from "./components/GlobalStyles";
import MyPokedex from "./pages/mypokedex";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Route path={["/", "/search"]}>
          <MyPokedex />
        </Route>
      </div>
    );
  }
}

export default App;
