import React from "react";
import { useNavigate} from "react-router-dom";       
const CoinRow = (props) => {
  const history = useNavigate();
  return (
    
      <tr class = "row">
        <td>{props.coin.rank}</td>
        <td><img src={props.coin.iconUrl} alt="Coin" /></td>
        <td class="link" onClick={() => history(`/coin/${props.coin.uuid}`)}>
          { props.coin.name}</td>
        <td>{props.coin.price}</td>
        <td>{props.coin.marketCap}</td>
        <td>{props.coin["24hVolume"]}</td>
        <td>{props.coin.change}</td>
      </tr>
    
  )
};

export default CoinRow;
