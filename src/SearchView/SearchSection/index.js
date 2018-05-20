import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

export const SearchSectionInput = ({
  onChange, value, label, type = 'text',
}) => (
  <Grid item xs={12} sm={3}>
    <div className='control column'>
      <TextField
        type={type}
        value={value}
        onChange={onChange}
        label={label}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin='normal'
      />
    </div>
  </Grid>
)


export const SearchSectionSelect = ({
  onChange, value, label, options = [],
}) => (
  <Grid item xs={12} sm={3}>
    <div className='control column'>
      <div>
        <TextField
          id='select-currency-native'
          select
          label={label}
          value={value}
          onChange={onChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
        >
          {
            options.map((opt, i) => (
              <MenuItem key={`${label}-${i}`} value={opt.code}>
                {opt.city} ({opt.country})
              </MenuItem>
            ))
          }
        </TextField>
      </div>
    </div>
  </Grid>
)