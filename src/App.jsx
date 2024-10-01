import { Menu } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const App = () => {
  const [currencies, setCurrencies] = useState([]);

  const fetchCurrencies = () => {
    axios.get("http://127.0.0.1:8000/cryptocurrencies").then((r) => {
      const currenciesResponse = r.data;
      const menuItems = [
        getItem(
          "Список криптовалют",
          "g1",
          null,
          currenciesResponse.map((c) => {
            return { label: c.name, key: c.id };
          }),
          "group"
        ),
      ];
      setCurrencies(menuItems);
    });
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={currencies}
    />
  );
};
export default App;
