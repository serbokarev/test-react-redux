import { RootState } from "..";

export const tradeReducer = (state: RootState, action) => {
  switch (action.type) {
    case 'OpenTrade':
      return { ...state, loading: true };
    case 'AddTrade':
      return {
        ...state,
        trades: [...state.trades, action.payload],
        loading: false
      };
    default:
      return state;
  }
}
