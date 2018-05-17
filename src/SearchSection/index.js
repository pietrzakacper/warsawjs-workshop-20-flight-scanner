import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export const SerachSectionInput = ({
  onChange, value, label, type = "text",
}) => (
  <div className="control column">
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      margin="normal"
    />
  </div>
);

export const SerachSectionSelect = ({
  onChange, value, label, options = [],
}) => (
  <div className="control column">
    <div>
      <TextField
        id="select-currency-native"
        select
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      >
        { options.map((opt, i) => (
          <MenuItem key={`${label}-${i}`} value={opt.code}>
            {opt.city} ({opt.country})
          </MenuItem>
        )) }
      </TextField>
    </div>
  </div>
);