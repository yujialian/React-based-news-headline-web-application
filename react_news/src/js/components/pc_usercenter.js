import React from 'react';
import {Row, Col, Card} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Link, Router, Route, browserHistory} from 'react-router-dom';
export default class PCUserCenter extends React.Component {
  render() {
    return (<div>
      <PCHeader/>
      <Row>
        <Col span={2}></Col> {/*Total 24 columns layout.*/}
        <Col span={20}>
          <Tabs>
            <TabPane tab="My collections" key="1"></TabPane>
            <TabPane tab="My Comments" key="2"></TabPane>
            <TabPane tab="Headshot Setting" key="3"></TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>

      <PCFooter/>
    </div>);
  }
}
