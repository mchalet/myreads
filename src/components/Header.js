import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

function Header(props) {
  const { classes, location } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
          >
            My Reads
          </Typography>
          {location.pathname !== "/search" ? (
            <Link to="/search">
              <Button color="inherit">Search</Button>
            </Link>
          ) : (
            <Link to="/">
              <Button color="inherit">Back</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(Header));
