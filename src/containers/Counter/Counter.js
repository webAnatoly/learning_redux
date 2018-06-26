import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
    const {
      ctr,
      onIncrementCounter,
      onDecrementCounter,
      onAddCounter,
      onSubtractCounter,
  } = props;
    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter} />
        <CounterControl label="Add 5" clicked={onAddCounter} />
        <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
      </div>
    );
};

Counter.propTypes = {
  ctr: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
  onDecrementCounter: PropTypes.func.isRequired,
  onAddCounter: PropTypes.func.isRequired,
  onSubtractCounter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ctr: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
  onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
  onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/* connect() функция, которая возвращает Hight Order Component (т.е. другую функцию высшего порядка,
  которая на вход принимает компонент)
  В функцию connect() первым параметром передается какая именно часть state будет хранится
  в глобальном Store
  Вторым параметром передается какие actions я хочу диспатчить в этот контейнер.
  Функцию connect() можно вызывать только с одним из параметров:
  connect(mapDispatchToProps)
  connect(null, mapDispatchToProps)
*/
