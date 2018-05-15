import React from "react";
import SearchView from "./SearchView/";
import FlightsView from "./FlightsView/";

/* eslint-disable spaced-comment */

class App extends React.Component {
  state = {
    searchData: {
      depart: "2018-05-13",
      return: "2018-05-15",
      from: "WAW",
      to: "ATL",
    },
    airports: [],
    // /*
    view: "search",
    /*/
    view: "flights",
    //*/
    //*/
  }

  async componentDidMount() {
    const result = await fetch("https://warsawjs-flights-api.herokuapp.com/airports").then(res => res.json());

    this.setState(
      {
        airports: result.map(r => ({
          code: r.code,
          city: r.city,
        })),
      },
    );
  }

  onSearch = (searchData) => {
    this.setState({
      searchData,
      view: "flights",
    });
  }

  goToSearch = () => {
    this.setState({
      view: "search",
    });
  }

  render() {
    if (this.state.view === "search") {
      return (<SearchView onSearch={this.onSearch} searchData={this.state.searchData} airports={this.state.airports} />);
    } else if (this.state.view === "flights") {
      return (<FlightsView searchData={this.state.searchData} goToSearch={this.goToSearch} />);
    }

    return null;
  }
}

export default App;
