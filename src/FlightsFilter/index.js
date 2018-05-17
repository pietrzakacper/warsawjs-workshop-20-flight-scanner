import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

const drawerWidth = 400;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  center: {
    display: "flex",
    justifyContent: "center",
  },
});

class FlightsFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      priceToggle: false,
      priceMin: 0,
      priceMax: 0,

      transfersToggle: false,
      transfersNo: 1,
    };
  }

  updateStateField = (field, checkbox = false) => (e) => {
    const newState = {};

    if (checkbox) {
      newState[field] = e.target.checked;
    } else {
      newState[field] = e.target.value;
    }

    this.setState(newState, () => {
      this.props.filterFlights(
        [
          flights => flights.filter(
            f => (!this.state.priceToggle) ||
            (f.price >= this.state.priceMin && f.price <= this.state.priceMax)),
          flights => flights.filter(
            f => (!this.state.transfersToggle) ||
            (
              f.outboundPath.length <= +this.state.transfersNo + 1 &&
              f.inboundPath.length <= +this.state.transfersNo + 1
            )),
        ],
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <ListItemText disableTypography primary={(<Typography variant="headline">Price</Typography>)} />
          </ListItem>
          <ListItem>
            <Grid container spacing="16">
              <Grid item xs={3} className={classes.center}>
                <Switch
                  color="primary"
                  onChange={this.updateStateField("priceToggle", true)}
                  checked={this.state.priceToggle}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Min"
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                  type="number"
                  onChange={this.updateStateField("priceMin")}
                  value={this.state.priceMin}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Max"
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                  type="number"
                  onChange={this.updateStateField("priceMax")}
                  value={this.state.priceMax}
                  fullWidth
                />
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText disableTypography primary={(<Typography variant="headline">Transfers</Typography>)} />
          </ListItem>
          <ListItem>
            <Grid container spacing="16">
              <Grid item xs={3} className={classes.center}>
                <Switch
                  color="primary"
                  onChange={this.updateStateField("transfersToggle", true)}
                  checked={this.state.transfersToggle}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Max"
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                  type="number"
                  onChange={this.updateStateField("transfersNo")}
                  value={this.state.transfersNo}
                  fullWidth
                />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(FlightsFilter);