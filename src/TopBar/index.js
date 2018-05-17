import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  plane: {
    transform: "rotate(-45deg)",
    marginRight: 8,
  },
  menuButton: {
    marginLeft: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const TopBar = ({ children, classes }) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      { children }

      <Typography variant="title" color="inherit" className={classes.menuButton}>
        <i className={`fas fa-plane ${classes.plane}`} />
          FlightScanner
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(TopBar);
