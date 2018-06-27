import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Counter.css';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
  const {
    ctr,
    onIncrementCounter,
    onDecrementCounter,
    onAddCounter,
    onSubtractCounter,
    onStoreResult,
    onDeleteResult,
    storedResults,
  } = props;
  return (
    <div>
      <CounterOutput value={ctr} />
      <CounterControl label="Increment" clicked={onIncrementCounter} />
      <CounterControl label="Decrement" clicked={onDecrementCounter} />
      <CounterControl label="Add 5" clicked={onAddCounter} />
      <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
      <hr />
      <button type="button" onClick={onStoreResult}>
        Store Result
      </button>
      <ul>
        {
          storedResults.map(elem => (
            <li key={elem.id}>
              <button onClick={() => onDeleteResult(elem.id)} type="button" className={s.Button}>
                {`${elem.value}`}
              </button>
            </li>))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  ctr: state.counter,
  storedResults: state.results,
});
/* mapStateToProps called every time the store state changes.
It receives the entire store state, and should return an object full of data.
Each field in the returned object becomes a prop for the wrapped component. */

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
  onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
  onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
  onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
  onDeleteResult: id => dispatch({ type: 'DELETE_RESULT', deleteId: id }),
});
/* mapDispatchToProps called once on component creation. It receives the dispatch method,
and should return an object full of functions that use dispatch. */

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/* connect() функция, которая возвращает Hight Order Component (т.е. другую функцию высшего порядка,
  которая на вход принимает компонент)
  В функцию connect() первым параметром передается (mapStateToProps) эта функция задает,
  что именно будет хранится в глобальном Store редакса.
  Я так понимаю, можно одновременно использовать и реактовский state и Store редакса.
  Что и как использовать зависит от решаемых задач, от того какого результата мы хотим достичь,
  от архитектуры нашего приложения и т.д.

  Вторым параметром передается какие actions я хочу диспатчить.
  Функцию connect() можно вызывать, как с двумя аргументами, так и только с одним из аргументов:
  connect(mapDispatchToProps)
  connect(null, mapDispatchToProps)
  Кроме этого вместо функции mapDispatchToProps, которая возвращает объект с диспатчами
  можно напрямую передавать объект с диспатчами, если хочется, если так удобнее и т.д.
*/

Counter.propTypes = {
  ctr: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
  onDecrementCounter: PropTypes.func.isRequired,
  onAddCounter: PropTypes.func.isRequired,
  onSubtractCounter: PropTypes.func.isRequired,
  onStoreResult: PropTypes.func.isRequired,
  onDeleteResult: PropTypes.func.isRequired,
  storedResults: PropTypes.arrayOf(PropTypes.object),
};

Counter.defaultProps = {
  storedResults: [],
};
