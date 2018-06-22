import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

class Header extends Component {

  render() {
    const { classes, location } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              My Reads
            </Typography>
            {
              location.pathname !== '/search'
                ?             <Link to="/search">
              <Button 
                onClick={this.handleClick}
                color="inherit">Search</Button>
            </Link>
            : <Link to="/">
              <Button 
                onClick={this.handleClick}
                color="inherit">Back</Button>
            </Link>
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Header));


<Link to="/search">
<Typography variant="button">Search</Typography>
</Link>