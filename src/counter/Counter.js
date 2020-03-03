import React from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counterActions';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
    increment,
    decrement,
    reset
  };
class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    const { count } = this.props;
    console.log(this.props)
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button> &nbsp;
          <span className="count">{count}</span>&nbsp;
          <button onClick={this.increment}>+</button> <br/><br/><br/>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);;
