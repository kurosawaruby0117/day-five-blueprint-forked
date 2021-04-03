import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loding";

const CoinPresenter = ({ coins, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return coins.map((coin) => (
      <div key={coin.id}>
        <span>
          #{coin.rank} {coin.name}/${coin.symbol}
        </span>
      </div>
    ));
  }
};
CoinPresenter.propTypes={
  coins:PropTypes.array,
  loading:PropTypes.bool
}

export default CoinPresenter;
