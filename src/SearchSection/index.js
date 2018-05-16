import React from "react";

export const SerachSectionInput = ({
  onChange, value, label, type = "text",
}) => (
  <div className="control column">
    <label className="label">{label}</label>
    <input className="input" type={type} value={value} onChange={onChange} placeholder={label} />
  </div>
);

export const SerachSectionSelect = ({
  onChange, value, label, options = [],
}) => (
  <div className="control column">
    <label className="label">{label}</label>
    <div className="select is-fullwidth">
      <select value={value} onChange={onChange}>
        <option value="" defaultValue>{label}</option>
        { options.map((opt, i) => (<option key={`${label}-${i}`} value={opt.code}>{opt.city} ({opt.country})</option>)) }
      </select>
    </div>
  </div>
);