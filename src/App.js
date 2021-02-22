import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Divider,
  Switch,
  Checkbox,
  Input,
  DatePicker,
  Space,
  Slider,
  Alert,
} from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  const handleSwitchChange = (checked) => {
    window.less
      .modifyVars({
        "@primary-color": checked ? "#52c41a" : "purple",
      })
      .then(() => {
        console.log("color changed!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>2</Breadcrumb.Item>
          <Breadcrumb.Item>3</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 50 }}>
          <div style={{ textAlign: "center" }}>
            <Space>
              Cambiar Color
              <Switch onChange={handleSwitchChange} />
            </Space>
          </div>
          <Divider />
          <div>
            <Space>
              <Button type="primary">BTN</Button>
              <Checkbox defaultChecked />
              <Switch defaultChecked />
              <Input />
            </Space>
          </div>
          <Alert message="Alerta" type="info" showIcon />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
