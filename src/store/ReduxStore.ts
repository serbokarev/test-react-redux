import { Trade } from 'components/Trade';
import { applyMiddleware, createStore } from 'redux';
import { addTrade } from './actions';
import { tradeReducer } from './reducers';

const tradeMiddleware = (str: any) => (next: any) => (action: any) => {
  if (action.type === "OpenTrade") {
    setTimeout(() => str.dispatch(addTrade(action.payload)), 2000);
  }
  next(action);
}

export interface RootState {
  trades: Trade[];
  loading: boolean;
}

export const initialState = {
  trades: [],
  loading: false
};

export const store = createStore(
  tradeReducer,
  initialState,
  applyMiddleware(tradeMiddleware)
);