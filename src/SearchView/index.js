import React, { Fragment } from "react";
import TopBar from "../TopBar/";
import { SerachSectionInput, SerachSectionSelect } from "../SearchSection/";

import styles from "./styles.css";

export default class SearchView extends React.Component {
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

    return (
      <Fragment>
        <TopBar />
        <form onSubmit={this.onSubmit} className={styles.search}>
          <div className="field is-grouped" />

          <div className="columns">
            <SerachSectionSelect label="From" options={options} value={this.state.from} onChange={this.onFromChange} />
            <SerachSectionSelect label="To" options={options} value={this.state.to} onChange={this.onToChange} />

            <SerachSectionInput label="Depart" type="date" value={this.state.depart} onChange={this.onDepartChange} />
            <SerachSectionInput label="Return" type="date" value={this.state.return} onChange={this.onReturnChange} />
          </div>

          <input type="submit" value="Search" className="button is-link is-medium" />
        </form>
      </Fragment>
    );
  }
}
