// import React from "react";

// // import styles from "./styles.css";

// export default class FlightsFilter extends React.Component {
//   constructor() {
//     super();

//     this.priceToggle = React.createRef();
//     this.priceMin = React.createRef();
//     this.priceMax = React.createRef();
//     this.transfersToggle = React.createRef();
//     this.transfersNo = React.createRef();

//     this.filters = [];
//   }

//   filterFlights = () => {
//     this.props.filterFlights(Object.values(this.filters));
//   }

//   changePriceFilter = () => {
//     if (this.priceToggle.current.checked) {
//       const priceMin = +this.priceMin.current.value;
//       const priceMax = +this.priceMax.current.value || Number.MAX_SAFE_INTEGER;

//       this.filters.priceFilter = flights =>
//         flights.filter(f => f.price >= priceMin && f.price <= priceMax);
//     } else {
//       this.filters.priceFilter = flights => flights;
//     }

//     this.filterFlights();
//   }

//   changeTransfersFilter = () => {
//     if (this.transfersToggle.current.checked) {
//       this.filters.transfersFilter = flights =>
//         flights.filter(f =>
//           f.outboundPath.length <= +this.transfersNo.current.value + 1 &&
//           f.inboundPath.length <= +this.transfersNo.current.value + 1,
//         );
//     } else {
//       this.filters.transfersFilter = flights => flights;
//     }

//     this.filterFlights();
//   }

//   render() {
//     return (
//       <div className={styles.filters}>
//         <div className={styles.filter}>
//           <h2>Price</h2>
//           <div className={styles.values}>
//             <div className={styles.checkboxCont}>
//               <input type="checkbox" ref={this.priceToggle} id="priceToggle" onChange={this.changePriceFilter} />
//               <label htmlFor="priceToggle" />
//             </div>
//             <div className="field is-marginless">
//               <label className="label">Min</label>
//               <div className="control">
//                 <input type="number" ref={this.priceMin} onChange={this.changePriceFilter} min="0" defaultValue={0} className="input is-small" />
//               </div>
//             </div>
//             <div className="field is-marginless">
//               <label className="label">Max</label>
//               <div className="control">
//                 <input type="number" ref={this.priceMax} onChange={this.changePriceFilter} defaultValue={0} className="input is-small" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.filter}>
//           <h2>Transfers</h2>
//           <div className={styles.values}>
//             <div className={styles.checkboxCont}>
//               <input type="checkbox" ref={this.transfersToggle} id="transfersToggle" onChange={this.changeTransfersFilter} />
//               <label htmlFor="transfersToggle" />
//             </div>

//             <div className="field is-marginless">
//               <label className="label">Max</label>
//               <div className="control">
//                 <input type="number" ref={this.transfersNo} onChange={this.changeTransfersFilter} min="0" defaultValue={1} className="input is-small" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core/LinearProgress";

const drawerWidth = 400;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

class FlightsFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      priceToggle: false,
      priceMin: 0,
      priceMax: 0,

      transfersToggle: false,
      transfersNo: 1,
    };
  }

  updateStateField = (field, checkbox = false) => (e) => {
    const newState = {};

    if (checkbox) {
      newState[field] = e.target.checked;
    } else {
      newState[field] = e.target.value;
    }

    this.setState(newState, () => {
      this.props.filterFlights(
        [
          flights => flights.filter(
            f => (!this.state.priceToggle) ||
            (f.price >= this.state.priceMin && f.price <= this.state.priceMax)),
          flights => flights.filter(
            f => (!this.state.transfersNo) ||
            (
              f.outboundPath.length <= this.state.transfersNo + 1 &&
              f.inboundPath.length <= this.state.transfersNo + 1
            )),
        ],
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <ListItemText disableTypography primary={(<Typography variant="headline">Price</Typography>)} />
          </ListItem>
          <ListItem>
            <Switch
              color="primary"
              onChange={this.updateStateField("priceToggle", true)}
              checked={this.state.priceToggle}
            />
            <TextField
              label="Min"
              type="number"
              onChange={this.updateStateField("priceMin")}
              value={this.state.priceMin}
            />
            <TextField
              label="Max"
              type="number"
              onChange={this.updateStateField("priceMax")}
              value={this.state.priceMax}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText disableTypography primary={(<Typography variant="headline">Transfers</Typography>)} />
          </ListItem>
          <ListItem>
            <Switch
              color="primary"
              onChange={this.updateStateField("transfersToggle", true)}
              checked={this.state.transfersToggle}
            />
            <TextField
              label="Max"
              type="number"
              onChange={this.updateStateField("transfersNo")}
              value={this.state.transfersNo}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(FlightsFilter);