import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Coin() {
  const [coin, setCoin] = useState([])
  let { coinId } = useParams();
  useEffect(() => {
    if (coinId) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': '19bd57ca54mshdcd1cb58590a19ap1f25aajsn87ce283eec4e'
        }
      };
      fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setCoin(response.data.coin)

        })
        .catch(err => console.error(err));
    }

  }, [coinId])
  return (
    <div>
      {/* <p>Name: {coin?.name || 0}</p> */}
      {/* <p>Description:{coin?.description || 0}</p> */}
     <div class="header-coin">
     {coin.name}
     </div>
     <div class="image-des"><img src={coin.iconUrl} alt="Coin" /></div>
      <div class="description">
      <div dangerouslySetInnerHTML={{ __html: coin.description }} />
      </div>
    </div>
  )
}
export default Coin;