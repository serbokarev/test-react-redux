import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Trade } from "./trade.interface";
import { TradeModalForm } from "./TradeModalForm";

interface IProps {

}

const TradeRow = ({ trade }: { trade: Trade }) => {
  return (<div>
    {`${trade.currency}${trade.amount.toFixed(2)}`}
  </div>);
};

export const TradePage = (props: IProps) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const trades = useSelector<RootState, Trade[]>((state) => state.trades) || [];
  const loading = useSelector<RootState, boolean>((state) => state.loading) || false;

  React.useEffect(() => {
    setOpenModal(false);
  }, [trades])

  const handleOpenTrade = () => {
    if (!openModal) {
      setOpenModal(true);
    }
  }

  return <div>
    <p>Trades list:</p>

    {trades.length
      ? trades.map((trade, i) => <TradeRow key={`trade-${i}`} trade={trade} />)
      : !loading ? <div>No trades yet</div> : null
    }

    {loading ? <div>Opening...</div> : null}

    <button onClick={handleOpenTrade}>
      Open Trade
    </button>

    {openModal
      ? <TradeModalForm toggle={() => setOpenModal(!openModal)} />
      : null
    }

  </div>;
};
