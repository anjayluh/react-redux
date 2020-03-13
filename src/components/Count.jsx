import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterActions.jsx';

const useStyles = {
  counter: {
      flexGrow: 1,
      marginRight: '15px'
  },
  counterItem: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: '5px',
      marginTop: '5px'
  },
  action: {
    borderRadius: '5px',
    width: '150px',
    height: '40px'
  },
  actionAdd: {
      backgroundColor: 'magenta'     
  },
  actionRemove: {
      backgroundColor: 'red'
  },
  actionReset: {
      backgroundColor: 'cyan'
  },
};

export default function Counter() {
  const { count  } = useSelector(state => ({
    count: state.counter.count,
  }));
  const dispatch = useDispatch();

  return (
      <div style={useStyles.counter}>
          <div style={useStyles.counterItem}>
              {count}
          </div>
          <div style={useStyles.counterItem}>
              <button style={{...useStyles.action, ...useStyles.actionAdd }} onClick={() => dispatch(increment())}>UP YOU GO</button>
          </div>
          <div style={useStyles.counterItem}>
              <button style={{...useStyles.action, ...useStyles.actionRemove }} onClick={() => dispatch(decrement())}>DOWN YOU GO</button>
          </div>
          <div style={useStyles.counterItem}>
              <button style={{...useStyles.action, ...useStyles.actionReset }} onClick={() => dispatch(reset())}>RESET</button>
          </div>
      </div>
  )
}