import React from "react";
import {
  Router,
  Link,
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

export default function Links() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <NoMatch default />
      </Router>
    </div>
  );
}

//https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change