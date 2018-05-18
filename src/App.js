import React from "react"
import SearchView from "./SearchView/"
import FlightsView from "./FlightsView/"
import { fetchAirports } from "./App.service"

class App extends React.Component {
  state = {
    airports: [],
    view: "search",
    searchData: {
      depart: null,
      return: null,
      from: null,
      to: null
    }
  }

  async componentDidMount() {
    this.setState({
      airports: await fetchAirports()
    })
  }

  onSearch = (searchData) => {
    this.setState({
      searchData,
      view: 'flights'
    })
  }

  goToSearch = () => {
    this.setState({
      view: 'search'
    })
  }

  render() {
    const {airports, searchData} = this.state

    switch(this.state.view) {
      case 'search':
        return (
          <SearchView
            onSearch={this.onSearch}
            airports={airports}
          />
        )
      case 'flights':
        return (
          <FlightsView
            searchData={searchData}
            goToSearch={this.goToSearch}
          />
        )
      default:
        return null
    }
  }
}

export default App
