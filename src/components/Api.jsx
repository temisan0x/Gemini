import axios from 'axios';
import React, {useState, useEffect} from 'react'


function Api() {
    const [coins,setCoins]= useState([])
    
    useEffect(()=> {
        axios.get(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => {
            setCoins(res.data);
        }).catch(error => alert('error'))
    }, [])

    return (
        <div>
            <div className="coin">
                
            </div>
        </div>
    )
}

export default Api
