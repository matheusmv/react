import React from 'react';

import P from 'prop-types';
import './styles.css';

export function TextInput({ handleChange, searchValue }) {
  return (
    <input className="text-input" onChange={handleChange} value={searchValue} type="search" placeholder="Search" />
  );
}

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string,
};
