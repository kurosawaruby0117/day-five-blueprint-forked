import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const API = {
  prices: () => api.get("tickers"),
  exchange: () => api.get("exchanges"),
  coins: () => api.get("coins")
};
