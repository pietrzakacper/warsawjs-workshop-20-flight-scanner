import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'

import ArrowBack from '@material-ui/icons/ArrowBack'

import Flight from './Flight'
import TopBar from '../TopBar'
import FlightsFilterPanel from './FlightsFilterPanel'
import { fetchFlights } from './index.service'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    boxSizing: 'border-box',
    marginTop: 64
  }
})

class FlightsView extends React.Component {
  state = {
    flights: [],
    filters: []
  }

  async componentDidMount() {
    const {searchData} = this.props

    const flightsFetched = await fetchFlights(searchData)

    const flights = flightsFetched.map(flight => ({
        outboundTransfers: flight.outboundPath.length - 1,
        inboundTransfers: flight.inboundPath.length - 1,
        ...flight
      })
    )

    this.setState({
      flights
    })
  }

  setFilters = filters => {
    this.setState({filters})
  }

  renderFlights() {
    const {flights, filters} = this.state

    const filteredFlights = flights.filter(
      flight => filters.every(
        ({propToFilter, min, max}) =>
          min <= flight[propToFilter] &&
          flight[propToFilter] <= max
        )
    )

    const renderedFlights = filteredFlights.map(
      flight => <Flight key={flight.id} flight={flight}/>
    )

    return renderedFlights
  }

  render() {
    const { classes, goToSearch } = this.props

    return (
      <div className={classes.root}>
        <TopBar>
          <IconButton onClick={goToSearch} aria-label='Return' color='inherit'>
            <ArrowBack />
          </IconButton>
        </TopBar>

        <FlightsFilterPanel setFilters={this.setFilters} />

        <main className={classes.content}>
          {this.renderFlights()}
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(FlightsView)