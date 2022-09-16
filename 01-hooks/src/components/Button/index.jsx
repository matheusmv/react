import P from 'prop-types';

import './styles.css';

export function Button({ text, clickFun, btnStyle }) {
  return (
    <button className="card--button" onClick={clickFun} style={btnStyle}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: P.string,
  clickFun: P.func,
  btnStyle: P.object,
};
