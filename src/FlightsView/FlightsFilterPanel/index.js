import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { Divider } from '@material-ui/core'

import FlightsFilter from './FlightsFilter'


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 400,
    marginTop: 64
  }
})

class FlightsFilterPanel extends React.Component {
  state = {
    priceFilter: {
      min: 0,
      max: 0,
      toggled: false,
      propToFilter: 'price',
      label: 'Price'
    },
    outboundTransfersFilter: {
      min: 0,
      max: 0,
      toggled: false,
      propToFilter: 'outboundTransfers',
      label: 'Outbound Transfers'
    },
    inboundTransfersFilter: {
      min: 0,
      max: 0,
      toggled: false,
      propToFilter: 'inboundTransfers',
      label: 'Inbound Transfers'
    }
  }

  updateFilter = filterName => (fieldToUpdate, checkbox = false) => (e) => {
    const valueToUpdate = checkbox
      ? e.target.checked
      : +e.target.value

    const newFilter =  {
      ...this.state[filterName],
      [fieldToUpdate]: valueToUpdate
    }

    const newState = {
      ...this.state,
      [filterName]: newFilter
    }

    this.setState(newState, () => {
      const toggledFilters = Object.values(this.state).filter(
          filter => filter.toggled
      )

      this.props.setFilters(toggledFilters)
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
        {
          Object.keys(this.state).map((filterName, index, {length}) => [
              <FlightsFilter
                key={filterName}
                filterLabel={this.state[filterName].label}
                min={this.state[filterName].min}
                max={this.state[filterName].max}
                toggled={this.state[filterName].toggled}
                updateFilter={this.updateFilter(filterName)}
              />,
              index === length - 1 && <Divider />
          ])
        }
        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles)(FlightsFilterPanel)