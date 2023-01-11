import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
 

const Basket = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const onAdd = () => {
    dispatch(counterActions.add());
  };

  const onAddTen = () => {
    dispatch(counterActions.addTen(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const onRemove = () => {
    dispatch(counterActions.remove());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main  className='container'>
      <h1>Redux Counter</h1>
      {show && <div  >{counter}</div>}
      <div>
        <button onClick={onAdd}>Add To basket</button>
        <button onClick={onAddTen}>Add to basket 10</button>
        <button onClick={onRemove}>Remove</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Basket;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
