import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import TopBar from '../TopBar/'
import { SearchSectionInput, SearchSectionSelect } from './SearchSection'

const styles = () => ({
  search: {
    margin: '0 auto',
    maxWidth: 800,
    paddingTop: 16,
  }
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
    const {airports, classes} = this.props
    const {from, to, departDate, returnDate} = this.state

    return (
      <div>
      <TopBar />
      <form onSubmit={this.onSubmit} className={classes.search}>
        <div className="field is-grouped" />

        <Grid container spacing={24}>
            <SearchSectionSelect
              label="From"
              options={airports}
              value={from}
              onChange={this.onChange('from')}
            />
            <SearchSectionSelect
              label="To"
              options={airports}
              value={to}
              onChange={this.onChange('to')}
            />
            <SearchSectionInput
              label="Depart"
              type="date"
              value={departDate}
              onChange={this.onChange('departDate')} />
            <SearchSectionInput
              label="Return"
              type="date"
              value={returnDate}
              onChange={this.onChange('returnDate')} />
        </Grid>

        <Button variant="raised" color="primary" type="submit" >
          Search
        </Button>
      </form>
    </div>
    )
  }
}

export default withStyles(styles)(SearchView)