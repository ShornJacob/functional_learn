import React from "react";
import {
  Router,
  Link,
  navigate,
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";

//https://reach.tech/router/api/navigate

const About = () => <div>You are on the about page</div>
const Home = () => <div><span>You are home</span><a href="/about">about</a></div>
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