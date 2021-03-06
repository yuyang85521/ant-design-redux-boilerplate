import { combineReducers } from 'redux';
import Immutable from 'immutable';
import {
  counter as counterAction
} from '../actions/';

const counter = (state = Immutable.Map({ value: 0 }), action) => {
  switch (action.type) {
    case counterAction.CHANGE:
      return state.merge({
        value: state.get('value') + action.value
      });

    case counterAction.COUNTER_QUERY_SUCCESS:
      return state.merge({
        value: action.payload.value
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
