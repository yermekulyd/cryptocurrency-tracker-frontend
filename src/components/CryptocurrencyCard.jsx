/* eslint-disable react/prop-types */
import { Card } from "antd";

function formatNumber(value, isPrice = false) {
  if (isPrice) {
    return value.toFixed(3); // For prices, show 3 decimal places
  }

  if (value >= 1e12) {
    return (value / 1e12).toFixed(2) + "T"; // Trillions
  } else if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B"; // Billions
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M"; // Millions
  } else if (value >= 1e3) {
    return new Intl.NumberFormat().format(value); // Thousands with commas
  } else {
    return value.toString(); // Less than a thousand
  }
}

function CryptocurrencyCard(props) {
  const { currency } = props;
  const price = currency.quote.USD.price;
  const volumeChange = Math.floor(currency.quote.USD.percent_change_24h);
  const marketCap = currency.quote.USD.fully_diluted_market_cap;

  return (
    <div>
      <Card
        className="cardStyle"
        title={
          <div className="flex items-center gap-2">
            <img
              className="currencyImg"
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
            />
            <span>{currency.name}</span>
          </div>
        }
      >
        <p>Текущая цена: {formatNumber(price, true)}$</p>
        <p>
          Изменение цены за 24 часа:{" "}
          <span
            className={volumeChange < 0 ? "text-red-500" : "text-green-500"}
          >
            {volumeChange}%
          </span>
        </p>
        <p>Текущая капитализация: ${formatNumber(marketCap)}</p>
      </Card>
    </div>
  );
}

export default CryptocurrencyCard;
