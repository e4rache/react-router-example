import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Greeter from "./components/Greeter";
import Home from "./components/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/greeter" component={Greeter} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
