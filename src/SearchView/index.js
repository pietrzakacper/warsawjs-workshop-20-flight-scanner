import React from "react"

import { withStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

import TopBar from "../TopBar/"
import { SerachSectionInput, SerachSectionSelect } from "../SearchSection/"

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
})

class SearchView extends React.Component {
  state = {
      to: null,
      from: null,
      departDate: null,
      returnDate: null
  }

  onChange = field => e => {
    this.setState({
      [field]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {to, from, departDate, returnDate} = this.state

    if (!(to && from && departDate && returnDate)) {
      return
    }

    this.props.onSearch({
      to, from, departDate, returnDate
    })
  }

  render() {
    const {airports} = this.props
    const {classes} = this.props
    const {from, to, departDate, returnDate} = this.state

    return (
      <div>
        <TopBar />
        <div className={classes.toolbar} />
        <form onSubmit={this.onSubmit} className={classes.search}>
          <div className="field is-grouped" />

          <SerachSectionSelect
            label="From"
            options={airports} value={from || ''}
            onChange={this.onChange('from')}
          />
          <SerachSectionSelect
            label="To"
            options={airports}
            value={to || ''}
            onChange={this.onChange('to')}
          />
          <SerachSectionInput
            label="Depart"
            type="date"
            value={departDate || ''}
            onChange={this.onChange('departDate')}
          />
          <SerachSectionInput
            label="Return"
            type="date"
            value={returnDate || ''}
            onChange={this.onChange('returnDate')}
          />

          <Button variant="raised" color="primary" type="submit" margin="normal">
            Search
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(SearchView)