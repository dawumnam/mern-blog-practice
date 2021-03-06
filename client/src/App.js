import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Auth} path="/auth" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
