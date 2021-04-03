import React from "react";
import { API } from "../../api";
import CoinPresenter from "./coinPresenter";

export default class Coin extends React.Component {
  state = {
    coins: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const { data: coins } = await API.coins();
      const newCoins=coins.slice(0,50);
      this.setState({ coins:newCoins });
    } catch {
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { coins, loading } = this.state;
    return <CoinPresenter coins={coins} loading={loading} />;
  }
}
