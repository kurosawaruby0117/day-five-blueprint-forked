import React from "react";
import { API } from "../../api";
import PricePresenter from "./pricePresenter";

export default class Price extends React.Component {
  state = {
    prices: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const { data: prices } = await API.prices();
      const newprices=prices.slice(0,50);
      this.setState({ prices:newprices });
    } catch {
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { prices, loading } = this.state;
    return <PricePresenter prices={prices} loading={loading} />;
  }
}


