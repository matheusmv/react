import P from 'prop-types';

import './styles.css';

export function Input({
  inputType,
  inputPlaceholder,
  inputValue,
  inputChecked,
  onChangeFn,
  inputRef,
  inputStyle,
}) {
  return (
    <input
      className="card--input"
      type={inputType}
      value={inputValue}
      checked={inputChecked}
      placeholder={inputPlaceholder}
      onChange={onChangeFn}
      ref={inputRef}
      style={inputStyle}
    />
  );
}

Input.propTypes = {
  inputType: P.string,
  inputPlaceholder: P.string,
  inputValue: P.any,
  onChangeFn: P.func,
  inputRef: P.object,
  inputChecked: P.bool,
  inputStyle: P.object,
};
