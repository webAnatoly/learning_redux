import React from 'react';
import PropTypes from 'prop-types';

import s from './CounterControl.css';

const counterControl = (props) => {
  const { label, clicked } = props;
  return (
    <button className={s.CounterControl} onClick={clicked} type="button">
      {label}
    </button>);
};

counterControl.propTypes = {
  label: PropTypes.number.isRequired,
  clicked: PropTypes.func,
};

counterControl.defaultProps = {
  clicked: () => null,
};

export default counterControl;
