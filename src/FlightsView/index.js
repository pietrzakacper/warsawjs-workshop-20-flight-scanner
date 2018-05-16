import React, { Fragment } from "react";
import Flight from "../Flight";
import TopBar from "../TopBar";
import FlightsFilter from "../FlightsFilter";

import styles from "./styles.css";

export default class FlightsView extends React.Component {
  state = {
    flights: [],
    filteredFlights: [],
  }

  async componentDidMount() {
    const url = "https://warsawjs-flights-api.herokuapp.com/flights";
    const {
      to, from, depart, return: returnDate,
    } = this.props.searchData;

    const result = await fetch(`${url}/${depart}/${returnDate}/${from}/${to}`).then(res => res.json());

    this.setState({
      flights: result,
      filteredFlights: result,
    });
  }

  filterFlights = (filters = []) => {
    console.log(filters);

    this.setState({
      filteredFlights: filters.reduce((prev, curr) => curr(prev), this.state.flights),
    });
  }

  render() {
    const flights = this.state.filteredFlights
      .map(flight => <Flight key={flight.id} flight={flight} />);

    return (
      <Fragment>
        <TopBar>
          <button onClick={this.props.goToSearch}><i className="fas fa-chevron-left" /></button>
        </TopBar>
        <div className={styles.container}>
          <FlightsFilter filterFlights={this.filterFlights} />
          <div className={styles.flights}>
            {flights}
          </div>
        </div>
      </Fragment>
    );
  }
}