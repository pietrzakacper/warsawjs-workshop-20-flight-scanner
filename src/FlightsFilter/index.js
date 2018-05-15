import React from "react";

import styles from "./styles.css";

export default class FlightsFilter extends React.Component {
  constructor() {
    super();

    this.priceToggle = React.createRef();
    this.priceMin = React.createRef();
    this.priceMax = React.createRef();
    this.transfersToggle = React.createRef();
    this.transfersNo = React.createRef();

    this.filters = [];
  }

  filterFlights = () => {
    this.props.filterFlights(Object.values(this.filters));
  }

  changePriceFilter = () => {
    if (this.priceToggle.current.checked) {
      const priceMin = +this.priceMin.current.value;
      const priceMax = +this.priceMax.current.value || Number.MAX_SAFE_INTEGER;

      this.filters.priceFilter = flights =>
        flights.filter(f => f.price >= priceMin && f.price <= priceMax);
    } else {
      this.filters.priceFilter = flights => flights;
    }

    this.filterFlights();
  }

  changeTransfersFilter = () => {
    if (this.transfersToggle.current.checked) {
      this.filters.transfersFilter = flights =>
        flights.filter(f => f.outboundPath.length <= +this.transfersNo.current.value + 1 && f.inboundPath.length <= +this.transfersNo.current.value + 1);
    } else {
      this.filters.transfersFilter = flights => flights;
    }

    this.filterFlights();
  }

  render() {
    return (
      <div className={styles.filters}>
        <div className={styles.filter}>
          <h2>Price</h2>
          <div className={styles.values}>
            <div className={styles.checkboxCont}>
              <input type="checkbox" ref={this.priceToggle} id="priceToggle" onChange={this.changePriceFilter} />
              <label htmlFor="priceToggle" />
            </div>
            <div>
              <strong>Min</strong>
              <input type="number" ref={this.priceMin} onChange={this.changePriceFilter} min="0" defaultValue={0} />
            </div>
            <div>
              <strong>Max</strong>
              <input type="number" ref={this.priceMax} onChange={this.changePriceFilter} defaultValue={0} />
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <h2>Transfers</h2>
          <div className={styles.values}>
            <div className={styles.checkboxCont}>
              <input type="checkbox" ref={this.transfersToggle} id="transfersToggle" onChange={this.changeTransfersFilter} />
              <label htmlFor="transfersToggle" />
            </div>
            <div>
              <strong>Max</strong>
              <input type="number" ref={this.transfersNo} onChange={this.changeTransfersFilter} min="0" defaultValue={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}