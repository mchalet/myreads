import React, { Component } from "react";

import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

var style = {
  background: green[500],
  height: 75
};

class Header extends Component {
  render() {
    return (
      <div style={style}>
        <Typography variant="display3">My Reads</Typography>
      </div>
    );
  }
}

export default Header;
