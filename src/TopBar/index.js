import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  plane: {
    transform: 'rotate(45deg)',
    marginRight: 8,
  },
  menuButton: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar
})

const TopBar = ({ children, classes }) => (
  <React.Fragment>
   <AppBar position='absolute' className={classes.appBar}>
      <Toolbar>
        { children }

        <Typography variant='title' color='inherit' className={classes.menuButton}>
          <div className={classes.plane}>
            <AirplanemodeActive style={{ fontSize: 32 }} />
          </div>
          <span>FlightScanner</span>
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbar} />
  </React.Fragment>
)

export default withStyles(styles)(TopBar)
