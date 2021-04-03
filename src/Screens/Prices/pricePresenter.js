import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loding";

const PricePresenter = ({ prices, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return prices.map((price) => (
      <div key={price.id}>
        <span>
          {price.name}/{price.symbol}:{price.quotes.USD.price}
        </span>
      </div>
    ));
  }
};
PricePresenter.propTypes={
  prices:PropTypes.array,
  loading:PropTypes.bool
}

export default PricePresenter;

