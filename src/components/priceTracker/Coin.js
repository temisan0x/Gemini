import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components';
import axios from 'axios';

const CryptoTable = styled.div `

    position:relative;
    top:70px;

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
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                </tr>
                <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                </tr>
                <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                </tr>
                <tr>
                <td>Königlich Essen</td>
                <td>Philip Cramer</td>
                <td>Germany</td>
                </tr>
                <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                </tr>
                <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                </tr>
                <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
                </tr>
                <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
            </tr>
        </table>
        </CryptoTable>
    )
}

export default Coin
