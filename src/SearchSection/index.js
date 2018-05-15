import React from "react";
import styles from "./styles.css";

export const SerachSectionInput = ({
  onChange, value, label, type = "text",
}) => (
  <label className={styles.label}>
    <small><strong>{label}</strong></small>
    <input type={type} value={value} onChange={onChange} placeholder={label} />
  </label>
);

export const SerachSectionSelect = ({
  onChange, value, label, options = [],
}) => (
  <label className={styles.label}>
    <small><strong>{label}</strong></small>
    <select value={value} onChange={onChange}>
      <option value="" defaultValue>{label}</option>
      { options.map((opt, i) => (<option key={`${label}-${i}`} value={opt.code}>{opt.city}</option>)) }
    </select>
  </label>
);