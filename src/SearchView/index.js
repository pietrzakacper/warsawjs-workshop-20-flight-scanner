import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TopBar from "../TopBar/";
import { SerachSectionInput, SerachSectionSelect } from "../SearchSection/";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  search: {
    margin: "0 auto",
    maxWidth: 800,
    paddingTop: 16,
  },
});

class SearchView extends React.Component {
  constructor({ searchData }) {
    super();
    this.state = {
      to: "",
      from: "",
      depart: "",
      return: "",
      ...searchData,
    };
  }

  onToChange = (e) => {
    this.setState({
      to: e.target.value,
    });
  }

  onFromChange = (e) => {
    this.setState({
      from: e.target.value,
    });
  }

  onDepartChange = (e) => {
    this.setState({
      depart: e.target.value,
    });
  }

  onReturnChange = (e) => {
    this.setState({
      return: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!(this.state.to && this.state.from && this.state.depart && this.state.return)) {
      return;
    }

    this.props.onSearch({
      to: this.state.to,
      from: this.state.from,
      depart: this.state.depart,
      return: this.state.return,
    });
  }

  render() {
    const options = this.props.airports;
    const { classes } = this.props;

    return (
      <div>
        <TopBar />
        <div className={classes.toolbar} />
        <form onSubmit={this.onSubmit} className={classes.search}>
          <div className="field is-grouped" />

          <Grid container spacing={24}>
            <Grid item xs={12} sm={3}>
              <SerachSectionSelect label="From" options={options} value={this.state.from} onChange={this.onFromChange} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <SerachSectionSelect label="To" options={options} value={this.state.to} onChange={this.onToChange} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <SerachSectionInput label="Depart" type="date" value={this.state.depart} onChange={this.onDepartChange} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <SerachSectionInput label="Return" type="date" value={this.state.return} onChange={this.onReturnChange} />
            </Grid>
          </Grid>

          <Button variant="raised" color="primary" type="submit" margin="normal">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SearchView);