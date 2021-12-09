import React, { Component } from "react";
import Footer from "./Components/Footer.js";
import News from "./Components/News.js";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News key="general3" category="general" />}
            />
            <Route
              path="/about"
              element={<News key="general2" category="general" />}
            />
            <Route
              path="/contact"
              element={<News key="general3" category="general" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              path="/science"
              element={<News key="science" category="science" />}
            />
            <Route
              path="/tech"
              element={<News key="technology" category="technology" />}
            />
            <Route
              path="/entertain"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              path="/business"
              element={<News key="business" category="business" />}
            />
          </Routes>
          <Footer />
          {/* <Switch>
        <Route exact path="/">
      <News key="general" category="general"/>
      </Route>
        <Route exact path="/about">
      <News key="general2" category="general"/>
      </Route>
        <Route exact path="/contact">
      <News key="general3" category="general"/>
      </Route>
        <Route exact path="/sports">
      <News key="sports" category="sports"/>
      </Route>
        <Route exact path="/science">
      <News key="science" category="science"/>
      </Route>
        <Route exact path="/tech">
      <News key="technology" category="technology"/>
      </Route>
        <Route exact path="/entertain">
      <News key="entertainment" category="entertainment"/>
      </Route>
        <Route exact path="/business">
      <News key="business" category="business"/>
      </Route>
      </Switch>
      <Footer/> */}
        </Router>
      </>
    );
  }
}
