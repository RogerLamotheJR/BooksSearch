import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/" text-align="center">
        React Reading List
      </a>
      <Link to="/books"><button style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    Saved Books </button></Link>
    </nav>
  );
}

export default Nav;
