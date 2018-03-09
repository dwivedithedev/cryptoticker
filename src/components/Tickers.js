import React, { Component } from 'react';
import './Tickers.css';
import axios from 'axios';
import Cryptocurrency from './Cryptocurrency';


class Tickers extends Component {

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10")
        .then(response => {
            var wanted = ["bitcoin", "ripple", "ethereum"];
            var result = response.data.filter(currency => wanted.includes(currency.id));
            this.setState({ data: result});
        })
        .catch(err => console.log(err));
    }

componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval( () => this.fetchCryptocurrencyData(), 10 * 1000);
}




    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 'bitcoin',
                    name: "Bitcoin",
                    price_inr: '1',
                    symbol: 'BTC',
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",

                },

                {
                    id: 'ripple',
                    name: "Ripple",
                    price_inr: '1',
                    symbol: 'XRP',
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },

                {
                    id: 'ethereum',
                    name: "Ethereum",
                    price_inr: '1',
                    symbol: 'ETH',
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        };
    }

render() {
        var tickers = this.state.data.map( (currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
);
    
return (
    <div className="tickers-containers">
        <ul className="tickers">{tickers}</ul><br />
        <i>API from <a href="http://www.coinmarketcap.com">CoinMarketCap</a> and Developed by <a href='http://www.github.com/dwivedithedev'>@dwivedithedev</a></i>
    </div>
);



    }
}

export default Tickers;
