import { Trade } from "components/Trade/trade.interface"

export function addTrade(trade: Trade) {
  return {
    type: 'AddTrade',
    payload: trade
  }
}

export function openTrade(trade: Trade) {
  return {
    type: 'OpenTrade',
    payload: trade
  }
}