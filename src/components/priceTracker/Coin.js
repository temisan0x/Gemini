import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components';
import axios from 'axios';

const CryptoTable = styled.div `

    position:relative;
    top:70px;
    padding-left: 100px;
    padding-right: 100px;

    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        border-collapse:seperate;
        border-spacing:0 5px;
    }
    
    #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    #customers tr:nth-child(even){background-color: #f2f2f2;}
    
    #customers tr:hover {background-color: #ddd;}
    
    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #161819;
        color: white;
    }

    tr {
        height:100px;
    }

    img{
        width:40px;
        margin-right:50px;
    }


    .green {
        color:#008000;
    }

    .red {
        color:#ff0000;
    }

    table {
        cursor: pointer;
    }
`

function Coin () {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <CryptoTable>
            <table id="customers">
                <tr>
                    <th>Crypto Name</th>
                    <th>Current Price</th>
                    <th>Market Cap Change</th>
                    <th>Market Cap Rank</th>
                </tr>
                {coins.map(coin => {
                    return (
                        <tr>
                            <td>
                                <img src={coin.image} alt="crypto-logo" />
                                {coin.name}
                            </td>
                            <td>{coin.current_price}</td>
                            {coin.market_cap_change_percentage_24h < 0 ? (
                                <td className="red">
                                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                                </td>
                            ): (
                                <td className="green">
                                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                                </td>
                            )}
                            <td>{coin.market_cap_rank}</td>
                        </tr>
                    )
                })}
            </table>
        </CryptoTable>
    )
}

export default Coin
