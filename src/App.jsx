import { Menu } from "antd";

const items = [
  {
    key: "g1",
    label: "Список криптовалют",
    type: "group",
    children: [
      {
        key: "1",
        label: "Option 1",
      },
      {
        key: "2",
        label: "Option 2",
      },
    ],
  },
];

const App = () => {
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
      items={items}
    />
  );
};
export default App;
