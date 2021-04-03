import React from "react";
import { API } from "../../api";
import ExchangePresenter from "./exchangePresenter";

export default class Exchange extends  React.Component {
  state = {
    exchange: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const { data: exchange } = await API.exchange();
      const newCoins=exchange.slice(0,50);
      this.setState({ exchange:newCoins });
        
    } catch {
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { exchange, loading } = this.state;
    return <ExchangePresenter exchange={exchange} loading={loading} />;
  }
}
