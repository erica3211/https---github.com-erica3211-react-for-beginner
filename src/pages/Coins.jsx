import { useState, useEffect } from "react";
import GoBackHome from "../components/GoBackHome";
function Coins() {
  const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState(); => 이렇게 되면 coins의 초기값이 undefind가 되기 때문에 length를 가질 수 없음
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState([]);
  const [money, setMoney] = useState(0);
  const [IsMoney, setIsMoney] = useState(false);
  // console.log("초기값", coin);
  const onMoneyChange = (event) => {
    setMoney(parseFloat(event.target.value));
    setIsMoney(true);
  };
  const onCoinChange = (event) => {
    setCoin(coins[event.target.value]);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setCoin(coins[0]);
  }, [coins]);
  return (
    <div>
      <GoBackHome page={"/"} />

      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onCoinChange}>
            {coins.map((coin, idx) => (
              <option key={idx} value={idx}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            금액을 입력하세요 :
            <input
              onChange={onMoneyChange}
              value={money}
              type="number"
              placeholder="금액을 입력하시오."
            ></input>
          </div>
          {IsMoney && money !== "" && money ? (
            <div>
              당신은 {coin.name}을 {money / coin.quotes.USD.price}개 살 수
              있습니다.
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Coins;
