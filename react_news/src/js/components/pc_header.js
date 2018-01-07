import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "news",
    }
  }
  render() {
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
          <a href="/" class="logo">
            <img src="./src/images/logo.png" alt="logo"></img>
            <span>ReactNews</span>
          </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="news">
                  <Icon type="appstore" />News
              </Menu.Item>
              <Menu.Item key="finance">
                  <Icon type="appstore" />Finance
              </Menu.Item>
              <Menu.Item key="sports">
                  <Icon type="appstore" />Sports
              </Menu.Item>
              <Menu.Item key="business">
                  <Icon type="appstore" />Business
              </Menu.Item>
              <Menu.Item key="lifestyle">
                  <Icon type="appstore" />Lifestyle
              </Menu.Item>
              <Menu.Item key="tech">
                  <Icon type="appstore" />Tech
              </Menu.Item>
              <Menu.Item key="science">
                  <Icon type="appstore" />Science
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  };
}
