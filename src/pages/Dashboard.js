import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Routs from "../components/Routs";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to='/dashboard'>Dashboard</Link>, "1", <PieChartOutlined />),

  getItem("Orders", "sub2", <ShoppingCartOutlined />, [
    getItem(<Link to='/ordre/new'>New Orders</Link>, "3"),
    getItem(<Link to="/ordre/list">All Orders</Link>, "4"),
    getItem(<Link to="/ordre/confirmed">Cofirmd Orders</Link>, "5"),
    getItem(<Link to="/ordre/canceled">Canceled Orders</Link>, "6"),
  ]),
  getItem(<Link to='/products/list' >Products</Link>, "10", <AppstoreOutlined />),
  getItem(<Link to='/hubs/list'>Hubs</Link>, "11", <ShopOutlined />),
  getItem(<Link to='/roles/list'>User Roles</Link>, "13", <InfoCircleOutlined />),
  getItem(<Link to='/categories/list'>Categories</Link>, "14", <ApartmentOutlined />),
  getItem(<Link to='/reservations/list'>Reservations </Link>, "15", <FileOutlined />),

  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to='/users/list'>All Users</Link>, "12"),
    getItem("Admin", "16"),
    getItem("Costumer", "17"),
    getItem("Delivery", "18"),
  ]),
];
const Dashboard = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh", }} >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }} />
        <Content style={{ margin: "0 16px", }} >
          <Breadcrumb style={{ margin: "16px 0", }} >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 10, minHeight: 360, background: colorBgContainer, }} >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", }} >
          Restaurant ©2023 Created by Freewsad        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
