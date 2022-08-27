import React, {useEffect, useState} from 'react';
import '../App.css';
import CoinRow from '../CoinRow';

function Home() {
  const [stats, setStats] = useState();
  const [coins, setCoins] = useState([])
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '19bd57ca54mshdcd1cb58590a19ap1f25aajsn87ce283eec4e'
    }
  };
  fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    setCoins(response.data.coins)
    setStats(response.data.stats)
  })
	.catch(err => console.error(err));
},[])
  
    return (
  <div>
    <div id="table-total">
      <ul>
        <li class="header">Crypto App</li>
        <li>Total Cryptos: {stats?.totalCoins || 0}</li>
        <li>Total Exchnages: {stats?.totalExchanges || 0}</li>
        <li>Total Market Cap: {stats?.totalMarketCap || 0}</li>
        <li>Total 24h Vol: {stats?.total24hVolume || 0}</li>
      
      </ul>
    </div>
     
    <table>
      <tr class="row-header">
        <th>Rank</th>
        <th>Icon</th>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>24h Volume</th>
        <th>24H Change</th>
      </tr>
  
       {coins.map(coin => <CoinRow  coin={coin} />)}
     
    </table>
     
   </div>
);
}

export default Home;