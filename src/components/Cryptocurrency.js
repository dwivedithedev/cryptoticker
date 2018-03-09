import React, { Component } from 'react';
import './Cryptocurrency.css'
import rs from "./res/rs.ico"

class Cryptocurrency extends Component {

    render() {
        var {
            id,
            name,
            symbol,
            price_inr,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;

    return (
        <li className={"cryptocurrency " + id}>
        <p className="cryptocurrency-name">{name} ({symbol})</p>
        <h2><img src={rs}/> { (+price_inr).toFixed(2) }</h2>
        <h4>${price_usd}</h4>
        <em>Percentage Changes:-</em>
        <p>{percent_change_1h}% - 1hr</p>
        <p>{percent_change_24h}% - 24hr</p>
        <p>{percent_change_7d}% - 7d</p>
        </li>
    );
}
}

export default Cryptocurrency;