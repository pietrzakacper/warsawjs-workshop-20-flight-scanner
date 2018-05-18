import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'


const FlightsFilter = ({filterLabel, updateFilter, toggled, min, max}) => (
 <React.Fragment>
    <ListItem>
    <ListItemText
        disableTypography
        primary={(<Typography variant='headline'>{filterLabel}</Typography>)} />
    </ListItem>
    <ListItem>
        <Switch
            color='primary'
            onChange={updateFilter('toggled', true)}
            checked={toggled}
        />
        <TextField
            label='Min'
            InputProps={{inputProps: {min: 0}}}
            type='number'
            onChange={updateFilter('min')}
            value={min}
            fullWidth
        />
        <TextField
            label='Max'
            InputProps={{inputProps: {min: 0}}}
            type='number'
            onChange={updateFilter('max')}
            value={max}
            fullWidth
        />
    </ListItem>
</React.Fragment>
)

export default FlightsFilter