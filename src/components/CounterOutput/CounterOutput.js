import React from 'react';
import PropTypes from 'prop-types';

import s from './CounterOutput.css';

const counterOutput = (props) => {
  const { value } = props;
  return (
    <div className={s.CounterOutput}>
      Current Counter:
      {` ${value}`}
    </div>);
};

counterOutput.propTypes = {
  value: PropTypes.number.isRequired,
};

export default counterOutput;
