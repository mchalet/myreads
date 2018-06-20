import React, { Component } from "react";
import { Divider } from "@material-ui/core";

var style = {
  background: "green",
  height: 75
};

class Header extends Component {
  render() {
    return (
      <div style={style}>
        <h1>My Reads</h1>
      </div>
    );
  }
}

export default Header;
